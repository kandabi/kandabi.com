import styled from "styled-components";

import { ParallaxScroll } from "components/parallax";

const HeroStyled = styled.div`
   background: linear-gradient(180deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%);
   justify-content: center;
   align-items: center;
   display: flex;
   height: 100%;
   width: 100%;
`;

const TitleStyled = styled.h1`
   color: black;
   font-size: 5rem;
`;

const Hero = () => {
   return (
      <ParallaxScroll distanceToCamera={1.5} height="115vh" scale={1.75}>
         <HeroStyled>
            <TitleStyled>Hello!!!!!!!!!!</TitleStyled>
         </HeroStyled>
      </ParallaxScroll>
   );
};

export { Hero };
