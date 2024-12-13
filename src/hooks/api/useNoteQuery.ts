import { AxiosError } from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';

import { NoteData } from '@/types/note';
import { getNote } from '@/api/note/getNote';

export const useNoteQuery = (noteId: number) => {
  const { data: NoteData } = useSuspenseQuery<NoteData, AxiosError>({
    queryKey: ['note', noteId],
    queryFn: () => getNote(noteId),
  });

  return { NoteData };
};
