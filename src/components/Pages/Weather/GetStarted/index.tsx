import { memo, useCallback, useState } from 'react';

import styled from '@emotion/styled';
import clsx from 'clsx';
import Button from 'components/Shared/Button';
import Container from 'components/Shared/Container';
import FadeIn from 'components/Shared/FadeIn';
import Icons from 'components/Shared/Icons';
import GeolocationService from 'services/geolocation';
import WeatherService from 'services/weather';

import { useWeatherContext } from '../context';

interface IProps {
  className?: string;
}

const GetStarted = memo<IProps>(({ className }) => {
  const { setCurrentWeather, nextStep } = useWeatherContext();

  const [loading, setLoading] = useState(false);

  const handleGetWeather = useCallback(
    async (location: GeolocationPosition) => {
      try {
        const { coords } = location;
        const response = await WeatherService.getCurrentWeather(coords.latitude, coords.longitude);
        setCurrentWeather(response);
        nextStep();
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
    [nextStep, setCurrentWeather]
  );

  const handleClickGetLocation = useCallback(async () => {
    setLoading(true);

    try {
      const position = await GeolocationService.getPosition();
      handleGetWeather(position);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [handleGetWeather]);

  return (
    <div className={clsx('weather-get-started', className)}>
      <Container size='small'>
        <FadeIn>
          <div className='weather-get-started-icon'>
            <Icons name='thunderstorm' />
          </div>

          <div className='weather-get-started-content'>
            <div className='weather-get-started-title'>Descubra o clima da sua localização atual.</div>

            <div className='weather-get-started-description'>
              Clique no botão abaixo para conceder acesso a sua localização.
            </div>

            <div className='weather-get-started-button'>
              <Button disabled={loading} onClick={handleClickGetLocation}>
                {loading ? 'Carregando...' : 'Começar'}
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
});

export default styled(GetStarted)`
  width: 100%;
  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & .weather-get-started-icon {
    position: relative;
    text-align: center;

    & svg {
      position: relative;
      z-index: 2;
      width: 250px;
      height: 250px;
    }

    &::after {
      content: '';
      width: 200px;
      height: 200px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #5b6eff;
      z-index: 1;
      border-radius: 100%;
      filter: blur(120px);
    }
  }

  & .weather-get-started-content {
    & .weather-get-started-title {
      font-size: 32px;
      font-weight: 700;
      letter-spacing: -1px;
      color: ${({ theme }) => theme.colors.title};
    }

    & .weather-get-started-description {
      margin: 20px auto;
      font-weight: 300;
      color: ${({ theme }) => theme.colors.description};
      font-size: 16px;
      line-height: 1.4;
    }

    & .weather-get-started-button {
      margin-top: 40px;

      button {
        width: 100%;
      }
    }
  }
`;
