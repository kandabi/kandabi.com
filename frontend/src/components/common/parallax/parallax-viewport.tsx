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
   overflow-x: hidden;
   min-height: 600px;
   overflow-y: auto;
   position: fixed;
   height: 100%;
   width: 100%;
   ${({ theme: { breakpoints } }) => breakpoints.md} {
      min-height: 1080px;
   }
`;

interface IParallaxViewport {
   distanceToCamera?: number;
   children?: any;
}

const ParallaxViewport = ({ distanceToCamera, children }: IParallaxViewport) => {
   const viewportRef = useRef<HTMLDivElement>(null);
   const { scrollToPagePosition, setScrollToPagePosition, setCurrentScrollPosition } = useStore((state) => ({
      scrollToPagePosition: state.scrollToPagePosition,
      setScrollToPagePosition: state.setScrollToPagePosition,
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
      [setCurrentScrollPosition]
   );

   useEffect(() => {
      const viewport = viewportRef.current;
      const throttledScroll = throttle(handleMouseScroll, 120);
      viewport?.addEventListener('scroll', throttledScroll);
      return () => viewport?.removeEventListener('scroll', throttledScroll);
   }, [viewportRef, handleMouseScroll]);

   useEffect(() => {
      let viewport = viewportRef.current;
      if (viewport && scrollToPagePosition > -1) {
         const clientHeight = viewport.scrollHeight - viewport.clientHeight;
         viewport?.scrollTo(0, clientHeight * scrollToPagePosition);
         setScrollToPagePosition(-1);
      }
   }, [viewportRef, scrollToPagePosition, setScrollToPagePosition]);

   return (
      <ViewportStyled ref={viewportRef} distanceToCamera={distanceToCamera}>
         {children}
      </ViewportStyled>
   );
};

export { ParallaxViewport };
