import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})
export class PostsService {
url:string = "http://localhost:3000/api/posts";
constructor(private http:HttpClient) { }

getAllPosts() {
return this.http.get<any[]>(this.url);
}

insertPost(name: string, newpost: number) {
  return this.http.post<any[]>(this.url, { 'name': name, post: newpost });
  }
}

