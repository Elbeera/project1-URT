import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { MapComponent } from '../map/map.component';
import { HttpclientService } from '../services/httpclient.service';
import { User } from '../user';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit {
  name: string = '';
  favourites: Location[] = [];
  email: string = '';
  users: User[] = [];
  constructor(
    private httpService: HttpclientService,
    private mapComponent: MapComponent
  ) {}

  async ngOnInit(): Promise<void> {
    Auth.currentAuthenticatedUser({
      bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then((user) => console.log(user))
      .catch((err) => console.log(err));
    let user = await Auth.currentAuthenticatedUser();
    const { attributes } = user;
    this.name = attributes.name;
    this.email = attributes.email;
    this.getUsers();
  }

  getUsers(): void {
    this.httpService.getAllUsers().subscribe((data) => {
      this.users = data.users;
      this.getUserById();
    });
  }

  getUserById(): void {
    let userId = this.users.filter((user) => user.email === this.email); // because users is an array of objects, it will return the full object it matches with?.
    console.log(userId);
    let userIdentity = userId[0].id;
    this.httpService.getUser(userIdentity).subscribe((data: any) => {
      this.favourites = data.users[0].favourites;
      console.log(this.favourites);
    });
  }
}
