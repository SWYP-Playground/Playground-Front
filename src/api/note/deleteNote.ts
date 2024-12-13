import { END_POINTS } from '@/constants/api';
import { axiosInstance } from '@/api/axiosInstance';

export interface DeleteNoteParams {
  noteId: number;
}

export const deleteNote = ({ noteId }: DeleteNoteParams) => {
  return axiosInstance.delete(END_POINTS.NOTE(noteId));
};
