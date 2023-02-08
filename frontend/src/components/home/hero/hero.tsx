import styled from 'styled-components';

import { ParallaxScroll } from 'components/common/parallax';
import { Header } from 'components/common/header';
import { HeaderVariant } from 'components/common/header';
import { Section } from 'components/common/section';
import { CoolText } from 'components/common/cool-text';
import { Button } from 'components/common/button';
import { useIsMobile } from 'hooks/useIsMobile';
import { useStore } from 'store';

const HeroStyled = styled.div`
   background: radial-gradient(110% 80% at 120% 30%, #4867b1 0%, #060b13 115%);
   position: relative;
   display: flex;
   height: 120vh;
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
   font-size: 42px;
   margin-top: 20vh;
   ${({ theme: { breakpoints } }) => breakpoints.md} {
      margin-top: initial;
      font-size: 55px;
   }
`;

const SubtitleStyled = styled.p`
   font-size: 20px;
   ${({ theme: { breakpoints } }) => breakpoints.md} {
      font-size: 32px;
   }
`;

const TechStyled = styled(CoolText)`
   ${({ theme: { breakpoints } }) => breakpoints.md} {
      margin-top: 20px;
      font-size: 20px;
   }
   line-height: 1.5rem;
   margin-top: 10px;
   font-size: 14px;
`;

interface IHeroParallax {
   distanceToCamera: number;
   scale: number;
   gap: string;
}

const parallaxConfig: { desktop: IHeroParallax; mobile: IHeroParallax } = {
   desktop: { distanceToCamera: 4, scale: 1.7, gap: '20px' },
   mobile: { distanceToCamera: 3, scale: 1.5, gap: '8px' },
};

const Hero = () => {
   const { isMobile } = useIsMobile();
   const { distanceToCamera, scale, gap } = isMobile ? parallaxConfig.mobile : parallaxConfig.desktop;

   const { setScrollToPagePosition } = useStore((state) => ({
      setScrollToPagePosition: state.setScrollToPagePosition,
   }));

   const handleMyWorkClick = () => setScrollToPagePosition(0.35);

   return (
      <ParallaxScroll distanceToCamera={distanceToCamera} scale={scale} height='120vh'>
         <Header headerVariant={HeaderVariant.FIXED} />
         <HeroStyled>
            <Section gap={gap}>
               <TitleStyled>
                  <YellowStyled>A</YellowStyled>viv <YellowStyled>K</YellowStyled>andabi
               </TitleStyled>
               <SubtitleStyled>Freelance Software Developer</SubtitleStyled>
               <TechStyled text='Javascript | Typescript | React | C# | Node.js | Three.js' />
               <Button onClick={handleMyWorkClick} text='My Work' styles={{ margin: '15px 0 0 0' }} />
            </Section>
         </HeroStyled>
      </ParallaxScroll>
   );
};

export { Hero };
