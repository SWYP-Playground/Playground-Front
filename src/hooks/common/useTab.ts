import { create } from 'zustand';

import { DIRECT_MESSAGE } from '@/constants/message';
import { DirectMessageType } from '@/types/message';

interface TabState {
  tab: DirectMessageType;
  setTab: (tab: DirectMessageType) => void;
}

export const useTab = create<TabState>((set) => ({
  tab: DIRECT_MESSAGE.RECRUITMENT,
  setTab: (tab) => {
    set({
      tab,
    });
  },
}));
