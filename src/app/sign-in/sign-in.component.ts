import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../services/httpclient.service';
import { User } from '../user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  username: string = '';
  password: string = '';
  userExists: boolean = false;
  users: User[] = [];

  constructor(private httpService: HttpclientService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.httpService.getAllUsers().subscribe((data) => {
      this.users = data.users;
      console.log(this.users);
    });
  }

  onLoginUser(username: string) {
    this.username = username;
    console.log(this.username);
  }
}
