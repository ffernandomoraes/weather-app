import { memo } from 'react';

import styled from '@emotion/styled';
import clsx from 'clsx';
import Container from 'components/Container';
import FadeIn from 'components/FadeIn';

import Main from './Main';
import Stats from './Stats';
import Update from './Update';

interface IProps {
  className?: string;
}

const Reports = memo<IProps>(({ className }) => {
  return (
    <div className={clsx('weather-reports', className)}>
      <Container>
        <FadeIn>
          <Main />
          <Stats />
          <Update />
        </FadeIn>
      </Container>
    </div>
  );
});

export default styled(Reports)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  width: 100%;
`;
