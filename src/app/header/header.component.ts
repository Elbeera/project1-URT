import { Component, OnInit, ɵɵi18nAttributes } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
 userEmailAddress: string = ""
  
  constructor(private router:Router) {
    
  }

  async ngOnInit(): Promise<void> {
    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  }).then(user => 
    console.log(user))
  .catch(err => console.log(err));
  let user = await Auth.currentAuthenticatedUser();

  const { attributes } = user;
  this.userEmailAddress = attributes.email;

  }
  
  

  signOut():void{
    console.log("Signing out")
    Auth.signOut()
    this.router.navigate(['/signIn'])
  }
}
