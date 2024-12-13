import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { ParentData } from '@/types/parent';

// 회원가입 부분은 formData를 사용하시길래 이부분은 백엔드 분과 상의가 필요할 것 같습니다.
// 아래 코드는 임시로 적은 것이기 때문에 수정하셔서 사용하시면 될 것 같습니다.
export const postSignUp = async () => {
  const { data } = await axiosInstance.post<ParentData>(END_POINTS.SIGNUP);

  return data;
};
