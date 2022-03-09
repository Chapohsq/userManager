import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  users: User[] = [];
  
  constructor() { }

 fetchUsers(): Promise<Response> {
   return fetch('https://jsonplaceholder.typicode.com/users')
  // .then((resp) => resp.json())
  // .then((jsonArray) => this.initUsers(jsonArray));
  }
  initUsers(jsonArray: any) {
    this.users = jsonArray;
}
}
