import { RefObject } from 'react';
import styled from 'styled-components';
import { AboutMeSection } from './AboutMeSection/AboutMeSection';
import { ProjectsSection } from './ProjectsSection';
import { Image } from 'components/common/Image';
import { Breakpoint } from 'utils/breakpointUtils';
import { styles } from 'utils/styleUtils';
import waveDesktop_1 from 'assets/svgs/wave-desktop-1.svg';
import waveDesktop_2 from 'assets/svgs/wave-desktop-2.svg';
import waveMobile_1 from 'assets/svgs/wave-mobile-1.svg';
import waveMobile_2 from 'assets/svgs/wave-mobile-2.svg';
import { GetProjectsQuery, GetTagsQuery } from 'types/graphql';

const CenterSectionStyled = styled.div`
    padding-top: 200px;
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

type IProjectsAboutSection = {
    glViewport: RefObject<HTMLDivElement>;
    projectsQuery: GetProjectsQuery;
    tagsQuery: GetTagsQuery;
};

export const CenterSection = ({ glViewport, projectsQuery, tagsQuery }: IProjectsAboutSection) => {
    return (
        <CenterSectionStyled>
            <TopWaveStyled
                sources={[{ src: waveDesktop_1.src, breakpoint: Breakpoint.lg }]}
                alt='Wave top decoration'
                src={waveMobile_1.src}
                width={1920}
            />
            <ProjectsSection projectsQuery={projectsQuery} tagsQuery={tagsQuery} />
            <AboutMeSection />
            <BottomWaveStyled
                sources={[{ src: waveDesktop_2.src, breakpoint: Breakpoint.lg }]}
                alt='Wave bottom decoration'
                src={waveMobile_2.src}
                width={1920}
            />
            <GlViewStyled ref={glViewport} />
        </CenterSectionStyled>
    );
};
