import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  username: string = '';
  password: string = '';
  userExists: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  // onSignIn() {
  //   console.log('hello');
  // }

  onLoginUser(username: string) {
    this.username = username;
  }
}
