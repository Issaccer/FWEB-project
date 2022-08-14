import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})
export class PostsService {
getSelected(_id : number) {
  return this.http.get<any[]>(this.url + "/" + _id);
}
url:string = "http://localhost:3000/api/posts";
constructor(private http:HttpClient) { }

getAllPosts() {
return this.http.get<any[]>(this.url);
}

insertPost(name: string, game: string, newpost: number) {
  return this.http.post<any[]>(this.url, { 'name': name,'game': game, post: newpost });
  }

deletePost(_id: number) {
  return this.http.delete<any[]>(this.url + "/" + _id);
  }

updatePost(_id: number, name: string, game: string, newpost: number) {
  return this.http.put<any[]>(this.url + "/" + _id, {'name': name, 'game': game, 'post':
  newpost });
  }
}

