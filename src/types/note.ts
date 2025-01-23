export interface NoteData {
  noteId: number;
  targetNickname: string;
  content: string;
  writtenBy: string;
  writerId: number;
  sentAt: string;
  read: boolean;
}

export interface NoteRequestBody {
  targetNickname: string;
  content: string;
  writtenBy: string;
}
