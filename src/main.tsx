import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Global } from '@emotion/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

import { queryClient } from '@hooks/api/queryClient';

import { globalStyles } from '@styles/GlobalStyle.ts';

import { worker } from '@mocks/browser.ts';

import AppRouter from '@router/AppRouter.tsx';

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
        <Theme>
          <Global styles={globalStyles} />
          <AppRouter />
          <ReactQueryDevtools />
        </Theme>
      </QueryClientProvider>
    </StrictMode>,
  );
};

main();
