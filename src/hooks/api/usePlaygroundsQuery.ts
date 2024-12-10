import { getPlaygrounds } from '@/api/playground/getPlaygrounds';
import { PlaygroundData } from '@/types/playground';
import { useSuspenseQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const usePlaygroundsQuery = (playgroundId: string) => {
  const { data: playgroundsData } = useSuspenseQuery<PlaygroundData[], AxiosError>({
    queryKey: ['playgrounds', playgroundId],
    queryFn: () => getPlaygrounds(playgroundId),
    gcTime: 24 * 60 * 60 * 60 * 1000,
    staleTime: Infinity,
  });

  return { playgroundsData };
};
