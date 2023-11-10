import useRefs from 'react-use-refs';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { Leva } from 'leva';
import { CenterSection } from 'components/HomePage/CenterSection';
import { ContactSection } from 'components/HomePage/ContactSection';
import { HeroSection } from 'components/HomePage/HeroSection';
import { Header, HeaderVariant } from 'components/common/Header';
import { ParallaxContainer } from 'components/common/ParallaxContainer';
import { ProjectProps } from 'components/common/Project/ProjectCard';
import { ProjectTagProps } from 'components/common/Project/ProjectTag';
import { CenterScene, HeroScene } from 'components/scenes';

const HomePageStyled = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
`;

type Props = {
    projects: ProjectProps[];
    projectTags: ProjectTagProps[];
};

export const HomePage = ({ projects, projectTags }: Props) => {
    const [containerRef, glHeroRef, glCenterRef] = useRefs<HTMLDivElement>(null!);

    return (
        <HomePageStyled ref={containerRef}>
            <Header variant={HeaderVariant.STICKY} />
            <ParallaxContainer pages={2.6}>
                <HeroSection glViewport={glHeroRef} />
                <CenterSection glViewport={glCenterRef} projects={projects} projectTags={projectTags} />
                <ContactSection />
            </ParallaxContainer>
            <Leva hidden />
            <Canvas eventSource={containerRef}>
                <HeroScene glViewport={glHeroRef} />
                <CenterScene glViewport={glCenterRef} />
            </Canvas>
        </HomePageStyled>
    );
};
