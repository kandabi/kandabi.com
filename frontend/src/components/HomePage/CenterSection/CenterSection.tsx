import { RefObject } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import styled from 'styled-components';
import { ProjectsSection } from './ProjectsSection';
import { Image } from 'components/common/Image';
import { IProject, ProjectTagProps } from 'types/project';
import { Breakpoint } from 'utils/breakpoints';
import { styles } from 'utils/styles';
import waveDesktop_1 from 'assets/svgs/wave-desktop-1.svg';
import waveDesktop_2 from 'assets/svgs/wave-desktop-2.svg';
import waveMobile_1 from 'assets/svgs/wave-mobile-1.svg';
import waveMobile_2 from 'assets/svgs/wave-mobile-2.svg';

const CenterSectionStyled = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`;

const TopWaveStyled = styled(Image)`
    position: absolute;
    width: 100%;
    top: -75px;
    ${styles.breakpoint.sm} {
        top: -7%;
    }
    ${styles.breakpoint.lg} {
        top: -5%;
    }
`;

const BottomWaveStyled = styled(Image)`
    position: absolute;
    width: 100%;
    top: 98%;
    ${styles.breakpoint.md} {
        top: 95%;
    }

    ${styles.breakpoint.lg} {
        top: 92%;
    }
`;

const GlViewStyled = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
`;

interface IProjectsAboutSection {
    glViewport: RefObject<HTMLDivElement>;
    projects: IProject[];
    projectTags: ProjectTagProps[];
}

export const CenterSection = ({ glViewport, projects, projectTags }: IProjectsAboutSection) => {
    return (
        <ParallaxLayer factor={2.0} offset={0.99} speed={1.2}>
            <CenterSectionStyled>
                <TopWaveStyled
                    sources={[{ src: waveDesktop_1.src, breakpoint: Breakpoint.lg }]}
                    alt='Wave top decoration'
                    src={waveMobile_1.src}
                    width={1920}
                />
                <ProjectsSection projects={projects} projectTags={projectTags} />
                <BottomWaveStyled
                    sources={[{ src: waveDesktop_2.src, breakpoint: Breakpoint.lg }]}
                    alt='Wave bottom decoration'
                    src={waveMobile_2.src}
                    width={1920}
                />
                <GlViewStyled ref={glViewport} />
            </CenterSectionStyled>
        </ParallaxLayer>
    );
};
