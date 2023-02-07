import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface IParallaxScrollStyled {
   $distanceToCamera?: number;
   $height?: string;
   $scale?: number;
}

const ParallaxScrollStyled = styled.div<IParallaxScrollStyled>`
   transform: ${({ $distanceToCamera = 1, $scale = 2 }) => `translateZ(-${$distanceToCamera}px) scale(${$scale})`};
   height: ${({ $height = '100%' }) => $height};
   justify-content: center;
   align-items: center;
   position: relative;
   display: block;
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
