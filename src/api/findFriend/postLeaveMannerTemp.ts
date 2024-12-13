import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { TemperatureBody } from '@/types/user';

interface postLeaveMannerTempParams {
  TemperatureData: TemperatureBody;
}

// 타입이 안적혀있어서 일단 정의를 안해놨습니다. (나중에 추가 예정)
export const postLeaveMannerTemp = async ({ TemperatureData }: postLeaveMannerTempParams) => {
  const { data } = await axiosInstance.post(END_POINTS.CREATE_TEMPERATURE, TemperatureData);

  return data;
};
