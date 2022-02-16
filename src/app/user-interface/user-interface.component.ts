import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { HttpclientService } from '../services/httpclient.service';

import { User } from '../user';
import { allBranches } from 'db-seeding/allBranches';
import { UserProviderService } from '../services/user-provider.service';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css'],
})
export class UserInterfaceComponent implements OnInit {
  currentInterface: string = '';
  name: string = '';
  favourites: [] = [];
  email: string = '';
  users: User[] = [];

  noUserInterface: any;
  // user: {
  //   name: string;
  //   email: string;
  //   id: number;
  //   favourites: Location[];
  // } = {
  //   name: '',
  //   email: '',
  //   id: 0,
  //   favourites: [],
  // };

  constructor(private httpService: HttpclientService ) {}

  async ngOnInit(): Promise<void> {

    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  }).then(user => 
    console.log(user))
  .catch(err => console.log(err));
  let user = await Auth.currentAuthenticatedUser();
  const { attributes } = user;
  this.name = attributes.name;
  this.email = attributes.email;
  this.getUsers()
  }

  getUsers(): void {
    this.httpService.getAllUsers().subscribe((data) => {
      this.users = data.users;
      this.getUserById();
    });
  }

  getUserById(): void {
    let userId = this.users.filter((user)=> (user.email === this.email))
    console.log(userId)
    let userIdentity = userId[0].id
this.httpService.getUser(userIdentity).subscribe((data:any) => {
      this.favourites = data.users[0].favourites;
       console.log(this.favourites)
    });
  user: Partial<User> = {
    name: '',
    email: '',
    id: 0,
    favourites: [],
  };

  constructor(
    private httpService: HttpclientService,
    private userProvider: UserProviderService
  ) {}

  async ngOnInit(): Promise<void> {
    this.user = await this.userProvider.authenticatedUser();
  }

  setInterface(page: string) {
    if (page === 'gps') {
      this.currentInterface = page;
    } else if (page === 'favourites') {
      this.currentInterface = page;
    } else if (page === 'userProfile') {
      this.currentInterface = page;
    }
  }

  onClick() {
    console.log(document.getElementById('#state'));
  }
}
