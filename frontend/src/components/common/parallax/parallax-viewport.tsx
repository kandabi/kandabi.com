import { useCallback, useEffect, useRef } from 'react';
import { throttle } from 'lodash';
import styled from 'styled-components';
import { useStore } from 'store';
import { useIsMobile } from 'hooks/useIsMobile';

interface IViewportStyled {
   distanceToCamera?: number;
}

const ViewportStyled = styled.div<IViewportStyled>`
   perspective: ${({ distanceToCamera = 2 }) => `${distanceToCamera}px`};
   scroll-behavior: smooth;
   overflow-x: hidden;
   overflow-y: auto;
   position: fixed;
   height: 100%;
   width: 100%;
   z-index: 1;
`;

interface IParallaxViewport {
   distanceToCamera?: number;
   children?: any;
}

const ParallaxViewport = ({ distanceToCamera, children }: IParallaxViewport) => {
   const viewportRef = useRef<HTMLDivElement>(null);
   const { isDesktop } = useIsMobile();
   const { goToScrollPosition, setGoToScrollPosition, setCurrentScrollPosition } = useStore((state) => ({
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
      [setCurrentScrollPosition]
   );

   useEffect(() => {
      const viewport = viewportRef.current;
      const throttledScroll = throttle(handleMouseScroll, isDesktop ? 100 : 200);
      viewport?.addEventListener('scroll', throttledScroll);
      return () => viewport?.removeEventListener('scroll', throttledScroll);
   }, [viewportRef, handleMouseScroll]);

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

export { ParallaxViewport };
