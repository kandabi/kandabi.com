import styled from 'styled-components';

import { useIsMobile } from 'hooks/useIsMobile';

import waveDesktop_1 from 'assets/images/wave-desktop-1.svg';
import waveDesktop_2 from 'assets/images/wave-desktop-2.svg';
import waveMobile_1 from 'assets/images/wave-mobile-1.svg';
import waveMobile_2 from 'assets/images/wave-mobile-2.svg';

const ProjectsStyled = styled.div`
   background: linear-gradient(180deg, #0b1327 0%, #0e1e35 30.21%, #0e1e35 64.06%, #0b1327 100%);
   position: relative;
   height: 200%;
`;

interface IWaveStyled {
   isMobile: boolean;
}

const TopWaveStyled = styled.img<IWaveStyled>`
   top: ${({ isMobile }) => (isMobile ? '-75px' : '-100px')};
   width: 100%;
   position: absolute;
`;

const BottomWaveStyled = styled.img<IWaveStyled>`
   bottom: ${({ isMobile }) => (isMobile ? '-100px' : '-120px')};
   width: 100%;
   position: absolute;
`;

const Projects = () => {
   const { isMobile } = useIsMobile();

   return (
      <ProjectsStyled>
         <TopWaveStyled src={isMobile ? waveMobile_1.src : waveDesktop_1.src} isMobile={isMobile} />
         <BottomWaveStyled src={isMobile ? waveMobile_2.src : waveDesktop_2.src} isMobile={isMobile} />
      </ProjectsStyled>
   );
};

export { Projects };
