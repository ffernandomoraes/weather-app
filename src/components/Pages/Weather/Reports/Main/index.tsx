import { memo } from 'react';

import styled from '@emotion/styled';
import clsx from 'clsx';
import Icons from 'components/Shared/Icons';
import { getCurrentIcon } from 'helpers/functions';
import { FiMapPin } from 'react-icons/fi';

import { useWeatherContext } from '../../context';

interface IProps {
  className?: string;
}

const Main = memo<IProps>(({ className }) => {
  const { weather } = useWeatherContext();

  const temperature = Math.ceil(weather.main.temp);

  return (
    <div className={clsx('weather-reports-main', className)}>
      <div className='weather-reports-main-city'>
        <FiMapPin /> <span>{weather.name}</span>
      </div>

      <div className='weather-reports-main-weather'>
        <div className='weather-reports-main-weather-icon'>
          <Icons name={getCurrentIcon(weather.weather[0].id)} />
        </div>

        <div className='weather-reports-main-weather-temperature'>
          {temperature} <span>°</span>
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
    z-index: 2;

    & span {
      margin-left: 10px;
      font-weight: 300;
      font-size: 14px;
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
        width: 200px;
        height: 200px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #5b6eff;
        z-index: 0;
        border-radius: 100%;
        filter: blur(120px);
      }

      & svg {
        width: 250px;
        height: 250px;
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

    & .weather-reports-main-weather-description {
      text-transform: uppercase;
      font-size: 15px;
      margin-top: 8px;
    }
  }
`;
