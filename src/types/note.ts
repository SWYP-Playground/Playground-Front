export interface NoteData {
  noteId: number;
  targetNickname: string;
  content: string;
  writtenBy: string;
  sentAt: string;
}

export interface NoteRequestBody {
  noteId: number;
  targetNickname: string;
  content: string;
  writtenBy: string;
}
