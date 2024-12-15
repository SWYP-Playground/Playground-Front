import { PARENT_ROLE } from '@/constants/parent';
import { ParentRoleType } from '@/types/parent';

export const convertRole = (role: ParentRoleType): string => {
  if (role === 'FATHER') return PARENT_ROLE.FATHER;
  if (role === 'MOTHER') return PARENT_ROLE.MOTHER;
  return '';
};
