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
import { ParallaxLayer } from '@react-spring/parallax';
import { Device, useDeviceDetector } from 'hooks/useDeviceDetector';
import { useSsrDetector } from 'hooks/useSsrDetector';

const HomePageStyled = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
`;

type ParallaxConfigProps = {
    pages: number;
    hero: { factor: number; offset: number; speed: number };
    center: { factor: number; offset: number; speed: number };
    contact: { factor: number; offset: number; speed: number };
};

const parallaxConfig: Record<Device, ParallaxConfigProps> = {
    [Device.DESKTOP]: {
        pages: 3,
        hero: { factor: 1, offset: 0, speed: 0.2 },
        center: { factor: 2, offset: 0.95, speed: 0.75 },
        contact: { factor: 1, offset: 2, speed: 0.2 },
    },
    [Device.MOBILE]: {
        pages: 4.25,
        hero: { factor: 1, offset: 0, speed: 0.2 },
        center: { factor: 3, offset: 0.95, speed: 0.75 },
        contact: { factor: 1.75, offset: 2.75, speed: 0.2 },
    },
};

type Props = {
    projectsQuery: GetProjectsQuery;
    tagsQuery: GetTagsQuery;
};

export const HomePage = ({ projectsQuery, tagsQuery }: Props) => {
    const [containerRef, glHeroRef, glCenterRef] = useRefs<HTMLDivElement>(null!);

    const { device } = useDeviceDetector();
    // const { isSsr } = useSsrDetector();
    const { pages, hero, center, contact } = parallaxConfig[device];

    // console.log('isSsr', isSsr);

    return (
        <HomePageStyled ref={containerRef}>
            <Header variant={HeaderVariant.STICKY} />
            <ParallaxContainer pages={pages}>
                <ParallaxLayer {...hero}>
                    <HeroSection glViewport={glHeroRef} />
                </ParallaxLayer>
                <ParallaxLayer {...center}>
                    <CenterSection glViewport={glCenterRef} projectsQuery={projectsQuery} tagsQuery={tagsQuery} />
                </ParallaxLayer>
                <ParallaxLayer {...contact}>
                    <ContactSection />
                </ParallaxLayer>
            </ParallaxContainer>
            <Leva hidden />
            <Canvas eventSource={containerRef}>
                <HeroScene glViewport={glHeroRef} />
                <CenterScene glViewport={glCenterRef} />
            </Canvas>
        </HomePageStyled>
    );
};
