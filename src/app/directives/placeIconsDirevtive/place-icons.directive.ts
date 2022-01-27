import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceIcons]',
})
export class PlaceIconsDirective {
  constructor(public ViewContainerRef: ViewContainerRef) {}
}
