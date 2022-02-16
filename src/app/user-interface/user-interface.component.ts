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
