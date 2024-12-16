import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface AuthState {
  email: string | null;
  nickname: string | null;
  token: string | null;
  refreshToken: string | null;
  setAuth: (authData: Partial<AuthState>) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      email: null,
      nickname: null,
      token: null,
      refreshToken: null,
      setAuth: (authData) => set((state) => ({ ...state, ...authData })),
      clearAuth: () =>
        set({
          email: null,
          nickname: null,
          token: null,
          refreshToken: null,
        }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
