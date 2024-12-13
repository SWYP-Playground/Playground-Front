export interface ParentData {
  id: number;
  name: string;
  email: string;
  nickname: string;
  address: string;
  introduce: string;
  birthDate: string;
  phoneNumber: string;
  role: 'FATHER' | 'MOTHER';
  childCount: number;
  mannerTemp: number;
  children: ChildrenData[];
}

export interface ChildrenData {
  id: number;
  gender: 'MALE' | 'FEMALE';
  birthDate: string;
  age: number;
}
