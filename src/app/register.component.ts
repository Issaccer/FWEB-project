import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
//import FormBuilder and FormGroup form contents
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './userservice.service';
import { PostsService } from './posts.service';
import { myUser } from './myUser';
import { passwordMatchValidator } from './custom.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
//initialize an FormGroup object call myForm
myForm!: FormGroup;
agreed = false;
newUser !: myUser;
//dependency injection of FormBuilder as an object call fb and NgbModal
//dependency injection of FormBuilder as an object call fb
constructor(private fb: FormBuilder, private modalService: NgbModal,
  private userService: UserService, private authService: AuthService,
  private router: Router, private postsService: PostsService) {}
//Construct the FormGroup object using FormBuilder
ngOnInit() {
  this.myForm = this.fb.group({
  name: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  pwSet : this.fb.group ({
  password: ['', [Validators.required,
  Validators.minLength(8)]],
  password2: ['', [Validators.required]]
  }, {validators: passwordMatchValidator})
  });
  }
//Function to invoke an alert
onSubmit(){
  this.newUser = new myUser();
this.newUser.name = this.myForm.value.name;
this.newUser.password = this.myForm.get('pwSet.password')!.value;
this.newUser.email = this.myForm.value.email;
this.userService.addUser(this.newUser);
this.myForm.reset();
//for debugging purposes, see this message in your browser console
console.log(this.userService.getUsers());
console.log(this.newUser);
alert("Registration Successful! Your changes have been saved for" + this.newUser.name);
  }

//Function to set toggle the agreed variable between true and false
toggleAgree() {
  if (this.agreed) this.agreed = false;
  else this.agreed = true;
  }
  //Function to open our content modal
  open(content: any) {
  this.modalService.open(content);
  }
}
