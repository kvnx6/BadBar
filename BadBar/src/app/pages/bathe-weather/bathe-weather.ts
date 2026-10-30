import { Component, signal } from '@angular/core';
import { Map } from '../../components/map/map';
import { WeatherDataTable } from '../../components/weather-data-table/weather-data-table';
import { LatLng } from 'leaflet';

@Component({
  imports: [Map, WeatherDataTable],
  selector: 'app-bathe-weather',
  styleUrl: './bathe-weather.css',
  templateUrl: './bathe-weather.html',
})
export class BatheWeather {
  selectedCordinates = signal<LatLng>(new LatLng(47, 8.38));
}
