import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class UserService {
    url: string = "http://localhost:3000/api/users";
    constructor(private http: HttpClient) { }

    getUsers(): Observable<any[]> {
        return this.http.get<any[]>
            (this.url);
    }

    insertPost(name: string, email: string, password: string, newpost: number) {
        return this.http.post<any[]>(this.url, { 'name': name, 'email': email, 'password': password, post: newpost });
    }

    deletePost(_id: number) {
        return this.http.delete<any[]>(this.url + "/" + _id);
    }

    updatePost(_id: number, name: string, email: string, password: string, newpost: number) {
        return this.http.put<any[]>(this.url + "/" + _id, {'name': name, 'email': email, 'password': password, 'post':
        newpost });
        }
}