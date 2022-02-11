import { memo, useCallback, useState } from 'react';

import styled from '@emotion/styled';
import clsx from 'clsx';
import Button from 'components/Button';
import Container from 'components/Container';
import FadeIn from 'components/FadeIn';
import Icons from 'components/Icons';
import { useAlert } from 'react-alert';
import GeolocationService from 'services/geolocation';

import { useWeatherContext } from '../context';

interface IProps {
  className?: string;
}

const GetStarted = memo<IProps>(({ className }) => {
  const toast = useAlert();
  const { nextStep, handleGetWeather } = useWeatherContext();

  const [loading, setLoading] = useState(false);

  const handleClickGetLocation = useCallback(async () => {
    setLoading(true);

    try {
      const position = await GeolocationService.getPosition();

      handleGetWeather(position, () => {
        nextStep();
      });
    } catch (error) {
      toast.error(error);
      setLoading(false);
    }
  }, [handleGetWeather, nextStep, toast]);

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
                {loading ? 'Buscando dados...' : 'Começar'}
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
      filter: blur(100px);
      backdrop-filter: blur(-100px);
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
