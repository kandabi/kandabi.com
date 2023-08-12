import styled from 'styled-components';

interface IParallaxScrollStyled {
   $_distanceToCamera?: number;
   $_height?: string;
   $_scale?: number;
}

const ParallaxScrollStyled = styled.div<IParallaxScrollStyled>`
   /* transform: ${({ $_distanceToCamera = 1, $_scale = 2 }) =>
      `translateZ(-${$_distanceToCamera}px) scale(${$_scale})`}; */
   height: ${({ $_height = '100%' }) => $_height};
   transform-style: preserve-3d;
   justify-content: center;
   align-items: center;
   position: relative;
   display: block;
   width: 100vw;
   z-index: -1;
`;

interface Props {
   distanceToCamera?: number;
   children?: any;
   height?: string;
   scale?: number;
}

export const ParallaxScroll = ({ distanceToCamera, height, scale, children }: Props) => {
   return (
      <ParallaxScrollStyled $_distanceToCamera={distanceToCamera} $_height={height} $_scale={scale}>
         {children}
      </ParallaxScrollStyled>
   );
};
