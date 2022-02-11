export type IWeatherCoord = { lon: number; lat: number };

export type IWeatherTemperature = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};

export type IWeatherTime = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type IWeatherWind = {
  speed: number;
  deg: number;
  gust: number;
};

export interface IWeather {
  coord: IWeatherCoord;
  weather: IWeatherTime[];
  base: string;
  main: IWeatherTemperature;
  visibility: number;
  wind: IWeatherWind;
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
