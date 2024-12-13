import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { NoteData } from '@/types/note';

export const getNote = async (noteId: number) => {
  const { data } = await axiosInstance.get<NoteData>(END_POINTS.NOTE(noteId));

  return data;
};
