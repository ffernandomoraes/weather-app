export interface IWeatherCoord {
  lon: number;
  lat: number;
}

export interface IWeatherTemperature {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface IWeatherTime {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IWeatherWind {
  speed: number;
  deg: number;
  gust: number;
}

export interface IWeatherSys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

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
  sys: IWeatherSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
