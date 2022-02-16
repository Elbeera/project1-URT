import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { HttpclientService } from '../services/httpclient.service';
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
  // signedIn: boolean = false;
  users: User[] = [];


  constructor(private httpService: HttpclientService, private router: Router) {}

  ngOnInit(): void {
    // this.getUsers();
  }

  // getUsers(): void {
  //   this.httpService.getAllUsers().subscribe((data) => {
  //     this.users = data.users;
  //     console.log(this.users);
  //   });
  // }
goToSignUp() {
  this.router.navigateByUrl('/signUp');
}
  async signIn(userData: { username: string; password: string }) {
    console.log(userData);
    this.username = userData.username;
    try {
      const user = await Auth.signIn(userData.username, userData.password);
      // this.signedIn = true;
      this.router.navigateByUrl('/mainPage');
      console.log(user);
    } catch (error) {
      this.errorMessage = error.message;
      console.log('error signing in', error);
    }
    // console.log(userData);
  }
}
