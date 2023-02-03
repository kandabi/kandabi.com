import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const ViewportStyled = styled.div`
   perspective: 2px;
   position: fixed;
   overflow-x: hidden;
   overflow-y: auto;
   bottom: 0;
   right: 0;
   left: 0;
   top: 0;
`;

interface IParallaxViewport {
   children?: any;
}

const ParallaxViewport: FC<IParallaxViewport> = ({ children }) => {
   return <ViewportStyled>{children}</ViewportStyled>;
};

export { ParallaxViewport };
