import { memo, useMemo } from 'react';

import styled from '@emotion/styled';
import clsx from 'clsx';

interface IProps {
  className?: string;
  children: React.ReactNode;
  size?: 'small' | 'medium';
}

const Container = memo<IProps>(({ className, size, ...rest }) => {
  const isSmall = useMemo(() => size === 'small', [size]);
  return <div className={clsx('container', className, isSmall && '--small')} {...rest} />;
});

export default styled(Container)`
  width: 100%;
  max-width: ${({ theme }) => theme.container.MEDIUM}px;
  margin: 0 auto;
  padding: 0 24px;

  &.--small {
    max-width: ${({ theme }) => theme.container.SMALL}px;
  }
`;
