import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { myReview } from './myReview';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  myform!: FormGroup;
  agreed = false;
  newReview !: myReview;

  constructor(private fb: FormBuilder, private modalService: NgbModal) {}

  //Construct the FormGroup object using FormBuilder
ngOnInit() {
  this.myform = this.fb.group({
  name: '',
  game: '',
  feedback: '',
  });
  }

  //Function to invoke an alert
onsubmit()
{
  this.newReview = new myReview();
this.newReview.name = this.myform.value.name;
this.newReview.game = this.myform.value.game;
this.newReview.feedback = this.myform.value.feedback;
this.myform.reset();
//for debugging purposes, see this message in your browser console
console.log(this.newReview);
alert("Feedback have been successfully posted!");
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

  title = 'Feedback';

}
