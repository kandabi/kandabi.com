import { ReactNode, useEffect, useRef } from 'react';
import { IParallax, Parallax as ReactSpringParallax } from '@react-spring/parallax';
import styled from 'styled-components';
import { Device, useDeviceDetector } from 'hooks/useDeviceDetector';
import { useScrollEvent } from 'hooks/useScrollEvent';
import { useAppStore } from 'store';
import { ScrollToSection } from 'utils/scrollToSectionUtils';

const ParallaxContainerStyled = styled(ReactSpringParallax)`
    z-index: 1;
`;

const parallaxConfig: Record<Device, { throttleMilliseconds: number }> = {
    [Device.DESKTOP]: { throttleMilliseconds: 100 },
    [Device.MOBILE]: { throttleMilliseconds: 200 },
};

const scrollToSectionConfig: Record<ScrollToSection, { percentage: number }> = {
    [ScrollToSection.HERO]: { percentage: 0 },
    [ScrollToSection.PROJECTS]: { percentage: 0.35 },
    [ScrollToSection.ABOUT_ME]: { percentage: 0.6 },
    [ScrollToSection.CONTACT]: { percentage: 0.9 },
};

type Props = {
    pages: number;
    children?: ReactNode;
};

export const ParallaxContainer = ({ children, pages }: Props) => {
    const { device } = useDeviceDetector();
    const parallaxRef = useRef<IParallax>(null);
    // const containerRef = parallaxRef?.current?.container;

    const { scrollToSection, setScrollToSection, setCurrentScrollPercentage } = useAppStore(state => ({
        scrollToSection: state.scrollToSection,
        setScrollToSection: state.setScrollToSection,
        setCurrentScrollPercentage: state.setCurrentScrollPercentage,
    }));

    const { throttleMilliseconds } = parallaxConfig[device];
    useScrollEvent(setCurrentScrollPercentage, throttleMilliseconds);

    useEffect(() => {
        const parallax = parallaxRef.current;
        if (parallax && scrollToSection) {
            const { percentage } = scrollToSectionConfig[scrollToSection];

            parallax.scrollTo(percentage * pages);
            setScrollToSection(undefined);
        }
    }, [parallaxRef, scrollToSection, setScrollToSection, pages]);

    return (
        <ParallaxContainerStyled className='parallax-container' pages={pages}>
            {children}
        </ParallaxContainerStyled>
    );
};
