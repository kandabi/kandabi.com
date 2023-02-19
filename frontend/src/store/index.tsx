import { create } from 'zustand';

interface StoreState {
   currentScrollPosition: number;
   setCurrentScrollPosition: (position: number) => void;
   goToScrollPosition: number;
   setGoToScrollPosition: (position: number) => void;
}

const useStore = create<StoreState>((set: any) => ({
   currentScrollPosition: 0,
   setCurrentScrollPosition: (position: number) =>
      set(() => {
         return { currentScrollPosition: position } as StoreState;
      }),

   goToScrollPosition: -1,
   setGoToScrollPosition: (position: number) =>
      set(() => {
         return { goToScrollPosition: position } as StoreState;
      }),
}));

export { useStore };
