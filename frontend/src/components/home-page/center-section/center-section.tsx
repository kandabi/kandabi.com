import { RefObject } from 'react';
import styled from 'styled-components';

import { styles } from 'styles';
import { Breakpoints } from 'styles/breakpoints';
import { ProjectsSection } from './projects-section';
import { IProject, IProjectTag } from 'types/project';
import { Image } from 'components/common/image';

import waveDesktop_1 from 'assets/svgs/wave-desktop-1.svg';
import waveDesktop_2 from 'assets/svgs/wave-desktop-2.svg';
import waveMobile_1 from 'assets/svgs/wave-mobile-1.svg';
import waveMobile_2 from 'assets/svgs/wave-mobile-2.svg';

const CenterSectionStyled = styled.div`
   position: relative;
   height: 200%;
`;

const TopWaveStyled = styled(Image)`
   position: absolute;
   width: 100%;
   top: -75px;
   z-index: 15;
   ${styles.breakpoints.sm} {
      top: -7%;
   }
   ${styles.breakpoints.lg} {
      top: -5%;
   }
`;

const BottomWaveStyled = styled(Image)`
   position: absolute;
   top: 98%;
   width: 100%;
   z-index: 15;
   ${styles.breakpoints.md} {
      top: 95%;
   }

   ${styles.breakpoints.lg} {
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
   projectTags: IProjectTag[];
}

const CenterSection = ({ glViewport, projects, projectTags }: IProjectsAboutSection) => {
   return (
      <CenterSectionStyled>
         <TopWaveStyled
            sources={[{ src: waveDesktop_1.src, breakpoint: Breakpoints.lg }]}
            alt='Wave top decoration'
            src={waveMobile_1.src}
            height={230}
            width={1920}
         />
         <ProjectsSection projects={projects} projectTags={projectTags} />
         <BottomWaveStyled
            sources={[{ src: waveDesktop_2.src, breakpoint: Breakpoints.lg }]}
            alt='Wave bottom decoration'
            src={waveMobile_2.src}
            height={150}
            width={1920}
         />
         <GlViewStyled ref={glViewport as any} />
      </CenterSectionStyled>
   );
};

export { CenterSection };
