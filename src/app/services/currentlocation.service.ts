import { Injectable } from '@angular/core';
import { Location } from '../location';

@Injectable({
  providedIn: 'root'
})
export class CurrentlocationService {
currentLocation: any;

  constructor() { }
  setCurrentLocation(location){
this.currentLocation = location
  }
}
