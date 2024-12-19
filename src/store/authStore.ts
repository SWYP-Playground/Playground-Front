import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { ACCESS_TOKEN_KEY } from '@/constants/api';

interface AuthState {
  token: string | null;
  setAuth: (token: string) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      setAuth: (token) => set({ token }),
      clearAuth: () => set({ token: null }),
    }),
    {
      name: ACCESS_TOKEN_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ token: state.token }),
    },
  ),
);
