import styled from 'styled-components';

import { ParallaxScroll } from 'components/common/parallax';
import { Header } from 'components/common/header';
import { HeaderVariant } from 'components/common/header';
import { colors } from 'styles/colors';

const HeroStyled = styled.div`
   background: radial-gradient(110% 80% at 120% 30%, #4867b1 0%, #060b13 115%);
   justify-content: center;
   align-items: center;
   display: flex;
   position: relative;
   height: 100%;
   width: 100%;
`;

const TitleStyled = styled.h1`
   color: ${colors.black_1};
   font-size: 5rem;
`;

interface IHero {
   scrollPercentage: number;
}

const Hero = ({ scrollPercentage }: IHero) => {
   return (
      <ParallaxScroll distanceToCamera={6} height='115vh' scale={2}>
         <Header headerVariant={HeaderVariant.DEFAULT} scrollPercentage={scrollPercentage} />
         <HeroStyled>
            <TitleStyled>Hello!!!!!!!!!!</TitleStyled>
         </HeroStyled>
      </ParallaxScroll>
   );
};

export { Hero };
