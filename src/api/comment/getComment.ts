import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { CommentData } from '@/types/comment';

export const getComment = async (commentId: number) => {
  const { data } = await axiosInstance.get<CommentData>(END_POINTS.COMMENT(commentId));

  return data;
};
