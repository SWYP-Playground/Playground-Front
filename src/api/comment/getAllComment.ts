import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { CommentData } from '@/types/comment';

export const getAllComment = async () => {
  const { data } = await axiosInstance.get<CommentData[]>(END_POINTS.COMMENT_ALL);

  return data;
};
