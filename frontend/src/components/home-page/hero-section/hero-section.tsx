import { RefObject } from 'react';
import styled from 'styled-components';

import { useStore } from 'store';
import { styles } from 'styles';
import { ParallaxScroll } from 'components/common/parallax';
import { Header } from 'components/common/header';
import { HeaderVariants } from 'components/common/header';
import { Section } from 'components/common/section';
import { CoolText } from 'components/common/cool-text';
import { Button } from 'components/common/button';
import { useDeviceDetector } from 'hooks/useDeviceDetector';
import { Image } from 'components/common/image';

import arrowDown from 'assets/svgs/arrow-down.svg';
import { ParallaxLayer } from '@react-spring/parallax';

const HeroStyled = styled.div`
   position: relative;
   display: flex;
   /* height: 120vh; */
   height: 100%;
   width: 100%;
`;

const YellowStyled = styled.i`
   color: ${styles.color.yellow_100};
   font-style: normal;
`;

const TitleStyled = styled.h1`
   text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.75);
   color: ${styles.color.white_100};
   line-height: 1.16em;
   font-size: 42px;
   margin-top: 20vh;
   ${styles.breakpoints.md} {
      margin-top: initial;
      font-size: 55px;
   }
`;

const SubtitleStyled = styled.p`
   font-size: 20px;
   ${styles.breakpoints.md} {
      font-size: 32px;
   }
`;

const TechStyled = styled(CoolText)`
   ${styles.breakpoints.md} {
      margin-top: 20px;
      font-size: 20px;
   }
   line-height: 1.5rem;
   margin-top: 10px;
   font-size: 14px;
`;

interface ICenterContaineStyled {
   $_isVisible: boolean;
}

const CenterContaineStyled = styled.div<ICenterContaineStyled>`
   opacity: ${({ $_isVisible }) => ($_isVisible ? 1 : 0)};
   transition: opacity 0.2s ease-out;
   ${styles.flex.center}
   width: 100%;
`;

const ScrollDownContainerStyled = styled.div`
   transition: transform 0.2s ease-out;
   flex-direction: column;
   position: absolute;
   padding: 6px 10px;
   cursor: pointer;
   bottom: 160px;
   gap: 6px;
   ${styles.flex.center}

   ${styles.breakpoints.lg} {
      bottom: 200px;
   }

   &:hover {
      transform: scale(1.06) translateY(-6px);
   }

   &:active {
      transform: scale(0.8) translateY(4px);
   }
`;

const ScrollDownTextStyled = styled.span`
   font-size: 20px;
`;

const GlViewStyled = styled.div`
   position: absolute;
   height: 100%;
   width: 100%;
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

interface IHeroSection {
   glViewport: RefObject<HTMLDivElement>;
}

const HeroSection = ({ glViewport }: IHeroSection) => {
   const { isMobile } = useDeviceDetector();
   const { distanceToCamera, scale, gap } = isMobile ? parallaxConfig.mobile : parallaxConfig.desktop;
   const currentScrollPosition = useStore(({ currentScrollPosition }) => currentScrollPosition);

   const setGoToScrollPosition = useStore((state) => state.setGoToScrollPosition);
   const handleScrollDown = () => setGoToScrollPosition(0.35);

   return (
      // <ParallaxScroll distanceToCamera={distanceToCamera} scale={scale} height='120vh'>

      <ParallaxLayer factor={1.0} offset={0} speed={0.4}>
         <Header variant={HeaderVariants.FIXED} />
         <HeroStyled>
            <Section gap={gap}>
               <TitleStyled>
                  <YellowStyled>A</YellowStyled>viv <YellowStyled>K</YellowStyled>andabi
               </TitleStyled>
               <SubtitleStyled>Freelance Software Developer</SubtitleStyled>
               <TechStyled text='Javascript | Typescript | React | C# | Node.js | Three.js' />
               <Button onClick={handleScrollDown} text='My Work' styles={{ margin: '15px 0 0 0' }} />
               {!isMobile && (
                  <CenterContaineStyled $_isVisible={currentScrollPosition < 0.2}>
                     <ScrollDownContainerStyled onClick={handleScrollDown}>
                        <ScrollDownTextStyled>Scroll Down</ScrollDownTextStyled>
                        <Image src={arrowDown.src} width={20} height={20} alt='down arrow' />
                     </ScrollDownContainerStyled>
                  </CenterContaineStyled>
               )}
            </Section>
            <GlViewStyled ref={glViewport} />
         </HeroStyled>
      </ParallaxLayer>
      // </ParallaxScroll>
   );
};

export { HeroSection };
