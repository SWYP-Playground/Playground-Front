import { END_POINTS } from '@/constants/api';
import { axiosInstance } from '@/api/axiosInstance';

export interface DeleteCommentParams {
  commentId: number;
}

export const deleteComment = ({ commentId }: DeleteCommentParams) => {
  return axiosInstance.delete(END_POINTS.COMMENT(commentId));
};
