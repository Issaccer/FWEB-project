import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    regUserUrl: string = "http://localhost:3000/api/reguser/";
    authuser: string = "http://localhost:3000/api/authuser/";

    constructor(private http: HttpClient) { }
    regUser(name: string, email: string, password: string, role: string) {
        return this.http.post<any[]>(this.regUserUrl, {
            'name': name,
            'email': email,
            'password': password,
            'role': role,
        });
    }
    authUser(name: string, password: string) {
        return this.http.post<any[]>(this.authuser, {
            'name': name,
            'password': password
        });
    }
    setSecureToken(secure_token: string) {
        sessionStorage.setItem("LoggedIn", secure_token)
    }
    getSecureToken() {
        return sessionStorage.getItem("LoggedIn")
    }
    setUserRole(role: string) {
        sessionStorage.setItem("UserRole", role);
    }
    getUserRole() {
        return sessionStorage.getItem("UserRole")
    }
    logout() {
        sessionStorage.removeItem("LoggedIn");
        sessionStorage.removeItem("UserRole");
    }
}