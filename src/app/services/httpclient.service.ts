import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
