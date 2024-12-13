import { AxiosError } from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';

import { CommentData } from '@/types/comment';
import { getComment } from '@/api/comment/getComment';

export const useCommentQuery = (commentId: number) => {
  const { data: CommentData } = useSuspenseQuery<CommentData, AxiosError>({
    queryKey: ['comment', commentId],
    queryFn: () => getComment(commentId),
  });

  return { CommentData };
};
