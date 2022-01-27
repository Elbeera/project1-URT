import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainPageComponent } from './main-page/main-page.component';

import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { MappingIconComponent } from './mapping-icon/mapping-icon.component';
import { PlaceIconsDirective } from './directives/placeIconsDirevtive/place-icons.directive';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'mainPage', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  HeaderComponent,
  MapComponent,
  SignInComponent,
  SignUpComponent,
  MainPageComponent,
  MappingIconComponent,
  PlaceIconsDirective,
];
