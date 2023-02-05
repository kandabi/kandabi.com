import { useCallback, useState } from 'react';
import styled from 'styled-components';

import { Header, HeaderVariant } from 'components/common/header';
import { Hero } from 'components/home/hero';
import { Projects } from 'components/home/projects';
import { Contact } from 'components/home/contact';
import { ParallaxViewport } from 'components/common/parallax';
import { Footer } from 'components/common/footer';

const HomeStyled = styled.div``;

const Home = () => {
   const [scrollPercentage, setScrollPercentage] = useState<number>(0);
   const handleScroll = useCallback((percentage: number) => setScrollPercentage(percentage), [setScrollPercentage]);

   return (
      <HomeStyled>
         <Header headerVariant={HeaderVariant.SCROLL} scrollPercentage={scrollPercentage} />
         <ParallaxViewport distanceToCamera={6} onScroll={handleScroll}>
            <Hero scrollPercentage={scrollPercentage} />
            <Projects />
            <Contact />
            <Footer />
         </ParallaxViewport>
      </HomeStyled>
   );
};

export { Home };
