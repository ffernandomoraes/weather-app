import { API_KEY } from 'settings';

import api from './api';

class weatherService {
  public async getCurrentWeather(lat: number, lon: number) {
    const request = await api.get('/weather', {
      lat,
      lon,
      lang: 'pt_br',
      units: 'metric',
      appid: API_KEY
    });

    return request?.data;
  }
}

const WeatherService = new weatherService();
export default WeatherService;
