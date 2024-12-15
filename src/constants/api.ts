export const PROD = import.meta.env.MODE === 'production';

export const BASE_URL = PROD
  ? `${window.location.protocol}//${import.meta.env.VITE_PROD_BASE_URL}`
  : 'http://localhost:5173';

export const AXIOS_BASE_URL = import.meta.env.VITE_AXIOS_PROD_BASE_URL;

export const END_POINTS = {
  SIGNUP: '/auth/signup',
  LOGOUT: '/auth/logout',
  LOGIN: '/auth/login',
  COMMENT_ALL: '/comment/all',
  CREATE_COMMENT: '/comment',
  MAIN_FIND_FRIEND_LIST: '/find-friend-list',
  MY_FIND_FRIEND_LIST: '/find-friend/my',
  RECENT_FIND_FRIEND_LIST: '/find-friend/recent',
  CREATE_TEMPERATURE: '/manner-temp',
  PARENT_ALL: '/auth/users/all',
  NOTE_ALL: '/note/all',
  REPORT_ALL: '/report/all',
  CREATE_NOTE: '/note',
  CREATE_REPORT: '/report',
  NICKNAME: (email: string) => `/auth/get-nickname?email=${email}`,
  REPORT: (reportId: number) => `/report?id=${reportId}`,
  UPDATE_PARENT: (parentId: number) => `/auth/users/edit/${parentId}`, // PARENT 엔드 포인트로 PATCH메소드 사용하면 될 것 같은데 굳이 나눈 이유를 모르겠음
  DELETE_PARENT: (parentId: number) => `/auth/users/delete/${parentId}`, // PARENT 엔드 포인트로 DELETE메소드 사용하면 될 것 같은데 굳이 나눈 이유를 모르겠음
  PARENT: (parentId: number) => `/auth/users/${parentId}`,
  NOTE: (noteId: number) => `/note?id=${noteId}`,
  COMMENT_MATCH: (matchId: number) => `/comment/match?id=${matchId}`,
  COMMENT: (commentId: number) => `/comment?id=${commentId}`,
  RESET_PASSWORD: (email: string) => `/auth/reset-password?email=${email}`,
  FIND_FRIEND: (playgroundId: string, findFriendId: number) =>
    `/find-friend/${playgroundId}/${findFriendId}`,
  PARTICIPATE_FIND_FRIEND: (playgroundId: string, findFriendId: number, action: string) =>
    `/find-friend/${playgroundId}/${findFriendId}?action=${action}`,
  FIND_FRIEND_INFO: (findFriendId: number) => `/find-friend/${findFriendId}`,
  REGISTER_FIND_FRIEND: (playgroundId: string) => `/find-friend/${playgroundId}`,
  FIND_FRIEND_LIST: (playgroundId: string) => `/find-friend-list/${playgroundId}`,
  PLAYGROUNDS: (playgroundId: string) => `/playgrounds?pfctNm=${playgroundId}`,
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

export const ACCESS_TOKEN_KEY = 'auth-storage';
