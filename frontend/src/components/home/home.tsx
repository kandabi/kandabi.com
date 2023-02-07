import styled from 'styled-components';

import { Header, HeaderVariant } from 'components/common/header';
import { Hero } from 'components/home/hero';
import { Projects } from 'components/home/projects';
import { Contact } from 'components/home/contact';
import { ParallaxViewport } from 'components/common/parallax';
import { Footer } from 'components/common/footer';

const HomeStyled = styled.div``;

const Home = () => {
   return (
      <HomeStyled>
         {/* <Header headerVariant={HeaderVariant.STICKY} /> */}
         <ParallaxViewport distanceToCamera={6}>
            <Hero />
            <Projects />
            <Contact />
            {/* <Footer /> */}
         </ParallaxViewport>
      </HomeStyled>
   );
};

export { Home };
