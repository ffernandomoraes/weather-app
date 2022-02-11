import { memo, useCallback, useState } from 'react';

import styled from '@emotion/styled';
import clsx from 'clsx';
import { useAlert } from 'react-alert';
import { GrUpdate } from 'react-icons/gr';

import { useWeatherContext } from '../../context';

interface IProps {
  className?: string;
}

const Update = memo<IProps>(({ className }) => {
  const toast = useAlert();
  const { position, handleGetWeather } = useWeatherContext();

  const [loading, setLoading] = useState(false);

  const handleClickUpdate = useCallback(async () => {
    setLoading(true);

    try {
      handleGetWeather(position, () => {
        toast.success('Sucesso, dados atualizados.');
        setLoading(false);
      });
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  }, [handleGetWeather, position, toast]);

  return (
    <div className={clsx('reports-update', className)}>
      <button disabled={loading} onClick={handleClickUpdate}>
        <GrUpdate /> {loading ? 'Carregando...' : 'Atualizar dados'}
      </button>
    </div>
  );
});

export default styled(Update)`
  text-align: center;
  position: absolute;
  top: 16px;
  right: 16px;

  ${({ theme }) => theme.breakpoints.mobile} {
    right: 0;
    padding: 0 16px;
    width: 100%;
  }

  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.08);
    padding: 12px 16px;
    border-radius: 4px;
    border: 0;
    color: white;
    cursor: pointer;
    transition: ${({ theme }) => theme.transition};
    text-transform: uppercase;
    font-weight: 500;
    font-size: 13px;

    ${({ theme }) => theme.breakpoints.mobile} {
      width: 100%;
    }

    &:disabled {
      cursor: no-drop;
      background: rgb(185, 185, 185, 0.5);
    }

    & svg {
      margin-right: 8px;

      & path {
        stroke: white;
      }
    }
  }
`;
