import { AxiosError } from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getPlaygrounds } from '@/api/playground/getPlaygrounds';
import { PlaygroundType } from '@/types/playground';

export const usePlaygroundsQuery = (playgroundId: string) => {
  const { data } = useSuspenseQuery<PlaygroundType, AxiosError>({
    queryKey: ['playgrounds', playgroundId],
    queryFn: () => getPlaygrounds(playgroundId),
    gcTime: 7 * 24 * 60 * 60 * 1000,
    staleTime: Infinity,
  });

  return { playgroundsData: data.playgrounds };
};
