import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { NoteData, NoteRequestBody } from '@/types/note';

export interface PostNoteParams {
  noteData: NoteRequestBody;
}

export const postNote = async ({ noteData }: PostNoteParams) => {
  const { data } = await axiosInstance.post<NoteData>(END_POINTS.CREATE_NOTE, noteData);

  return data;
};
