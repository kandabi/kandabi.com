import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { Leva } from 'leva';

import { HeroScene, CenterScene } from 'components/scenes';
import { Header, HeaderVariants } from 'components/common/header';
import { HeroSection } from 'components/home-page/hero-section';
import { CenterSection } from 'components/home-page/center-section';
import { ContactSection } from 'components/home-page/contact-section';
import { ParallaxViewport } from 'components/common/parallax';
import { IProjectCard } from 'components/common/project/project-card';
import { IProjectTag } from 'components/common/project/project-tag';
import { Footer } from 'components/common/footer';

const HomePageStyled = styled.div`
   position: absolute;
   height: 100%;
   width: 100%;
`;

interface IHomePage {
   projects: IProjectCard[];
   projectTags: IProjectTag[];
}

const HomePage = ({ projects, projectTags }: IHomePage) => {
   const glHeroViewport = useRef<HTMLDivElement>(null);
   const glCenterViewport = useRef<HTMLDivElement>(null);

   return (
      <HomePageStyled>
         <Header variant={HeaderVariants.STICKY} />
         <ParallaxViewport distanceToCamera={6}>
            <HeroSection glViewport={glHeroViewport} />
            <CenterSection glViewport={glCenterViewport} projects={projects} projectTags={projectTags} />
            <ContactSection />
            <Footer />
         </ParallaxViewport>
         <Canvas>
            <HeroScene glViewport={glHeroViewport} />
            <CenterScene glViewport={glCenterViewport} />
         </Canvas>
         <Leva />
      </HomePageStyled>
   );
};

export { HomePage };
