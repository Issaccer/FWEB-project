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

  constructor(private fb: FormBuilder, private modalService: NgbModal,
    private userService: UserService, private authService: AuthService,
    private router: Router, private postsService: PostsService) { }

  //Construct the FormGroup object using FormBuilder
  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pwSet : this.fb.group ({
        password: ['', [Validators.required,
        Validators.minLength(8)]],
        password2: ['', [Validators.required]]
        }, {validators: passwordMatchValidator}),
      role: ''
      });
  }
  //Function to invoke an alert
  onSubmit() {
    this.authService.regUser(this.myForm.value.name,
      this.myForm.value.email, this.myForm.get('pwSet.password')!.value, this.myForm.value.role).subscribe();
      this.router.navigateByUrl('/login');
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
