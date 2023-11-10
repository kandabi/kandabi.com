import useRefs from 'react-use-refs';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { Leva } from 'leva';
import { CenterSection } from 'components/HomePage/CenterSection';
import { ContactSection } from 'components/HomePage/ContactSection';
import { HeroSection } from 'components/HomePage/HeroSection';
import { Header, HeaderVariant } from 'components/common/Header';
import { ParallaxContainer } from 'components/common/ParallaxContainer';
import { CenterScene, HeroScene } from 'components/scenes';
import { GetProjectsQuery, GetTagsQuery } from 'types/graphql';

const HomePageStyled = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
`;

type Props = {
    projectsQuery?: GetProjectsQuery;
    tagsQuery?: GetTagsQuery;
};

export const HomePage = ({ projectsQuery, tagsQuery }: Props) => {
    const [containerRef, glHeroRef, glCenterRef] = useRefs<HTMLDivElement>(null!);

    return (
        <HomePageStyled ref={containerRef}>
            <Header variant={HeaderVariant.STICKY} />
            <ParallaxContainer pages={2.6}>
                <HeroSection glViewport={glHeroRef} />
                <CenterSection glViewport={glCenterRef} projectsQuery={projectsQuery} tagsQuery={tagsQuery} />
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
