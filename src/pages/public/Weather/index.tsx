import { memo, useCallback, useState } from 'react';

import styled from '@emotion/styled';
import clsx from 'clsx';
import { IWeather } from 'interfaces/weather';
import { useAlert } from 'react-alert';
import StorageService from 'services/storage';
import WeatherService from 'services/weather';

import WeatherProvider from './context';
import GetStarted from './GetStarted';
import Reports from './Reports';

interface IProps {
  className?: string;
}

export type IStep = 'get-started' | 'report';

const Weather = memo<IProps>(({ className }) => {
  const toast = useAlert();

  const [step, setStep] = useState<IStep>('get-started');
  const [position, setPosition] = useState<GeolocationPosition>(null);
  const [weather, setWeather] = useState<IWeather>(null);

  const setCurrentWeather = useCallback((value: IWeather) => {
    setWeather(value);
    StorageService.setValue('weather', value);
  }, []);

  const setCurrentPosition = useCallback((value: GeolocationPosition) => {
    setPosition(value);
    StorageService.setValue('position', value);
  }, []);

  const nextStep = useCallback(() => setStep('report'), []);

  const handleGetWeather = useCallback(
    async (location: GeolocationPosition, successCallback?: () => void, errorCallback?: () => void) => {
      try {
        const { coords } = location;
        const response = await WeatherService.getCurrentWeather(coords.latitude, coords.longitude);
        setCurrentPosition(location);
        setCurrentWeather(response);
        successCallback && successCallback();
      } catch (error) {
        toast.error(error.message);
        errorCallback && errorCallback();
      }
    },
    [setCurrentPosition, setCurrentWeather, toast]
  );

  return (
    <WeatherProvider value={{ weather, position, nextStep, handleGetWeather }}>
      <div className={clsx('weather-app', className)}>
        {step === 'get-started' && <GetStarted />}
        {step === 'report' && <Reports />}
      </div>
    </WeatherProvider>
  );
});

export default styled(Weather)`
  background: #0b0c1e;
  min-height: 100vh;
  padding: 20px 0;

  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 50px 0;
  }
`;
