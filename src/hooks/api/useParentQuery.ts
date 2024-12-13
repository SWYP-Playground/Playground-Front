import { AxiosError } from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';

import { ParentData } from '@/types/parent';
import { getParentById } from '@/api/parent/getParentById';

export const useParentQuery = (parentId: number) => {
  const { data: ParentData } = useSuspenseQuery<ParentData, AxiosError>({
    queryKey: ['parent', parentId],
    queryFn: () => getParentById(parentId),
  });

  return { ParentData };
};
