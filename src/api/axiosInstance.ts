import axios from 'axios';

// import { checkAndSetToken, handleAPIError, handleTokenError } from '@api/interceptors';

import { AXIOS_BASE_URL, NETWORK } from '@/constants/api';

export const axiosInstance = axios.create({
  baseURL: AXIOS_BASE_URL, // 백엔드 서버 기본 URL
  timeout: NETWORK.TIMEOUT, // 요청 제한 시간
  withCredentials: true, // 쿠키/인증 정보 포함 설정
  useAuth: true, // 요청별로 인증이 필요한지 구분하기 위한 커스텀 인증 설정
});

// axiosInstance.interceptors.request.use(checkAndSetToken, handleAPIError);

// axiosInstance.interceptors.response.use((response) => response, handleTokenError);

// axiosInstance.interceptors.response.use((response) => response, handleAPIError);
