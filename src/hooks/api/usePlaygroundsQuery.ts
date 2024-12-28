import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { getPlaygrounds } from '@/api/playground/getPlaygrounds';
import { PlaygroundData, PlaygroundType } from '@/types/playground';

export const usePlaygroundsQuery = (playgroundId: string) => {
  const { data, isLoading } = useQuery<PlaygroundType, AxiosError, PlaygroundData[]>({
    queryKey: ['playgrounds', playgroundId],
    queryFn: () => getPlaygrounds(playgroundId),
    select: (data) => data.playgrounds,
    gcTime: 7 * 24 * 60 * 60 * 1000,
    staleTime: Infinity,
  });

  return { playgroundsData: data ?? [], isLoading };
};
