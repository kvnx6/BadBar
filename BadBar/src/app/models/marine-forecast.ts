export type MarineRequest = {
  latitude: number;
  longitude: number;
  current: string;
  timezone: string;
  forecast_days: number;
}

export type MarineResponse = {
  latitude: number;
  longitude: number;
  current: {
    time: string;
    sea_surface_temperature: number | null;
    wave_height: number | null;
    wave_period: number | null;
    ocean_current_velocity: number | null;
  };
  current_units: {
    sea_surface_temperature: string;
    wave_height: string;
    wave_period: string;
    ocean_current_velocity: string;
  };
}
