import { memo, useCallback, useState } from 'react';

import styled from '@emotion/styled';
import clsx from 'clsx';
import { IWeather } from 'interfaces/weather';
import StorageService from 'services/storage';

import WeatherProvider from './context';
import GetStarted from './GetStarted';
import Reports from './Reports';

interface IProps {
  className?: string;
}

export type IStep = 'get-started' | 'report';

const Weather = memo<IProps>(({ className }) => {
  const [step, setStep] = useState<IStep>('get-started');
  const [weather, setWeather] = useState<IWeather>(null);

  const setCurrentWeather = useCallback((value: IWeather) => {
    setWeather(value);
    StorageService.setValue('weather', value);
  }, []);

  const nextStep = useCallback(() => {
    if (step === 'report') {
      return;
    }

    setStep('report');
  }, [step]);

  return (
    <WeatherProvider value={{ weather, setCurrentWeather, nextStep }}>
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
`;
