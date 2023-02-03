import styled from "styled-components";

import { Hero } from "components/home/hero";
import { Projects } from "components/home/projects";
import { Contact } from "components/home/contact";
import { ParallaxViewport } from "components/parallax";
import { Footer } from "components/footer";

const HomeStyled = styled.div``;

const Home = () => {
   return (
      <ParallaxViewport>
         <Hero />
         <Projects />
         <Contact />
         <Footer />
      </ParallaxViewport>
   );
};

export { Home };
