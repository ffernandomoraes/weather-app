import { memo } from 'react';

import styled from '@emotion/styled';
import clsx from 'clsx';

interface IButtonProps {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = memo<IButtonProps>(({ className, disabled, ...rest }) => {
  return <button type='button' disabled={disabled} className={clsx(className, disabled && '--disabled')} {...rest} />;
});

export default styled(Button)`
  min-width: 150px;
  text-align: center;
  border: 0;
  background: ${({ theme }) => theme.colors.button.main};
  border-radius: ${({ theme }) => theme.spacing()}px;
  padding: ${({ theme }) => theme.spacing(2)}px ${({ theme }) => theme.spacing(4)}px;
  height: 60px;
  color: white;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background: ${({ theme }) => theme.colors.button.hover};
  }

  &:disabled {
    background: #8a8a8a;
    cursor: no-drop;
  }
`;
