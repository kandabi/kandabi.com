import { create } from 'zustand';

interface StoreState {
   mouseScroll: number;
   setMouseScroll: (percent: number) => void;
   scrollToPercent: number;
   setScrollToPercent: (percent: number) => void;
}

const useStore = create<StoreState>((set: any) => ({
   mouseScroll: 0,
   setMouseScroll: (percent: number) =>
      set(() => {
         return { mouseScroll: percent };
      }),

   scrollToPercent: -1,
   setScrollToPercent: (percent: number) =>
      set(() => {
         return { scrollToPercent: percent };
      }),
}));

export { useStore };
