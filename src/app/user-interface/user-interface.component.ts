import { CurrentlocationService } from './../services/currentlocation.service';
import { FavouritesComponent } from '../favourites/favourites.component';

import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserProviderService } from '../services/user-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css'],
})
export class UserInterfaceComponent implements OnInit {

  currentInterface: string = '';
  name: string = '';
  email: string = '';
  users: User[] = [];
  anon: any;


  user: Partial<User> = {
    name: '',
    email: '',
    id: 0,
    favourites: [],
  };

  getCurrentLocation: any;
 
  constructor(
    private router: Router,
    private httpService: HttpclientService,
    private userProvider: UserProviderService,
    private CurrentlocationService: CurrentlocationService
  ) {

  }

  async ngOnInit(): Promise<void> {
    this.user = await this.userProvider.authenticatedUser();
  }

  ngDoCheck() {
    this.getCurrentLocation = this.CurrentlocationService.currentLocation as unknown as Location

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

  signOut(): void {
    console.log('Signing out');
    Auth.signOut();
    this.router.navigate(['/signIn']);
  }

 createAccount():void {
    this.router.navigate(['/signUp'])
  }
}
