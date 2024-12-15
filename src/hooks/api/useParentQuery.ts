import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { ParentData } from '@/types/parent';
import { getParentById } from '@/api/parent/getParentById';

export const useParentQuery = (parentId: number) => {
  const { data: ParentData } = useQuery<ParentData, AxiosError>({
    queryKey: ['parent', parentId],
    queryFn: () => getParentById(parentId),
    enabled: !!parentId,
  });

  return { ParentData };
};
