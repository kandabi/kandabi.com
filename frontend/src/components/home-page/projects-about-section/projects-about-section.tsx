import styled from 'styled-components';

import { ProjectsContainer } from 'components/home-page/projects-about-section/projects-container';
import { IProjectItem } from 'components/home-page/projects-about-section/project-item';

import waveDesktop_1 from 'assets/images/wave-desktop-1.svg';
import waveDesktop_2 from 'assets/images/wave-desktop-2.svg';
import waveMobile_1 from 'assets/images/wave-mobile-1.svg';
import waveMobile_2 from 'assets/images/wave-mobile-2.svg';
import { mediaSizesConfig } from 'styles/breakpoints';
import { Image } from 'components/common/image';

const ProjectsStyled = styled.div`
   background: linear-gradient(180deg, #0b1327 0%, #0e1e35 30.21%, #0e1e35 64.06%, #0b1327 100%);
   position: relative;
   height: 200%;
`;

const TopWaveStyled = styled(Image)`
   position: absolute;
   width: 100%;
   top: -75px;
   ${({ theme: { breakpoints } }) => breakpoints.sm} {
      top: -7%;
   }
   ${({ theme: { breakpoints } }) => breakpoints.lg} {
      top: -5%;
   }
`;

const BottomWaveStyled = styled(Image)`
   position: absolute;
   bottom: -100px;
   width: 100%;
   ${({ theme: { breakpoints } }) => breakpoints.md} {
      bottom: -120px;
   }
`;

interface IProjectsAboutSection {
   projects: IProjectItem[];
}

const ProjectsAboutSection = ({ projects }: IProjectsAboutSection) => {
   return (
      <ProjectsStyled>
         <TopWaveStyled
            sources={[{ src: waveDesktop_1.src, media: mediaSizesConfig.lg }]}
            alt='Wave top decoration'
            src={waveMobile_1.src}
            height={230}
            width={1920}
         />
         <ProjectsContainer projects={projects} />
         <BottomWaveStyled
            sources={[{ src: waveDesktop_2.src, media: mediaSizesConfig.lg }]}
            alt='Wave bottom decoration'
            src={waveMobile_2.src}
            height={150}
            width={1920}
         />
      </ProjectsStyled>
   );
};

export { ProjectsAboutSection };
