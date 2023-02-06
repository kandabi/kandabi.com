import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Header, HeaderVariant } from 'components/common/header';
import { Hero } from 'components/home/hero';
import { Projects } from 'components/home/projects';
import { Contact } from 'components/home/contact';
import { ParallaxViewport } from 'components/common/parallax';
import { Footer } from 'components/common/footer';

const HomeStyled = styled.div``;

const Home = () => {
   const [scrollPercent, setScrollPercent] = useState<number>(0);
   const handleMouseScroll = useCallback((percentage: number) => setScrollPercent(percentage), [setScrollPercent]);

   return (
      <HomeStyled>
         <Header headerVariant={HeaderVariant.STICKY} scrollPercent={scrollPercent} />
         <ParallaxViewport distanceToCamera={6} onMouseScroll={handleMouseScroll}>
            <Hero scrollPercent={scrollPercent} />
            <Projects />
            <Contact />
            <Footer />
         </ParallaxViewport>
      </HomeStyled>
   );
};

export { Home };
