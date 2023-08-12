import { Canvas } from '@react-three/fiber';
import { IParallax, Parallax } from '@react-spring/parallax';
import { Leva } from 'leva';
import useRefs from 'react-use-refs';
import styled from 'styled-components';

import { HeroScene, CenterScene } from 'components/scenes';
import { Header, HeaderVariants } from 'components/common/header';
import { HeroSection } from 'components/home-page/hero-section';
import { CenterSection } from 'components/home-page/center-section';
import { ContactSection } from 'components/home-page/contact-section';
import { IProject, ProjectTagProps } from 'types/project';
import { useRef } from 'react';

const HomePageStyled = styled.div`
   position: absolute;
   height: 100%;
   width: 100%;
`;

const ParallaxStyled = styled(Parallax)`
   z-index: 1;
`;

interface Props {
   projects: IProject[];
   projectTags: ProjectTagProps[];
}

export const HomePage = ({ projects, projectTags }: Props) => {
   const [containerRef, glHeroRef, glCenterRef] = useRefs<HTMLDivElement>(null!);
   const parallax = useRef<IParallax>(null);

   return (
      <HomePageStyled ref={containerRef}>
         <Header variant={HeaderVariants.STICKY} />
         <ParallaxStyled ref={parallax} pages={2.5}>
            <HeroSection glViewport={glHeroRef} />
            <CenterSection glViewport={glCenterRef} projects={projects} projectTags={projectTags} />
            <ContactSection />
         </ParallaxStyled>
         <Leva hidden />
         <Canvas eventSource={containerRef}>
            <HeroScene glViewport={glHeroRef} />
            <CenterScene glViewport={glCenterRef} />
         </Canvas>
      </HomePageStyled>
   );
};
