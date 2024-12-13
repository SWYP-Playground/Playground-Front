import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { CommentData, CommentRequestBody } from '@/types/comment';

export interface postCommentParams {
  commentData: CommentRequestBody;
}

export const postComment = async ({ commentData }: postCommentParams) => {
  const { data } = await axiosInstance.post<CommentData>(END_POINTS.CREATE_COMMENT, commentData);

  return data;
};
