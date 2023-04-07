import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import useRefs from 'react-use-refs';
import styled from 'styled-components';

import { HeroScene, CenterScene } from 'components/scenes';
import { Header, HeaderVariants } from 'components/common/header';
import { HeroSection } from 'components/home-page/hero-section';
import { CenterSection } from 'components/home-page/center-section';
import { ContactSection } from 'components/home-page/contact-section';
import { ParallaxViewport } from 'components/common/parallax';
import { IProject, IProjectTag } from 'types/project';
import { Footer } from 'components/common/footer';
import { Preload } from '@react-three/drei';

const HomePageStyled = styled.div`
   position: absolute;
   height: 100%;
   width: 100%;
`;

interface IHomePage {
   projects: IProject[];
   projectTags: IProjectTag[];
}

const HomePage = ({ projects, projectTags }: IHomePage) => {
   const [containerRef, glHeroRef, glCenterRef] = useRefs<HTMLDivElement>(null);

   return (
      <HomePageStyled ref={containerRef}>
         <Header variant={HeaderVariants.STICKY} />
         <ParallaxViewport distanceToCamera={6}>
            <HeroSection glViewport={glHeroRef} />
            <CenterSection glViewport={glCenterRef} projects={projects} projectTags={projectTags} />
            <ContactSection />
            <Footer />
         </ParallaxViewport>
         <Canvas eventSource={containerRef as any}>
            <HeroScene glViewport={glHeroRef} />
            <CenterScene glViewport={glCenterRef} />
            <Preload all />
         </Canvas>
         <Leva hidden />
      </HomePageStyled>
   );
};

export { HomePage };
