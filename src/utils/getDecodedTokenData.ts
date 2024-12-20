import { jwtDecode } from 'jwt-decode';

import { ACCESS_TOKEN_KEY } from '@/constants/api';

interface DecodedToken {
  sub: string;
  nickname: string;
  parentId: string;
  exp: number;
  iat: number;
}

const getDecodedTokenData = () => {
  try {
    const authStorage = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (!authStorage) {
      throw new Error('Auth storage not found');
    }

    const { state } = JSON.parse(authStorage);
    const token = state?.token;

    if (!token) {
      throw new Error('Token not found in auth storage');
    }

    const decodedToken = jwtDecode<DecodedToken>(token);
    const { sub, nickname, parentId } = decodedToken;
    return { sub, nickname, parentId };
  } catch (error) {
    console.error('Failed to decode token:', error);
    throw new Error('Failed to decode token');
  }
};

export default getDecodedTokenData;
