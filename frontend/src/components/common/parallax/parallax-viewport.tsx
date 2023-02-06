import { useCallback, useEffect, useRef } from 'react';
import { DebouncedFunc, throttle } from 'lodash';
import styled from 'styled-components';
import { useStore } from 'store';

interface IViewportStyled {
   distanceToCamera?: number;
}

const ViewportStyled = styled.div<IViewportStyled>`
   perspective: ${({ distanceToCamera = 2 }) => `${distanceToCamera}px`};
   scroll-behavior: smooth;
   position: absolute;
   overflow-x: hidden;
   overflow-y: auto;
   bottom: 0;
   right: 0;
   left: 0;
   top: 0;
`;

interface IParallaxViewport {
   onMouseScroll: (scrollPercentage: number) => void;
   distanceToCamera?: number;
   children?: any;
}

const ParallaxViewport = ({ distanceToCamera, onMouseScroll, children }: IParallaxViewport) => {
   const viewportRef = useRef<HTMLDivElement>(null);
   const scrollToPercent = useStore((state) => state.scrollToPercent);
   const viewport = viewportRef.current;

   const handleOnScroll = useCallback(() => {
      if (viewport) {
         const clientHeight = viewport.scrollHeight - viewport.clientHeight;
         onMouseScroll(viewport.scrollTop / clientHeight);
      }
   }, [viewport, onMouseScroll]);

   useEffect(() => {
      if (viewport && scrollToPercent > -1) {
         const clientHeight = viewport.scrollHeight - viewport.clientHeight;
         viewport?.scrollTo(0, clientHeight * scrollToPercent);
      }
   }, [viewport, scrollToPercent]);

   useEffect(() => {
      const throttledScroll = throttle(handleOnScroll, 120);
      viewport?.addEventListener('scroll', throttledScroll);
      return () => viewport?.removeEventListener('scroll', throttledScroll);
   }, [viewport, handleOnScroll]);

   return (
      <ViewportStyled ref={viewportRef} distanceToCamera={distanceToCamera}>
         {children}
      </ViewportStyled>
   );
};

export { ParallaxViewport };
