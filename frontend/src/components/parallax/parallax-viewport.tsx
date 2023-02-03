import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

interface IViewportStyled {
   $distanceToCamera?: number;
}

const ViewportStyled = styled.div<IViewportStyled>`
   perspective: ${({ $distanceToCamera = 2 }) => `${$distanceToCamera}px`};
   overflow-x: hidden;
   overflow-y: auto;
   position: fixed;
   bottom: 0;
   right: 0;
   left: 0;
   top: 0;
`;

interface IParallaxViewport {
   distanceToCamera?: number;
   children?: any;
}

const ParallaxViewport: FC<IParallaxViewport> = ({ distanceToCamera, children }) => {
   return <ViewportStyled $distanceToCamera={distanceToCamera}>{children}</ViewportStyled>;
};

export { ParallaxViewport };
