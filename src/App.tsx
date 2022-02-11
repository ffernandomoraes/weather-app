import { memo, useMemo } from 'react';

import { ThemeProvider } from '@emotion/react';
import theme from 'assets/theme';
import AlertTemplate from 'components/AlertTemplate';
import Weather from 'components/Pages/Weather';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';

const alertOptions = {
  position: positions.BOTTOM_RIGHT,
  timeout: 5000,
  offset: '24px',
  transition: transitions.FADE
};

const App = memo(() => {
  const baseStyles = useMemo(
    () => `
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        line-height: 1.2;
      }

      button {
        font-family: 'Poppins', sans-serif;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
  `,
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <style dangerouslySetInnerHTML={{ __html: baseStyles }} />
        <Weather />
      </AlertProvider>
    </ThemeProvider>
  );
});

export default App;
