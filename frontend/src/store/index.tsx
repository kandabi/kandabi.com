import { create } from 'zustand';

interface StoreState {
   currentScrollPosition: number;
   setCurrentScrollPosition: (position: number) => void;
   scrollToPagePosition: number;
   setScrollToPagePosition: (position: number) => void;
}

const useStore = create<StoreState>((set: any) => ({
   currentScrollPosition: 0,
   setCurrentScrollPosition: (position: number) =>
      set(() => {
         return { currentScrollPosition: position } as StoreState;
      }),

   scrollToPagePosition: -1,
   setScrollToPagePosition: (position: number) =>
      set(() => {
         return { scrollToPagePosition: position } as StoreState;
      }),
}));

export { useStore };
