import { AxiosError } from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getAllComment } from '@/api/comment/getAllComment';
import { CommentData } from '@/types/comment';

export const useAllCommentQuery = () => {
  const { data: AllCommentData } = useSuspenseQuery<CommentData[], AxiosError>({
    queryKey: ['comment'],
    queryFn: () => getAllComment(),
  });

  return { AllCommentData };
};
