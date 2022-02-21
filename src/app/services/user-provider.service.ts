import { HttpclientService } from './httpclient.service';
import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Location } from '@angular/common';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class UserProviderService {
  users: User[] = [];
  user: {
    name: string;
    email: string;
    id: number;
    favourites: Location[];
  } = {
    name: '',
    email: '',
    id: 0,
    favourites: [],
  };
  constructor(private httpService: HttpclientService) {}

  async authenticatedUser() {
    Auth.currentAuthenticatedUser({
      bypassCache: true, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then()
      .catch((err) => console.log(err));
    let user = await Auth.currentAuthenticatedUser();
    const { attributes } = user;
    this.user.email = attributes.email;

    return new Promise((resolve) => {
      this.httpService.getAllUsers().subscribe((data) => {
        this.users = data.users;
        let userId = this.users.filter(
          (user) => user.email === this.user.email
        );
        this.httpService.getUser(userId[0].id).subscribe((data: any) => {
          console.log(userId[0].id)
          this.user.favourites = data.users[0].favourites;
          this.user.name = data.users[0].name;
          this.user.email = data.users[0].email;
          this.user.id = data.users[0].id;
          resolve(this.user);
        });
      });
    });
  }
}
