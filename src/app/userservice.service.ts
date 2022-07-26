import { Injectable } from '@angular/core';
import { myUser } from './myUser';

@Injectable({
providedIn: 'root'
})
export class UserService {
private listOfUsers: myUser[] = [
{
name: 'Jane',
email: 'Jane@tp.edu.sg',
phone: '89999999',
password: "password"
},
{
name: 'John',
email: 'John@tp.edu.sg',
phone: '81481748',
password: "password"
}
];
constructor() { }
getUsers(): myUser[] {
return this.listOfUsers;
}
addUser(item: myUser): void {
this.listOfUsers.push(item);
}
}
