import { AxiosError } from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getAllParent } from '@/api/parent/getAllParent';
import { ParentData } from '@/types/parent';

export const useAllParentQuery = () => {
  const { data: AllParentData } = useSuspenseQuery<ParentData[], AxiosError>({
    queryKey: ['parent'],
    queryFn: () => getAllParent(),
  });

  return { AllParentData };
};
