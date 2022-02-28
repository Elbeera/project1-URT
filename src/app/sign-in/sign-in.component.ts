import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { User } from '../user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  errorMessage: string = '';
  username: string = '';
  password: string = '';
  users: User[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToSignUp() {
    this.router.navigateByUrl('/signUp');
  }
  async signIn(userData: { username: string; password: string }) {
    this.username = userData.username;
    try {
      const user = await Auth.signIn(userData.username, userData.password);
      this.router.navigateByUrl('/mainPage');
      console.log(user);
    } catch (error) {
      this.errorMessage = error.message;
      console.log('error signing in', error);
    }
  }
}
