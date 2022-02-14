import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { HttpclientService } from '../services/httpclient.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  postedUser: {} = {};
  userEmail: string = '';
  verifyEmail: boolean = false;
  verificationSuccessful = false;

  constructor(private http: HttpclientService) {}

  ngOnInit(): void {}

  async signUp(userData: {
    name: string;
    password: string;
    email: string;
    mobile_number: string;
  }) {
    try {
      const { user } = await Auth.signUp({
        username: userData.email,
        password: userData.password,
        attributes: {
          email: userData.email,
          phone_number: Number(userData.mobile_number),
          name: userData.name
        },
      });
      this.userEmail = userData.email;
      this.verifyEmail = true;
      this.http
        .postUser({
          name: userData.name,
          mobile_number: Number(userData.mobile_number),
          email: userData.email,
          password: userData.password,
        })
        .subscribe((data) => {
          this.postedUser = data;
          console.log(this.postedUser);
        });
      // console.log(user);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }
  async confirmSignUp(verificationCode) {
    try {
      await Auth.confirmSignUp(
        this.userEmail,
        verificationCode.verification_code
      );
      this.verificationSuccessful = true;
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }
}
