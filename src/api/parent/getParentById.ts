import { axiosInstance } from '@/api/axiosInstance';
import { ParentData } from '@/types/parent';
import axios from 'axios';
import { END_POINTS } from '@/constants/api';
import { ACCESS_TOKEN_KEY } from '@/constants/api';

const getAuthTokens = () => {
  const authStorage = localStorage.getItem('ACCESS_TOKEN_KEY');
  if (!authStorage) throw new Error('auth-storage가 없습니다.');

  const { state } = JSON.parse(authStorage);
  if (!state?.token || !state?.refreshToken) {
    throw new Error('token 또는 refreshToken이 없습니다.');
  }

  return {
    token: state.token,
    refreshToken: state.refreshToken,
  };
};

// Refresh Token으로 Access Token 갱신
const refreshAccessToken = async (): Promise<void> => {
  const { refreshToken } = getAuthTokens();

  const newToken = refreshToken;

  const authStorage = JSON.parse(localStorage.getItem(ACCESS_TOKEN_KEY)!);
  authStorage.state.token = newToken;

  localStorage.setItem(ACCESS_TOKEN_KEY, JSON.stringify(authStorage));
};

export const getParentById = async (parentId: number) => {
  try {
    const { data } = await axiosInstance.get<ParentData>(END_POINTS.PARENT(parentId));
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      console.warn('토큰 만료되어 갱신 시도중');
      await refreshAccessToken();

      return axiosInstance.get<ParentData>(END_POINTS.PARENT(parentId)).then((res) => res.data);
    }

    if (axios.isAxiosError(error) && error.response?.status === 403) {
      console.error('403 에러: 접근 권한이 없습니다.');
    }

    throw error;
  }
};
