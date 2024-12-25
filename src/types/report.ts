export interface ReportData {
  reportId: number;
  targetNickname: string;
  findFriendId: number;
  cause: string;
  writtenBy: string;
  sentAt: string;
}

export interface ReportRequestBody {
  targetNickname: string;
  cause: string;
  writtenBy: string;
}
