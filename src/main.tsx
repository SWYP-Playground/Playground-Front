import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Global } from '@emotion/react';

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
      <Global styles={globalStyles} />
      <AppRouter />
    </StrictMode>,
  );
};

main();
