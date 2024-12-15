import { mannerTempType } from '@/constants/temperature';

export interface LoginData {
  email: string;
  nickname: string;
  token: string;
  refreshToken: string;
}

export interface LoginRequestBody {
  email: string;
  password: string;
}

export interface TemperatureBody {
  nickname: string;
  mannerTemp: mannerTempType;
}
