import { AxiosError } from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';

import { CommentData } from '@/types/comment';
import { getAllCommentByMatchId } from '@/api/comment/getAllCommentByMatchId';

export const useAllCommentByMatchIdQuery = (matchId: number) => {
  const { data: AllCommentByMatchId } = useSuspenseQuery<CommentData[], AxiosError>({
    queryKey: ['comment', 'match', matchId],
    queryFn: () => getAllCommentByMatchId(matchId),
  });

  return { AllCommentByMatchId };
};
