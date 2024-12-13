export interface FindFriendData {
  findFriendId: number;
  playgroundName: string;
  recruitmentStatus: string;
  title: string;
  description: string;
  scheduleTime: string;
  owner: Owner;
  participants: Participants[];
}

export interface Owner {
  nickname: string;
  role: string;
  address: string;
  profileImg: string;
}

export interface Participants {
  nickname: string;
  profileImg: string;
}

export interface FindFriendRequestBody {
  title: string;
  playgroundName: string;
  startTime: string;
  duration: number;
  description: string;
}
