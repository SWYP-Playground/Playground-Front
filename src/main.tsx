import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Global } from '@emotion/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from '@emotion/react';
import '@radix-ui/themes/styles.css';

import { queryClient } from '@hooks/api/queryClient';

import { globalStyles } from '@styles/GlobalStyle';

import { worker } from '@mocks/browser';

import AppRouter from '@router/AppRouter';

const theme = {
  colors: {
    black0: '#FFFFFF',
    black50: '#F8F9FA',
    black100: '#F1F5F9',
    black200: '#E5ECF2',
    black300: '#DBE3EB',
    black400: '#CED4DA',
    black500: '#ADB5BD',
    black600: '#99A3AD',
    black700: '#878F9A',
    black800: '#495057',
    black900: '#212529',
    primary1: '#FFE135',
    primary2: '#907E19',
    primary3: '#FFF9E1',
    secondary: '#478EEE',
    red: '#EE1717',
  },
};

const main = async () => {
  if (import.meta.env.MODE === 'development') {
    await worker.start({
      serviceWorker: {
        url: '/mockServiceWorker.js',
      },
      onUnhandledRequest: 'bypass',
    });
  }

  const root = createRoot(document.querySelector('#root') as Element);

  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Theme>
            <Global styles={globalStyles} />
            <AppRouter />
            <ReactQueryDevtools />
          </Theme>
        </ThemeProvider>
      </QueryClientProvider>
    </StrictMode>,
  );
};

main();
