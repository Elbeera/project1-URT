import { Injectable } from '@angular/core';
import { FavouritesComponent } from '../favourites/favourites.component';

@Injectable({
  providedIn: 'root',
})
export class UserFavouritesService {
  userFavourites: Location[] = [];

  constructor() {}

  addToFavourites(feature) {
    this.userFavourites.push(feature);
    console.log(this.userFavourites);
  }

  deleteFromFavourites(favIndex: number) {
    this.userFavourites.splice(favIndex, 1);
  }
}
