import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import * as Mapboxgl from 'mapbox-gl';

import { ComponentFactoryResolver } from '@angular/core';
import { MappingIconComponent } from '../mapping-icon/mapping-icon.component';

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

  constructor(private ComponentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.map = new Mapboxgl.Map({
      accessToken: environment.mapboxKey,
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-73.97564277199047, 40.73131422],
      zoom: 3,
    });
    this.createMarker(-73.97564277199047, 40.73131422);
  }

  createMarker(lng: number, lat: number) {
    const marker = new Mapboxgl.Marker({
      draggable: true,
    })
      .setLngLat([lng, lat])
      .addTo(this.map);

    marker.on('drag', () => {
      this.chosenLngLat = marker.getLngLat();
    });
  }

  showLocations() {
    this.ComponentFactoryResolver.resolveComponentFactory(MappingIconComponent);
  }
  // dblClickMap() {
  //   this.map.on('click', (e: any) => {
  //     let coordinates = e.lngLat;
  //     if (!this.showMarker) {
  //       this.createMarker(coordinates.lng, coordinates.lat);
  //     }
  // else {
  //   coordinates = e.lngLat;
  //   this.createMarker(coordinates.lng, coordinates.lat);
  // }
  //   });
  // }
}
