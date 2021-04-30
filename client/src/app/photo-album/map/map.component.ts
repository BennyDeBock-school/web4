import { environment } from '../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 34.66826042080585;
  lng = 135.50938185923854;

  constructor() { }

  ngOnInit(): void {
    //mapboxgl.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom: 9,
      center: [this.lng, this.lat]
    });

    // Add map controls
    this.map.addControl(new MapboxGeocoder({
      accessToken: environment.mapbox.accessToken,
      mapboxgl: mapboxgl
    }));
  }

}
