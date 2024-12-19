import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { ACCESS_TOKEN_KEY } from '@/constants/api';
interface AuthState {
  token: string | null;
  refreshToken: string | null;
  setAuth: (auth: { token: string; refreshToken: string }) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      refreshToken: null,
      setAuth: ({ token, refreshToken }: { token: string; refreshToken: string }) =>
        set({ token, refreshToken }),
      clearAuth: () => set({ token: null, refreshToken: null }),
    }),
    {
      name: ACCESS_TOKEN_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ token: state.token, refreshToken: state.refreshToken }),
    },
  ),
);
