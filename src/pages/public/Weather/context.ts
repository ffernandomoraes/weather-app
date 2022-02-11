import { createContext, useContext } from 'react';

import { IWeather } from 'interfaces/weather';

interface IWeatherContext {
  weather: IWeather;
  position: GeolocationPosition;

  handleGetWeather: (
    location: GeolocationPosition,
    successCallback?: () => void,
    errorCallback?: () => void
  ) => Promise<void>;

  nextStep: () => void;
}

const WeatherContext = createContext<IWeatherContext>({} as IWeatherContext);
const WeatherProvider = WeatherContext.Provider;

export function useWeatherContext() {
  return useContext(WeatherContext);
}

export default WeatherProvider;
