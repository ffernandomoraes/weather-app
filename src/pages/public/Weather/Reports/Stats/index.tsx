import { memo, useMemo } from 'react';

import styled from '@emotion/styled';
import clsx from 'clsx';
import { BsWind } from 'react-icons/bs';
import { TiWeatherShower, TiWeatherPartlySunny, TiWeatherCloudy } from 'react-icons/ti';

import { useWeatherContext } from '../../context';

interface IProps {
  className?: string;
}

const Stats = memo<IProps>(({ className }) => {
  const { weather } = useWeatherContext();

  const feelsLike = useMemo(() => Math.ceil(weather.main.feels_like), [weather.main.feels_like]);

  return (
    <div className={clsx('reports-stats', className)}>
      <div className='reports-stats-item'>
        <div className='reports-stats-item-icon'>
          <TiWeatherPartlySunny />
        </div>

        <div className='reports-stats-item-value'>
          {feelsLike} <span>graus</span>
        </div>

        <div className='reports-stats-item-title'>Sensação térmica</div>
      </div>

      <div className='reports-stats-item'>
        <div className='reports-stats-item-icon'>
          <TiWeatherCloudy />
        </div>

        <div className='reports-stats-item-value'>
          {weather.clouds.all} <span>%</span>
        </div>

        <div className='reports-stats-item-title'>Nuvens</div>
      </div>

      <div className='reports-stats-item'>
        <div className='reports-stats-item-icon'>
          <BsWind />
        </div>

        <div className='reports-stats-item-value'>
          {weather.wind.speed} <span>metro/s</span>
        </div>

        <div className='reports-stats-item-title'>Velocidade do vento</div>
      </div>

      <div className='reports-stats-item'>
        <div className='reports-stats-item-icon'>
          <TiWeatherShower />
        </div>

        <div className='reports-stats-item-value'>
          {weather.main.humidity} <span>%</span>
        </div>

        <div className='reports-stats-item-title'>Umidade</div>
      </div>
    </div>
  );
});

export default styled(Stats)`
  display: flex;
  margin-top: 12px;
  flex-wrap: wrap;

  & .reports-stats-item {
    width: calc(25% - 24px);
    margin: 12px;
    border-radius: 4px;
    text-align: center;

    ${({ theme }) => theme.breakpoints.mobile} {
      width: calc(50% - 24px);
    }

    & .reports-stats-item-icon {
      text-align: center;
      font-size: 48px;
      margin-bottom: 4px;
      color: white;
    }

    & .reports-stats-item-value {
      font-size: 36px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.title};

      & span {
        font-size: 14px;
        font-weight: 400;
      }
    }

    & .reports-stats-item-title {
      font-size: 14px;
      font-weight: 300;
      text-transform: uppercase;
      margin-top: 4px;
      color: ${({ theme }) => theme.colors.description};
    }
  }
`;
