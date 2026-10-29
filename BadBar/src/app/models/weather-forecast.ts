export type WeatherRequest = {
  latitude: number;
  longitude: number;
  current: string;
  hourly: string;
  forecast_days: number;
  timezone: string;
}

export type WeatherResponse = {
  latitude: number;
  longitude: number;
  current: {
    time: string;
    temperature_2m: number;
    wind_speed_10m: number;
    precipitation: number;
    cloud_cover: number;
    weather_code: number;
    is_day: number;
  };
  current_units: {
    temperature_2m: string;
    wind_speed_10m: string;
    precipitation: string;
    cloud_cover: string;
  };
}
