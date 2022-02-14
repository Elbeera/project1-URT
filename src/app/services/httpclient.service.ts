import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../user';
import { Location } from '../location';

@Injectable({
  providedIn: 'root',
})
export class HttpclientService {
  serverUrl = 'https://ced78iemtd.execute-api.us-east-1.amazonaws.com/beta1';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<{ users: User[] }> {
    return this.http.get<{ users: User[] }>(`${this.serverUrl}/users`);
  }

  getAllLocations(): Observable<{ locations: Location[] }> {
    return this.http.get<{ locations: Location[] }>(
      `${this.serverUrl}/locations`
    );
  }
getUser(user_id) {
  return this.http.get(`${this.serverUrl}/users/${user_id}`)
}
  postUser(user: {
    name: string;
    mobile_number: number;
    email: string;
    password: string;
  }) {
    return this.http.post(`${this.serverUrl}/user`, user);
  }

//   getFavourites(user_id) {
//     return this.http.get(`${this.serverUrl}/users/${user_id}/favourites`)
//   }

//   addToFavourites(){

//   }
}