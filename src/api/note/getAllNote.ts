import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { NoteData } from '@/types/note';

export const getAllNote = async () => {
  const { data } = await axiosInstance.get<NoteData[]>(END_POINTS.NOTE_ALL);

  return data;
};
