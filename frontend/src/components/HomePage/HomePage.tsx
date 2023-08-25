import { useRef } from 'react';
import useRefs from 'react-use-refs';
import { IParallax, Parallax } from '@react-spring/parallax';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { Leva } from 'leva';
import { CenterSection } from 'components/HomePage/CenterSection';
import { ContactSection } from 'components/HomePage/ContactSection';
import { HeroSection } from 'components/HomePage/HeroSection';
import { Header, HeaderVariants } from 'components/common/Header';
import { ProjectProps, ProjectTagProps } from 'components/common/Project/projectUtils';
import { CenterScene, HeroScene } from 'components/scenes';

const HomePageStyled = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
`;

const ParallaxStyled = styled(Parallax)`
    z-index: 1;
`;

interface Props {
    projects: ProjectProps[];
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
