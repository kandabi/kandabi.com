import styled from "styled-components";

import { ParallaxScroll } from "components/parallax";

const ContactStyled = styled.div`
   background: linear-gradient(
      13deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(29, 116, 253, 1) 50%,
      rgba(252, 176, 69, 1) 100%
   );
   justify-content: center;
   align-items: center;
   display: flex;
   height: 110vh;
   width: 100%;
`;

const TitleStyled = styled.h1`
   color: black;
   font-size: 5rem;
`;

const Contact = () => {
   return (
      <ParallaxScroll distanceToCamera={1} scale={1.5} height="110vh">
         <ContactStyled>
            <TitleStyled>Hello!!!!!!!!!!</TitleStyled>
         </ContactStyled>
      </ParallaxScroll>
   );
};

export { Contact };
