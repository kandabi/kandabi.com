import { create } from 'zustand';
import { ScrollToSection } from 'utils/scrollToSectionUtils';

type AppState = {
    currentScrollPercentage: number;
    setCurrentScrollPercentage: (percentage: number) => void;

    scrollToSection?: ScrollToSection;
    setScrollToSection: (section: ScrollToSection | undefined) => void;
};

export const useAppStore = create<AppState>(set => ({
    currentScrollPercentage: 0,
    setCurrentScrollPercentage: currentScrollPercentage => set(() => ({ currentScrollPercentage })),

    scrollToSection: undefined,
    setScrollToSection: scrollToSection => set(() => ({ scrollToSection })),
}));
