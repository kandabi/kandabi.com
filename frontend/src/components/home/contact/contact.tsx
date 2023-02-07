import styled from 'styled-components';

import { ParallaxScroll } from 'components/common/parallax';

const ContactStyled = styled.div`
   background: linear-gradient(13deg, rgba(131, 58, 180, 1) 0%, rgba(29, 116, 253, 1) 50%, rgba(252, 176, 69, 1) 100%);
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
      // <ParallaxScroll distanceToCamera={3} height='100%' scale={1.5}>
      <ParallaxScroll distanceToCamera={4} height='100vh' scale={1.7}>
         <ContactStyled>
            <TitleStyled>Hello!!!!!!!!!!</TitleStyled>
         </ContactStyled>
      </ParallaxScroll>
   );
};

export { Contact };
