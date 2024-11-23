import { create } from 'zustand';

interface loggedInState {
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
}

const useLoggedInStore = create<loggedInState>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (state) => set({ isLoggedIn: state }),
}));

export default useLoggedInStore;
