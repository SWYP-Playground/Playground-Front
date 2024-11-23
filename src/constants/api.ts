export const PROD = import.meta.env.MODE === 'production';

export const BASE_URL = PROD
  ? `${window.location.protocol}//${import.meta.env.VITE_PROD_BASE_URL}`
  : 'http://localhost:5173';

export const AXIOS_BASE_URL = PROD
  ? `${window.location.protocol}//${import.meta.env.env.VITE_AXIOS_PROD_BASE_URL}`
  : '/';

// 백엔드 api 연결시 간단하게 연결하기 위한 END_POINTS 상수 설정
export const END_POINTS = {
  // 예시
  // LOGOUT: '/logout',
  // LOGIN: (provider: string) => `/login/${provider}`,
};

export const NETWORK = {
  RETRY_COUNT: 2,
  TIMEOUT: 10000,
} as const;

export const HTTP_STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONTENT_TOO_LARGE: 413,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const HTTP_ERROR_MESSAGE = {
  [HTTP_STATUS_CODE.NOT_FOUND]: {
    HEADING: '페이지가 없는 것 같습니다.',
    BODY: '요청하신 페이지를 찾을 수 없습니다.',
    BUTTON: '홈으로 가기',
  },
  [HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR]: {
    HEADING: '현재 페이지를 표시할 수 없습니다.',
    BODY: `잠시 후 다시 시도해주세요.`,
    BUTTON: '새로고침',
  },
  [HTTP_STATUS_CODE.BAD_REQUEST]: {
    HEADING: '잘못된 요청입니다.',
    BODY: '확인 후 다시 시도해주세요.',
    BUTTON: '홈으로 가기',
  },
} as const;

export const ERROR_MESSAGE = '오류가 발생했습니다. 잠시 후 다시 시도해주세요.';

export const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';
