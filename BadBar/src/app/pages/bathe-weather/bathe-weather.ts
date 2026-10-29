import { Component, inject } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  imports: [],
  selector: 'app-bathe-weather',
  styleUrl: './bathe-weather.css',
  templateUrl: './bathe-weather.html',
})
export class BatheWeather {
  protected weatherService = inject(WeatherService);
}
