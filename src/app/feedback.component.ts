import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
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
  posts: any = [];

  constructor(private postsService: PostsService, private fb: FormBuilder, private modalService: NgbModal) {
    // Retrieve posts from the API
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  //Construct the FormGroup object using FormBuilder
  ngOnInit() {
    this.myform = this.fb.group({
      name: '',
      game: '',
      post: '',
    });
  }

  //Function to invoke an alert
  onsubmit() {
    this.postsService.insertPost(
      this.myform.value.name,
      this.myform.value.game,
      this.myform.value.post).subscribe((results: any) => {
        location.reload();
        alert("Feedback have been successfully posted!");
      });
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

  deletePost(_id: number) {
    this.postsService.deletePost(_id).subscribe(results => {
      location.reload();
    });
  }

  updatePost(_id: number) {
    var name = (document.getElementById('_name') as
      HTMLInputElement).value;
    var game = (document.getElementById('_game') as
      HTMLInputElement).value;
    var newpost = (document.getElementById('_post') as
      HTMLInputElement).value;
    this.postsService.updatePost(_id, name, game,
      parseInt(newpost)).subscribe(results => {
        location.reload();
      });
  }

  title = 'Feedback';

}
