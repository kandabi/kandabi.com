import styled from 'styled-components';

import { ParallaxScroll } from 'components/common/parallax';
import { Header } from 'components/common/header';
import { HeaderVariant } from 'components/common/header';

const HeroStyled = styled.div`
   background: radial-gradient(110% 80% at 120% 30%, #4867b1 0%, #060b13 115%);
   justify-content: center;
   align-items: center;
   position: relative;
   display: flex;
   height: 100%;
   width: 100%;
`;

const TitleStyled = styled.h1`
   text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.75);
   color: ${({ theme: { color } }) => color.white_1};
   line-height: 116%;
   font-size: 55px;
`;

interface IHero {}

const Hero = ({}: IHero) => {
   return (
      <ParallaxScroll distanceToCamera={6} height='115vh' scale={2}>
         <Header headerVariant={HeaderVariant.FIXED} />
         <HeroStyled>
            <TitleStyled>Aviv Kandabi</TitleStyled>
         </HeroStyled>
      </ParallaxScroll>
   );
};

export { Hero };
