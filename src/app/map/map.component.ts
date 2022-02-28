import {
  Component,
  OnInit,
  Renderer2,
} from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import * as Mapboxgl from 'mapbox-gl';
import { HttpclientService } from '../services/httpclient.service';
import { Location } from '../location';
import { UserFavouritesService } from '../services/user-favourites.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  map: any = Mapboxgl.Map;
  locations: Location[];

  constructor(
    private renderer: Renderer2,
    private httpService: HttpclientService,
    public userFavArray: UserFavouritesService
  ) {}

  ngOnInit(): void {
    this.getLocations();
    this.map = new Mapboxgl.Map({
      accessToken: environment.mapboxKey,
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-73.97564277199047, 40.73131422],
      zoom: 2,
    });
  }

  getLocations(): void {
    this.httpService.getAllLocations().subscribe((data) => {
      this.locations = data.locations;
      for (const feature of this.locations) {
        const el = this.renderer.createElement('div');
        el.className = 'marker';
        let coordinates = {
          lng: feature.geometry.coordinates[0],
          lat: feature.geometry.coordinates[1],
        };
        const popup = new Mapboxgl.Popup({ offset: 25 }).setHTML(
          `<img src="../../assets/McDonald's-logo.png" alt="McDonald's Logo" width="20" height="25"><h3>State: ${feature.properties.state}</h3><p>Store Url: <a href="${feature.properties.storeUrl}">Visit store Website!</a></p><p>City: ${feature.properties.city}</p><p>Phone: ${feature.properties.phone}</p><p>State: ${feature.properties.state}</p><p>Zip: ${feature.properties.zip}</p><button id="addFav" >Add to Favourites ⭐️</button>`
        );
        popup.on('open', () => {
          const button = document.getElementById('addFav');
          button.onclick = () => this.addToFavourite(feature);
        });
        new Mapboxgl.Marker({ element: el })
          .setLngLat([coordinates.lng, coordinates.lat])
          .setPopup(popup)
          .addTo(this.map);
      }
    });
  }

  addToFavourite(feature: Location) {
    this.userFavArray.addToFavourites(feature);
  }
}
