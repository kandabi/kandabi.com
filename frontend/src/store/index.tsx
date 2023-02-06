import { create } from 'zustand';

interface StoreState {
   scrollToPercent: number;
   setScrollToPercent: (percent: number) => void;
}

const useStore = create<StoreState>((set: any) => ({
   scrollToPercent: -1,
   setScrollToPercent: (percent: number) =>
      set(() => {
         return { scrollToPercent: percent };
      }),
}));

export { useStore };
