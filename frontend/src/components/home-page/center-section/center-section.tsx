import { RefObject } from 'react';
import styled from 'styled-components';

import { theme } from 'styles';
import { mediaSizes } from 'styles/breakpoints';
import { ProjectsSection } from './projects-section';
import { IProjectItem } from 'components/home-page/center-section/projects-section/project-item';
import { Image } from 'components/common/image';

import waveDesktop_1 from 'assets/images/wave-desktop-1.svg';
import waveDesktop_2 from 'assets/images/wave-desktop-2.svg';
import waveMobile_1 from 'assets/images/wave-mobile-1.svg';
import waveMobile_2 from 'assets/images/wave-mobile-2.svg';

const CenterSectionStyled = styled.div`
   background: linear-gradient(180deg, #0b1327 0%, #0e1e35 30.21%, #0e1e35 64.06%, #0b1327 100%);
   position: relative;
   height: 200%;
`;

const TopWaveStyled = styled(Image)`
   position: absolute;
   width: 100%;
   top: -75px;
   ${theme.breakpoints.sm} {
      top: -7%;
   }
   ${theme.breakpoints.lg} {
      top: -5%;
   }
`;

const BottomWaveStyled = styled(Image)`
   position: absolute;
   bottom: -100px;
   width: 100%;
   ${theme.breakpoints.md} {
      bottom: -120px;
   }
`;

const GlViewStyled = styled.div`
   position: absolute;
   height: 100%;
   width: 100%;
   z-index: 1;
`;

interface IProjectsAboutSection {
   glViewport: RefObject<HTMLDivElement>;
   projects: IProjectItem[];
}

const CenterSection = ({ glViewport, projects }: IProjectsAboutSection) => {
   return (
      <CenterSectionStyled>
         <GlViewStyled ref={glViewport as any} />
         <TopWaveStyled
            sources={[{ src: waveDesktop_1.src, media: mediaSizes.lg }]}
            alt='Wave top decoration'
            src={waveMobile_1.src}
            height={230}
            width={1920}
         />
         <ProjectsSection projects={projects} />
         <BottomWaveStyled
            sources={[{ src: waveDesktop_2.src, media: mediaSizes.lg }]}
            alt='Wave bottom decoration'
            src={waveMobile_2.src}
            height={150}
            width={1920}
         />
      </CenterSectionStyled>
   );
};

export { CenterSection };
