import styled from 'styled-components';

import { ParallaxScroll } from 'components/common/parallax';

const ContactStyled = styled.div`
   background: linear-gradient(180deg, #0a1120 5.95%, #0f243d 98.68%);
   justify-content: center;
   align-items: center;
   position: relative;
   display: flex;
   height: 100vh;
   width: 100%;
`;

const TitleStyled = styled.h1`
   color: ${({ theme: { color } }) => color.white_1};
   font-size: 5rem;
`;

const Contact = () => {
   return (
      <ParallaxScroll distanceToCamera={4} height='100vh' scale={1.7}>
         <ContactStyled>
            <TitleStyled>Hello!!!!!!!!!!</TitleStyled>
         </ContactStyled>
      </ParallaxScroll>
   );
};

export { Contact };
