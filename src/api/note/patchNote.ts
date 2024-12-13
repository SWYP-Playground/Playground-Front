import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { NoteRequestBody } from '@/types/note';

export interface PatchNoteParams {
  noteId: number;
  data: NoteRequestBody;
}

export const patchNote = async ({ noteId, data }: PatchNoteParams) => {
  return await axiosInstance.patch(END_POINTS.NOTE(noteId), data);
};
