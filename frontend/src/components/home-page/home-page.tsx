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
import { Shapes } from 'components/common/shapes';

const Canvas = dynamic(() => import('@react-three/fiber').then((module) => module.Canvas), { ssr: false });

const HomePageStyled = styled.div`
   position: absolute;
   height: 100%;
   width: 100%;
`;

const HomePage = ({ projects }: IProjectsContainer) => {
   const glHeroViewport = useRef<HTMLDivElement>(null);
   const glCenterViewport = useRef<HTMLDivElement>(null);

   return (
      <HomePageStyled>
         <Header headerVariant={HeaderVariant.STICKY} />
         <ParallaxViewport distanceToCamera={6}>
            <HeroSection glViewport={glHeroViewport} />
            <CenterSection glViewport={glCenterViewport} projects={projects} />
            <ContactSection />
            <Footer />
         </ParallaxViewport>
         <Canvas>
            <Ball glViewport={glHeroViewport} />
            <Shapes glViewport={glCenterViewport} />
         </Canvas>
      </HomePageStyled>
   );
};

export { HomePage };
