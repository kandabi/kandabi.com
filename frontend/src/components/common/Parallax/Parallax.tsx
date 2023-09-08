import { useEffect, useRef } from 'react';
import { IParallax, Parallax as ReactSpringParallax } from '@react-spring/parallax';
import styled from 'styled-components';
import { Device, useDeviceDetector } from 'hooks/useDeviceDetector';
import useScrollEvent from 'hooks/useScrollEvent';
import { useAppStore } from 'store';

const ParallaxStyled = styled(ReactSpringParallax)`
    z-index: 1;
`;

const parallaxConfig: Record<Device, { throttleMilliseconds: number }> = {
    [Device.DESKTOP]: { throttleMilliseconds: 100 },
    [Device.MOBILE]: { throttleMilliseconds: 200 },
};

interface Props {
    pages: number;
    children?: any;
}

export const Parallax = ({ children, pages }: Props) => {
    const { device } = useDeviceDetector();
    const parallaxRef = useRef<IParallax>(null);
    const containerRef = parallaxRef?.current?.container;

    const { goToScrollPercentage, setGoToScrollPercentage, setCurrentScrollPercentage } = useAppStore(state => ({
        goToScrollPercentage: state.goToScrollPercentage,
        setGoToScrollPercentage: state.setGoToScrollPercentage,
        setCurrentScrollPercentage: state.setCurrentScrollPercentage,
    }));

    const { throttleMilliseconds } = parallaxConfig[device];
    useScrollEvent(containerRef, setCurrentScrollPercentage, throttleMilliseconds);

    useEffect(() => {
        const parallax = parallaxRef.current;
        if (parallax && goToScrollPercentage > -1) {
            parallax.scrollTo(goToScrollPercentage * pages);
            setGoToScrollPercentage(NaN);
        }
    }, [parallaxRef, goToScrollPercentage, setGoToScrollPercentage, pages]);

    return (
        <ParallaxStyled ref={parallaxRef} pages={pages}>
            {children}
        </ParallaxStyled>
    );
};
