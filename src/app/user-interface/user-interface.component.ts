import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css'],
})
export class UserInterfaceComponent implements OnInit {
  currentInterface: string = 'userProfile';
  constructor() {}

  ngOnInit(): void {}

  setInterface(page: string) {
    if (page === 'gps') {
      this.currentInterface = page;
    } else if (page === 'favourites') {
      this.currentInterface = page;
    } else if (page === 'userProfile') {
      this.currentInterface = page;
    }
  }
}
