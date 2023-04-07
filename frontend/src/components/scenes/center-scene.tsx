import { RefObject } from 'react';
import { LinearGradient, Shapes, Viewport } from 'components/common/webgl';

interface IHeroScene {
   glViewport: RefObject<HTMLDivElement>;
}

const CenterScene = ({ glViewport }: IHeroScene) => {
   return (
      <Viewport glViewport={glViewport}>
         <Shapes />
         {/* <LinearGradient strength={5} baseStrength={0.05} length={0.5} topColor='#080a14' bottomColor='#0c1f3b' /> */}
      </Viewport>
   );
};

export { CenterScene };
