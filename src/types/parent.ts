export interface ParentData {
  id: number;
  name: string;
  email: string;
  nickname: string;
  address: string;
  introduce: string;
  birthDate: string;
  phoneNumber: string;
  role: ParentRoleType;
  childCount: number;
  mannerTemp: number;
  children: ChildrenData[];
}

export interface Owner {
  nickname: string;
  role: ParentRoleType;
  address: string;
  profileImg: string;
}

export type ParentRoleType = 'FATHER' | 'MOTHER';

export interface ChildrenData {
  id: number;
  gender: 'MALE' | 'FEMALE';
  birthDate: string;
  age: number;
}
