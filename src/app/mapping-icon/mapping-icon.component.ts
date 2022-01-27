import { Component, OnInit } from '@angular/core';
import { allBranches } from '../../../db-seeding/allBranches';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapping-icon',
  templateUrl: './mapping-icon.component.html',
  styleUrls: ['./mapping-icon.component.css'],
})
export class MappingIconComponent implements OnInit {
  map: any = Mapboxgl.Map;

  constructor() {}

  ngOnInit(): void {
    for (const feature of allBranches.features) {
      const el = document.createElement('div');
      el.className = 'marker';

      new Mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .addTo(this.map);
    }
  }
}
