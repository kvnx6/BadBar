import { Component, computed, effect, inject, input, OnInit, signal } from '@angular/core';
import { WeatherResponse } from '../../models/weather-forecast';
import { WeatherService } from '../../services/weather.service';
import { MarineResponse } from '../../models/marine-forecast';
import { LatLng } from 'leaflet';
import { DecimalPipe, KeyValuePipe } from '@angular/common';
import { BadbarRating } from '../../models/badbar-rating';

@Component({
  imports: [KeyValuePipe, DecimalPipe],
  selector: 'app-weather-data-table',
  styleUrl: './weather-data-table.css',
  templateUrl: './weather-data-table.html',
})
export class WeatherDataTable implements OnInit {
  coordinates = input.required<LatLng>();

  service = inject(WeatherService);

  weatherData = signal<WeatherResponse | null>(null);
  marineData = signal<MarineResponse | null>(null);
  badbarRating = computed<BadbarRating | null>(() => {
    const weather = this.weatherData();
    if (!weather) return null;
    return this.calculateBadbarRating(weather, this.marineData());
  });
  locationName = signal('Wetter am ausgewählten Standort');
  locationCounty = signal('Wetter an der ausgewählte Stadt');
  errorMessage = signal('');

  readonly ratingColors: Record<BadbarRating, string> = {
    [BadbarRating.GREEN]: 'var(--color-GREEN)',
    [BadbarRating.YELLOW]: 'var(--color-YELLOW)',
    [BadbarRating.RED]: 'var(--color-RED)',
  };

  ngOnInit() {
    this.loadWeatherData(this.coordinates().lat, this.coordinates().lng);
  }

  constructor() {
    effect(() => {
      const coords = this.coordinates();
      this.loadWeatherData(coords.lat, coords.lng);
    });
  }

  loadWeatherData(latitude: number, longitude: number) {
    try {
      this.service.getWeather(latitude, longitude).subscribe((wData) => {
        this.weatherData.set(wData);
      });
      this.service.getMarine(latitude, longitude).subscribe((mData) => {
        this.marineData.set(mData);
      });
      this.service.getLocationInfo(latitude, longitude).subscribe((info) => {
        this.locationName.set(info.address.country);
        this.locationCounty.set(info.address.county);
      });
    } catch {
      this.errorMessage.set('Die Wetterdaten konnten nicht geladen werden.');
    }
  }

  calculateBadbarRating(weatherData: WeatherResponse, marineData: MarineResponse | null): BadbarRating {
    const air = weatherData.current?.temperature_2m;
    const wind = weatherData.current?.wind_speed_10m ?? 0;
    const rain = weatherData.current?.precipitation ?? 0;

    const water = marineData?.current?.sea_surface_temperature ?? null;
    const waves = marineData?.current?.wave_height ?? 0;

    if (air == null) {
      return BadbarRating.RED;
    }

    if (air < 18 || rain > 0 || waves > 2) {
      return BadbarRating.RED;
    }

    const waterOk = water === null || water > 20;

    if (air > 24 && waterOk && wind < 30) {
      return BadbarRating.GREEN;
    }

    return BadbarRating.YELLOW;
  }
}
