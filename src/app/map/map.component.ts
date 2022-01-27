import { Component, OnInit, Renderer2 } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import * as Mapboxgl from 'mapbox-gl';
import { allBranches } from 'db-seeding/allBranches';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  map: any = Mapboxgl.Map;
  showMarker: boolean = false;

  chosenLngLat: {
    lng: number;
    lat: number;
  } = {
    lng: -0.24,
    lat: 51.5,
  };

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.map = new Mapboxgl.Map({
      accessToken: environment.mapboxKey,
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-73.97564277199047, 40.73131422],
      zoom: 3,
    });
    for (const feature of allBranches.features) {
      const el = this.renderer.createElement('div');
      el.className = 'marker';

      new Mapboxgl.Marker({ element: el })
        .setLngLat(feature.geometry.coordinates)
        .setPopup(
          new Mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              `<img src="../../assets/McDonald's-logo.png" alt="McDonald's Logo" width="20" height="25"><h3>State: ${feature.properties.state}</h3><p>Store Url: <a href="${feature.properties.storeUrl}">Visit store Website!</a></p><p>City: ${feature.properties.city}</p><p>Phone: ${feature.properties.phone}</p><p>State: ${feature.properties.state}</p><p>Zip: ${feature.properties.zip}</p>`
            )
        )
        .addTo(this.map);
    }
  }
}
