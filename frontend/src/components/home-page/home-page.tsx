import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';

import { FastHtml } from 'components/common/fast-html';
import { Header, HeaderVariant } from 'components/common/header';
import { HeroSection } from 'components/home-page/hero-section';
import { CenterSection } from 'components/home-page/center-section';
import { IProjectsContainer } from 'components/home-page/center-section/projects-section/projects-container';
import { ContactSection } from 'components/home-page/contact-section';
import { ParallaxViewport } from 'components/common/parallax';
import { Footer } from 'components/common/footer';

const HomePageStyled = styled.div`
   position: absolute;
   height: 100%;
   width: 100%;
`;

const HomePage = ({ projects }: IProjectsContainer) => {
   return (
      <HomePageStyled>
         <Header headerVariant={HeaderVariant.STICKY} />
         <ParallaxViewport distanceToCamera={6}>
            <HeroSection />
            <CenterSection projects={projects} />
            <ContactSection />
            <Footer />
         </ParallaxViewport>
         {/* <Canvas>
            <FastHtml>
            </FastHtml>
            <pointLight position={[10, 10, 10]} />
            <mesh>
               <sphereGeometry />
               <meshStandardMaterial color='hotpink' />
            </mesh>
         </Canvas> */}
      </HomePageStyled>
   );
};

export { HomePage };
