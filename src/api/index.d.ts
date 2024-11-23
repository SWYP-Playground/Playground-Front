import 'axios';

// Axios 타입 확장 - 프론트엔드 전용 설정
declare module 'axios' {
  export interface AxiosRequestConfig {
    useAuth?: boolean; // 커스텀 설정 추가 (인증 필요 여부)
  }
}
