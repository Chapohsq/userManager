import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  users: User[] = [];
  constructor(private conServ: ConnectionService) {}

  ngOnInit(): void {
   
    this.conServ.fetchUsers()
      .then((resp) => resp.json().then((jsonArray) => (this.users = jsonArray))
      );
  }
}
