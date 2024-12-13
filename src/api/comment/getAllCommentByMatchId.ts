import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { CommentData } from '@/types/comment';

export const getAllCommentByMatchId = async (matchId: number) => {
  const { data } = await axiosInstance.get<CommentData[]>(END_POINTS.COMMENT_MATCH(matchId));

  return data;
};
