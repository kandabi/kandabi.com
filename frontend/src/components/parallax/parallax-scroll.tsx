import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

interface IParallaxScrollStyled {
   $distanceToCamera?: number;
   $height?: string;
   $scale?: number;
}

const ParallaxScrollStyled = styled.div<IParallaxScrollStyled>`
   transform: ${({ $distanceToCamera = 2, $scale = 2 }) => `translateZ(-${$distanceToCamera}px) scale(${$scale})`};
   justify-content: center;
   align-items: center;
   position: relative;
   display: block;
   height: ${({ $height = "100vh" }) => $height};
   width: 100vw;
   z-index: -1;
`;

interface IParallaxScroll {
   distanceToCamera?: number;
   children?: any;
   height?: string;
   scale?: number;
}

const ParallaxScroll: FC<IParallaxScroll> = ({ distanceToCamera, height, scale, children }) => {
   return (
      <ParallaxScrollStyled $distanceToCamera={distanceToCamera} $height={height} $scale={scale}>
         {children}
      </ParallaxScrollStyled>
   );
};

export { ParallaxScroll };
