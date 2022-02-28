import { Component, OnInit, DoCheck } from '@angular/core';
import { UserFavouritesService } from '../services/user-favourites.service';
import { UserProviderService } from '../services/user-provider.service';
import { User } from '../user';
import { Location } from '../location';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit, DoCheck {
  user: Partial<User> = {
    name: '',
    email: '',
    id: 0,
    favourites: [],
  };

  favArrayNotEmpty: boolean;

  constructor(
    private userProvider: UserProviderService,
    private userFavArray: UserFavouritesService
  ) {}

  async ngOnInit(): Promise<void> {
    this.user = await this.userProvider.authenticatedUser();
  }

  ngDoCheck() {
    this.user.favourites = this.userFavArray
      .userFavourites as unknown as Location[];
    this.checkFavArray();
  }

  checkFavArray() {
    if (this.user.favourites.length === 0)
      return (this.favArrayNotEmpty = true);
    return (this.favArrayNotEmpty = false);
  }

  deleteFav(favIndex) {
    this.userFavArray.deleteFromFavourites(favIndex);
  }
}
