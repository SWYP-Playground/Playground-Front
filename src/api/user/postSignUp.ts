import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';

export type SignUpRequest = FormData;

export type SignUpResponse = {
  id: number;
  name: string;
  email: string;
};

export const postSignUp = async (formData: SignUpRequest): Promise<SignUpResponse> => {
  const response = await axiosInstance.post<SignUpResponse>(END_POINTS.SIGNUP, formData, {
    useAuth: false,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};
