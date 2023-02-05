import { useCallback, useEffect, useRef } from "react";
import { DebouncedFunc, throttle } from "lodash";
import styled from "styled-components";

interface IViewportStyled {
   $distanceToCamera?: number;
}

const ViewportStyled = styled.div<IViewportStyled>`
   perspective: ${({ $distanceToCamera = 2 }) => `${$distanceToCamera}px`};
   overflow-x: hidden;
   overflow-y: auto;
   position: absolute;
   bottom: 0;
   right: 0;
   left: 0;
   top: 0;
`;

interface IParallaxViewport {
   onScroll: (scrollPercentage: number) => void;
   distanceToCamera?: number;
   children?: any;
}

const ParallaxViewport = ({ distanceToCamera, onScroll, children }: IParallaxViewport) => {
   const viewportRef = useRef<HTMLDivElement>(null);

   const handleScroll = useCallback(() => {
      let viewport = viewportRef.current;
      if (viewport) {
         const clientHeight = viewport.scrollHeight - viewport.clientHeight;
         onScroll(viewport.scrollTop / clientHeight);
      }
   }, [viewportRef, onScroll]);

   useEffect(() => {
      const viewport = viewportRef.current;
      const throttledScroll = throttle(handleScroll, 80);
      viewport?.addEventListener("scroll", throttledScroll);
      return () => viewport?.removeEventListener("scroll", throttledScroll);
   }, [viewportRef, handleScroll]);

   return (
      <ViewportStyled ref={viewportRef} $distanceToCamera={distanceToCamera}>
         {children}
      </ViewportStyled>
   );
};

export { ParallaxViewport };
