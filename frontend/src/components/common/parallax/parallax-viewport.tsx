import { useCallback, useEffect, useRef } from 'react';
import { DebouncedFunc, throttle } from 'lodash';
import styled from 'styled-components';
import { useStore } from 'store';

interface IViewportStyled {
   distanceToCamera?: number;
}

const ViewportStyled = styled.div<IViewportStyled>`
   perspective: ${({ distanceToCamera = 2 }) => `${distanceToCamera}px`};
   /* perspective-origin: bottom; */
   scroll-behavior: smooth;
   overflow-x: hidden;
   overflow-y: auto;

   /* position: fixed;
   height: 100%;
   width: 100%; */

   /* position: -webkit-sticky; */
   position: absolute;
   inset: 0px;
`;

interface IParallaxViewport {
   distanceToCamera?: number;
   children?: any;
}

const ParallaxViewport = ({ distanceToCamera, children }: IParallaxViewport) => {
   const viewportRef = useRef<HTMLDivElement>(null);
   const scrollToPercent = useStore((state) => state.scrollToPercent);
   const setMouseScroll = useStore((state) => state.setMouseScroll);

   const handleOnScroll = useCallback(
      (event: any) => {
         const viewport = event.target;
         if (viewport) {
            const clientHeight = viewport.scrollHeight - viewport.clientHeight;
            setMouseScroll(viewport.scrollTop / clientHeight);
         }
      },
      [setMouseScroll]
   );

   useEffect(() => {
      const viewport = viewportRef.current;
      const throttledScroll = throttle(handleOnScroll, 120);
      viewport?.addEventListener('scroll', throttledScroll);
      return () => viewport?.removeEventListener('scroll', throttledScroll);
   }, [viewportRef, handleOnScroll]);

   useEffect(() => {
      let viewport = viewportRef.current;
      if (viewport && scrollToPercent > -1) {
         const clientHeight = viewport.scrollHeight - viewport.clientHeight;
         viewport?.scrollTo(0, clientHeight * scrollToPercent);
      }
   }, [viewportRef, scrollToPercent]);

   return (
      <ViewportStyled ref={viewportRef} distanceToCamera={distanceToCamera}>
         {children}
      </ViewportStyled>
   );
};

export { ParallaxViewport };
