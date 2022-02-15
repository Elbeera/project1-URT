import { Component, OnInit, ɵɵi18nAttributes } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { UserProviderService } from '../services/user-provider.service';
import { User } from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: Partial<User> = {
    name: '',
    email: '',
    id: 0,
    favourites: [],
  };

  constructor(
    private router: Router,
    private userProvider: UserProviderService
  ) {}

  async ngOnInit(): Promise<void> {
    this.user = await this.userProvider.authenticatedUser();
  }

  signOut(): void {
    console.log('Signing out');
    Auth.signOut();
    this.router.navigate(['/signIn']);
  }
}
