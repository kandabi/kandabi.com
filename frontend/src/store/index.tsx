import { create } from 'zustand';

interface StoreState {
   currentScrollPosition: number;
   setCurrentScrollPosition: (position: number) => void;
   goToScrollPosition: number;
   setGoToScrollPosition: (position: number) => void;
}

export const useStore = create<StoreState>((set) => ({
   currentScrollPosition: 0,
   setCurrentScrollPosition: (position: number) => set(() => ({ currentScrollPosition: position })),

   goToScrollPosition: -1,
   setGoToScrollPosition: (position: number) => set(() => ({ goToScrollPosition: position })),
}));
