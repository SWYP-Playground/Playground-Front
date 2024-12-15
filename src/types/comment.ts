export interface CommentData {
  commentId: number;
  matchId: number;
  content: string;
  writtenBy: string;
  sentAt: string;
  writerId: string;
}

export interface CommentRequestBody {
  matchId: number;
  content: string;
  writtenBy: string;
}
