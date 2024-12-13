import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { CommentData, CommentRequestBody } from '@/types/comment';

export interface PatchCommentParams {
  commentId: number;
  data: CommentRequestBody;
}

export const patchComment = async ({ commentId, data }: PatchCommentParams) => {
  return await axiosInstance.patch<CommentData>(END_POINTS.COMMENT(commentId), data);
};
