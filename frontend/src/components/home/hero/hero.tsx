import styled from 'styled-components';

import { ParallaxScroll } from 'components/common/parallax';
import { Header } from 'components/common/header';
import { HeaderVariant } from 'components/common/header';
import { Section } from 'components/common/section';
import { CoolText } from 'components/common/cool-text';
import { Button } from 'components/common/button';

const HeroStyled = styled.div`
   background: radial-gradient(110% 80% at 120% 30%, #4867b1 0%, #060b13 115%);
   justify-content: center;
   align-items: center;
   position: relative;
   display: flex;
   height: 115vh;
   width: 100%;
`;

const YellowStyled = styled.i`
   color: ${({ theme: { color } }) => color.yellow_1};
   font-style: normal;
`;

const TitleStyled = styled.h1`
   text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.75);
   color: ${({ theme: { color } }) => color.white_1};
   line-height: 1.16em;
   font-size: 55px;
`;

const SubtitleStyled = styled.p`
   font-size: 32px;
`;

const Hero = () => {
   return (
      <ParallaxScroll distanceToCamera={6} height='115vh' scale={2}>
         <Header headerVariant={HeaderVariant.FIXED} />
         <HeroStyled>
            <Section gap='20px'>
               <TitleStyled>
                  <YellowStyled>A</YellowStyled>viv <YellowStyled>K</YellowStyled>andabi
               </TitleStyled>
               <SubtitleStyled>Freelance Software Developer</SubtitleStyled>
               <CoolText
                  text='Javascript | Typescript | React | C# | Node.js | Three.js'
                  styles={{ margin: '20px 0 0 0' }}
               />
               <Button text='My Work' styles={{ margin: '15px 0 0 0' }} />
            </Section>
         </HeroStyled>
      </ParallaxScroll>
   );
};

export { Hero };
