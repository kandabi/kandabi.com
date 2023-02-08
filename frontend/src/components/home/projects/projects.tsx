import styled from 'styled-components';

import { useIsMobile } from 'hooks/useIsMobile';

import waveDesktop_1 from 'assets/images/wave-desktop-1.svg';
import waveDesktop_2 from 'assets/images/wave-desktop-2.svg';
import waveMobile_1 from 'assets/images/wave-mobile-1.svg';
import waveMobile_2 from 'assets/images/wave-mobile-2.svg';
import Image from 'next/image';

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

const Projects = () => {
   const { isMobile } = useIsMobile();

   return (
      <ProjectsStyled>
         {isMobile ? (
            <>
               <TopWaveStyled src={waveMobile_1.src} alt='Wave top decoration' height={270} width={1920} />
               <BottomWaveStyled src={waveMobile_2.src} alt='Wave bottom decoration' height={250} width={1920} />
            </>
         ) : (
            <>
               <TopWaveStyled src={waveDesktop_1.src} alt='Wave top decoration' height={270} width={1920} />
               <BottomWaveStyled src={waveDesktop_2.src} alt='Wave bottom decoration' height={250} width={1920} />
            </>
         )}
      </ProjectsStyled>
   );
};

export { Projects };
