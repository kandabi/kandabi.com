import { useRef } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import { Header, HeaderVariant } from 'components/common/header';
import { HeroSection } from 'components/home-page/hero-section';
import { CenterSection } from 'components/home-page/center-section';
import { IProjectsContainer } from 'components/home-page/center-section/projects-section/projects-container';
import { ContactSection } from 'components/home-page/contact-section';
import { ParallaxViewport } from 'components/common/parallax';
import { Footer } from 'components/common/footer';
import { Ball } from 'components/common/ball';

const Canvas = dynamic(() => import('@react-three/fiber').then((module) => module.Canvas), { ssr: false });

const HomePageStyled = styled.div`
   position: absolute;
   height: 100%;
   width: 100%;
`;

const HomePage = ({ projects }: IProjectsContainer) => {
   const glLaptopViewport = useRef<HTMLDivElement>(null);

   console.log('render', Canvas.displayName);

   return (
      <HomePageStyled>
         <Header headerVariant={HeaderVariant.STICKY} />
         <ParallaxViewport distanceToCamera={6}>
            <HeroSection glViewport={glLaptopViewport} />
            <CenterSection projects={projects} />
            <ContactSection />
            <Footer />
         </ParallaxViewport>
         <Canvas>
            <Ball glViewport={glLaptopViewport} />
         </Canvas>
      </HomePageStyled>
   );
};

export { HomePage };
