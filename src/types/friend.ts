import { ROOM_STATUS } from '@/constants/status';
import { Owner, ParentRoleType } from '@/types/parent';

export interface FindFriendData {
  findFriendId: number;
  playgroundName: string;
  recruitmentStatus: StatusType;
  title: string;
  description: string;
  scheduleTime: string;
  owner: Owner;
  participants: Participants[];
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

export interface FindFriendRoomData {
  data: FindFriendRoomType[];
}

export interface FindFriendRoomType {
  findFriendId: number;
  playgroundName: string;
  title: string;
  description: string;
  scheduleTime: string;
  recruitmentStatus: StatusType;
  currentCount: number;
}

export interface RecentFriendData {
  data: RecentFriendType[];
}

export interface RecentFriendType {
  nickname: string;
  roleType: ParentRoleType;
  address: string;
  introduce: string;
  profileImg?: string;
}

export type StatusType = keyof typeof ROOM_STATUS;
