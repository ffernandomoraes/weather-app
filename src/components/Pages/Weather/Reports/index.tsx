import { memo } from 'react';

import styled from '@emotion/styled';
import clsx from 'clsx';
import Container from 'components/Shared/Container';
import FadeIn from 'components/Shared/FadeIn';

import { useWeatherContext } from '../context';
import Main from './Main';

interface IProps {
  className?: string;
}

const Reports = memo<IProps>(({ className }) => {
  const { weather } = useWeatherContext();

  console.log(weather);

  return (
    <div className={clsx('weather-app', className)}>
      <FadeIn>
        <Container>
          <Main />
        </Container>
      </FadeIn>
    </div>
  );
});

export default styled(Reports)`
  color: white;
`;
