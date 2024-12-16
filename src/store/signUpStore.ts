import { create } from 'zustand';

interface SignUpState {
  name: string;
  email: string;
  password: string;
  setSignUpData: (data: Partial<SignUpState>) => void;
  saveToLocalStorage: (data: any) => void;
  loadFromLocalStorage: () => void;
  clearLocalStorage: () => void;
}

export const useSignUpStore = create<SignUpState>((set) => ({
  name: '',
  email: '',
  password: '',

  setSignUpData: (data) => set((state) => ({ ...state, ...data })),

  // localStorage 저장
  saveToLocalStorage: (data) => {
    localStorage.setItem('user', JSON.stringify(data));
  },

  // localStorage 불러오기
  loadFromLocalStorage: () => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedData = JSON.parse(userData);
      set(parsedData); // Zustand 상태 업데이트
    }
  },

  // localStorage 데이터 삭제
  clearLocalStorage: () => {
    localStorage.removeItem('user');
    console.log('User data removed from localStorage');
    set({ name: '', email: '', password: '' });
  },
}));
