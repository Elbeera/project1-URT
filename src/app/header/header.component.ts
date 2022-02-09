import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userName: string = 'Hothyfa';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  async signOut() {
    try {
      await Auth.signOut();
      this.router.navigateByUrl('/signIn');
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
}
