import { axiosInstance } from '@/api/axiosInstance';
import { ParentData } from '@/types/parent';
import axios from 'axios';

const getAuthToken = (): string => {
  const authStorage = localStorage.getItem('auth-storage');
  if (!authStorage) throw new Error('auth-storage가 없습니다.');

  const { state } = JSON.parse(authStorage);
  if (!state?.token) throw new Error('state.token이 없습니다.');

  return state.token;
};

const refreshAccessToken = async (): Promise<string> => {
  const refreshToken = localStorage.getItem('refresh-token');
  if (!refreshToken) throw new Error('리프레시 토큰이 없습니다.');

  const response = await axios.post('/auth/refresh', { refreshToken });
  const newToken = response.data.accessToken;

  localStorage.setItem('auth-storage', JSON.stringify({ state: { token: newToken } }));

  return newToken;
};

export const getParentById = async (parentId: number): Promise<ParentData> => {
  let token = getAuthToken();

  try {
    const response = await axiosInstance.get(`/auth/users/${parentId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      console.warn('토큰 만료. 갱신 시도 중...');
      token = await refreshAccessToken();
      return getParentById(parentId);
    }

    if (axios.isAxiosError(error) && error.response?.status === 403) {
      console.error('403 에러: 접근 권한이 없습니다.');
    }

    throw error;
  }
};
