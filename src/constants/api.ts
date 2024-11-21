export const PROD = import.meta.env.MODE === 'production';

export const BASE_URL = PROD
  ? `${window.location.protocol}//${import.meta.env.VITE_PROD_BASE_URL}`
  : 'http://localhost:5173';

export const AXIOS_BASE_URL = PROD
  ? `${window.location.protocol}//${import.meta.env.env.VITE_AXIOS_PROD_BASE_URL}`
  : '/';

export const NETWORK = {
  RETRY_COUNT: 2,
  TIMEOUT: 10000,
} as const;
