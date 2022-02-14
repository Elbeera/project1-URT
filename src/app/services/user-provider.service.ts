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
      bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then((user) => console.log())
      .catch((err) => console.log(err));
    let user = await Auth.currentAuthenticatedUser();
    const { attributes } = user;
    // this.user.name = attributes.name;
    this.user.email = attributes.email;
    this.getUsers();
  }

  getUsers(): void {
    this.httpService.getAllUsers().subscribe((data) => {
      // console.log(data.users)
      this.users = data.users;
      this.getUserById();
    });
  }

  getUserById() {
    // console.log(this.users)
    let userId = this.users.filter((user) => user.email === this.user.email); 
    // console.log(this.user.email)
    // console.log(userId);
    // let userIdentity = userId[0].id;
    this.httpService.getUser(userId[0].id).subscribe((data: any) => {
      this.user.favourites = data.users[0].favourites;
      // console.log(this.user.favourites);
      this.user.name = data.users[0].name;
      this.user.email = data.users[0].email;
      this.user.id = data.users[0].id
      // console.log(this.user)
      return this.user;

    });
  }
}
