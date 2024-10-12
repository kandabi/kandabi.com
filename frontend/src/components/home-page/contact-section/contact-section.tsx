import styled from 'styled-components';

import { ParallaxScroll } from 'components/common/parallax';
import { ParallaxLayer } from '@react-spring/parallax';

const ContactStyled = styled.div`
   justify-content: center;
   align-items: center;
   position: relative;
   display: flex;
   height: 100vh;
   width: 100%;
`;

const TitleStyled = styled.h1`
   color: white;
   font-size: 5rem;
`;

const ContactSection = () => {
   return (
      // <ParallaxScroll distanceToCamera={4} height='100vh' scale={1.7}>
      <ParallaxLayer offset={1.5} speed={0.4}>
         <ContactStyled>
            <TitleStyled>Hello!!!!!!!!!!</TitleStyled>
         </ContactStyled>
      </ParallaxLayer>
      // </ParallaxScroll>
   );
};

export { ContactSection };
