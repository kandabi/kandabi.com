import { create } from 'zustand';

interface AppState {
    currentScrollPercentage: number;
    setCurrentScrollPercentage: (percentage: number) => void;
    goToScrollPercentage: number;
    setGoToScrollPercentage: (percentage: number) => void;
}

export const useAppStore = create<AppState>(set => ({
    currentScrollPercentage: 0,
    setCurrentScrollPercentage: percentage => set(() => ({ currentScrollPercentage: percentage })),

    goToScrollPercentage: NaN,
    setGoToScrollPercentage: percentage => set(() => ({ goToScrollPercentage: percentage })),
}));
