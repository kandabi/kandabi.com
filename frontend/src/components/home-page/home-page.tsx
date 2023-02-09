import styled from 'styled-components';

import { Header, HeaderVariant } from 'components/common/header';
import { HeroSection } from 'components/home-page/hero-section';
import { ProjectsAboutSection } from 'components/home-page/projects-about-section';
import { IProjectsContainer } from 'components/home-page/projects-about-section/projects-container';
import { ContactSection } from 'components/home-page/contact-section';
import { ParallaxViewport } from 'components/common/parallax';
import { Footer } from 'components/common/footer';

const HomeStyled = styled.div``;

const HomePage = ({ projects }: IProjectsContainer) => {
   return (
      <HomeStyled>
         <Header headerVariant={HeaderVariant.STICKY} />
         <ParallaxViewport distanceToCamera={6}>
            <HeroSection />
            <ProjectsAboutSection projects={projects} />
            <ContactSection />
            <Footer />
         </ParallaxViewport>
      </HomeStyled>
   );
};

export { HomePage };
