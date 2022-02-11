import { memo, useMemo } from 'react';

import styled from '@emotion/styled';
import clsx from 'clsx';
import Icons from 'components/Icons';
import { getCurrentIcon } from 'helpers/functions';
import { FiMapPin } from 'react-icons/fi';

import { useWeatherContext } from '../../context';

interface IProps {
  className?: string;
}

const Main = memo<IProps>(({ className }) => {
  const { weather } = useWeatherContext();

  const temperature = useMemo(() => Math.ceil(weather.main.temp), [weather.main.temp]);
  const temperatureMin = useMemo(() => Math.ceil(weather.main.temp_min), [weather.main.temp_min]);
  const temperatureMax = useMemo(() => Math.ceil(weather.main.temp_max), [weather.main.temp_max]);

  return (
    <div className={clsx('weather-reports-main', className)}>
      <div className='weather-reports-main-city'>
        <FiMapPin />{' '}
        <span>
          {weather.name}, {weather.sys.country}
        </span>
      </div>

      <div className='weather-reports-main-weather'>
        <div className='weather-reports-main-weather-icon'>
          <Icons name={getCurrentIcon(weather.weather[0].id)} />
        </div>

        <div className='weather-reports-main-weather-temperature'>
          {temperature} <span>°</span>
        </div>

        <div className='weather-reports-main-weather-max-min'>
          <div className='min'>
            min {temperatureMin}
            <span>°</span>
          </div>

          <div className='divider' />

          <div className='max'>
            max {temperatureMax}
            <span>°</span>
          </div>
        </div>

        <div className='weather-reports-main-weather-description'>{weather.weather[0].description}</div>
      </div>
    </div>
  );
});

export default styled(Main)`
  color: white;
  padding: 40px 0;

  & .weather-reports-main-city {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 5;

    & span {
      margin-left: 10px;
      font-weight: 400;
      letter-spacing: 0.5px;
      font-size: 14px;
      text-transform: uppercase;
    }
  }

  & .weather-reports-main-weather {
    text-align: center;
    margin-top: 24px;

    & .weather-reports-main-weather-icon {
      line-height: 0;
      position: relative;
      margin-bottom: 24px;
      z-index: 2;

      &::after {
        content: '';
        width: 300px;
        height: 300px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #5b6eff;
        z-index: 0;
        border-radius: 100%;
        filter: blur(100px);
        backdrop-filter: blur(-100px);
      }

      & svg {
        width: 220px;
        height: 220px;
        position: relative;
        z-index: 2;
      }
    }

    & .weather-reports-main-weather-temperature {
      font-size: 80px;
      font-weight: 700;
      position: relative;
      display: inline-flex;
      z-index: 2;
      line-height: 1;

      & span {
        position: absolute;
        top: -15px;
        right: -25px;
        font-weight: 500;
        font-size: 50px;
      }
    }

    & .weather-reports-main-weather-max-min {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      color: ${({ theme }) => theme.colors.description};

      & .min,
      & .max {
        & span {
          margin-left: 2px;
        }
      }

      & .divider {
        width: 12px;
        height: 1px;
        background: #fff;
        margin: 0 12px;
      }
    }

    & .weather-reports-main-weather-description {
      text-transform: uppercase;
      font-size: 15px;
      margin-top: 16px;
    }
  }
`;
