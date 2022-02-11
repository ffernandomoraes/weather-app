import { memo } from 'react';

import styled from '@emotion/styled';
import clsx from 'clsx';

interface IProps {
  className?: string;
  children: React.ReactNode;
}

const FadeIn = memo<IProps>(({ className, ...rest }) => {
  return <div className={clsx('fade-in-effect', className)} {...rest} />;
});

export default styled(FadeIn)`
  animation: fadeIn 1s linear;
`;
