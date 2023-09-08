import { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Device, useDeviceDetector } from 'hooks/useDeviceDetector';
import { throttle } from 'lodash';
import { useStore } from 'store';

interface ViewportStyledProps {
    distanceToCamera?: number;
}

const ViewportStyled = styled.div<ViewportStyledProps>`
    perspective: ${({ distanceToCamera = 2 }) => `${distanceToCamera}px`};
    transform-style: preserve-3d;
    scroll-behavior: smooth;
    overflow-x: hidden;
    overflow-y: auto;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 5;
`;

interface ConfigType {
    throttleMs: number;
}

const parallaxViewportConfig: Record<Device, ConfigType> = {
    [Device.DESKTOP]: { throttleMs: 100 },
    [Device.MOBILE]: { throttleMs: 200 },
};

interface Props {
    distanceToCamera?: number;
    children?: any;
}

export const ParallaxViewport = ({ distanceToCamera, children }: Props) => {
    const viewportRef = useRef<HTMLDivElement>(null);
    const { device } = useDeviceDetector();

    const { throttleMs } = parallaxViewportConfig[device];

    const { goToScrollPosition, setGoToScrollPosition, setCurrentScrollPosition } = useStore(state => ({
        goToScrollPosition: state.goToScrollPosition,
        setGoToScrollPosition: state.setGoToScrollPosition,
        setCurrentScrollPosition: state.setCurrentScrollPosition,
    }));

    const handleMouseScroll = useCallback(
        (event: any) => {
            const viewport = event.target;
            if (viewport) {
                const clientHeight = viewport.scrollHeight - viewport.clientHeight;
                setCurrentScrollPosition(viewport.scrollTop / clientHeight);
            }
        },
        [setCurrentScrollPosition],
    );

    useEffect(() => {
        const viewport = viewportRef.current;
        const throttledScroll = throttle(handleMouseScroll, throttleMs);
        viewport?.addEventListener('scroll', throttledScroll);
        return () => viewport?.removeEventListener('scroll', throttledScroll);
    }, [viewportRef, handleMouseScroll, throttleMs]);

    useEffect(() => {
        let viewport = viewportRef.current;
        if (viewport && goToScrollPosition > -1) {
            const clientHeight = viewport.scrollHeight - viewport.clientHeight;
            viewport?.scrollTo(0, clientHeight * goToScrollPosition);
            setGoToScrollPosition(-1);
        }
    }, [viewportRef, goToScrollPosition, setGoToScrollPosition]);

    return (
        <ViewportStyled ref={viewportRef} distanceToCamera={distanceToCamera}>
            {children}
        </ViewportStyled>
    );
};
