import { create } from 'zustand';

interface AuthState {
  email: string;
  nickname: string;
  token: string;
  refreshToken: string;
  setAuth: (authData: Partial<AuthState>) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  email: '',
  nickname: '',
  token: '',
  refreshToken: '',
  setAuth: (authData) => set((state) => ({ ...state, ...authData })),
  clearAuth: () => set({ email: '', nickname: '', token: '', refreshToken: '' }),
}));
