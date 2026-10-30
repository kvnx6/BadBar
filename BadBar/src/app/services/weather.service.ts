import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherRequest, WeatherResponse } from '../models/weather-forecast';
import { MarineRequest, MarineResponse } from '../models/marine-forecast';
import { LocationAddress } from '../models/location';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private http = inject(HttpClient);

  private readonly weatherUrl = 'https://api.open-meteo.com/v1/forecast';
  private readonly marineUrl = 'https://marine-api.open-meteo.com/v1/marine';

  getWeather(lat: number, lon: number): Observable<WeatherResponse> {
    const request: WeatherRequest = {
      latitude: lat,
      longitude: lon,
      current: 'temperature_2m,wind_speed_10m,uv_index',
      hourly: 'precipitation_probability',
      timezone: 'auto',
      forecast_days: 1,
    };

    return this.http.get<WeatherResponse>(this.weatherUrl, { params: request });
  }

  getMarine(lat: number, lon: number): Observable<MarineResponse> {
    const request: MarineRequest = {
      latitude: lat,
      longitude: lon,
      current: 'sea_surface_temperature',
      timezone: 'auto',
      forecast_days: 1,
    };

    return this.http.get<MarineResponse>(this.marineUrl, { params: request })
  }

  getLocationInfo(lat:number, lon:number) : Observable<LocationAddress> {
    return this.http.get<LocationAddress>(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=de`,
    );
  }
}
