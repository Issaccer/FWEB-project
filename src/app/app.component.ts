import { Component } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spaApp';

  posts: any = [];
  
constructor(private postsService: PostsService) {
this.postsService.getAllPosts().subscribe(posts => {
this.posts = posts;
});
}
}