import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';

// 타입이 안적혀있어서 일단 정의를 안해놨습니다. (나중에 추가 예정)
export const getNickname = async (email: string) => {
  const { data } = await axiosInstance.get(END_POINTS.NICKNAME(email));

  return data;
};
