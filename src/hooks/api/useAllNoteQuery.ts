import { AxiosError } from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getAllNote } from '@/api/note/getAllNote';
import { NoteData } from '@/types/note';

export const useAllNoteQuery = () => {
  const { data: AllNoteData } = useSuspenseQuery<NoteData[], AxiosError>({
    queryKey: ['note'],
    queryFn: () => getAllNote(),
  });

  return { AllNoteData };
};
