import { memo } from 'react';

import styled from '@emotion/styled';
import clsx from 'clsx';
import { AlertComponentPropsWithStyle } from 'react-alert';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

interface IAlertTemplateProps extends AlertComponentPropsWithStyle {
  className?: string;
}

const AlertTemplate = memo<IAlertTemplateProps>(({ className, message, options, style }) => {
  return (
    <div className={clsx(className, options.type === 'success' && '--success')} style={{ ...style }}>
      {options.type === 'success' && <AiOutlineCheck />}
      {options.type === 'error' && <AiOutlineClose />}
      <span>{message}</span>
    </div>
  );
});

export default styled(AlertTemplate)`
  background: ${({ theme }) => theme.colors.error};
  padding: 12px 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  color: white;

  &.--success {
    background: ${({ theme }) => theme.colors.success};
  }

  & svg {
    margin-right: 8px;
  }

  & span {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 13px;
  }
`;
