import { RefObject } from 'react';
import { LinearGradient, Shapes, Viewport } from 'components/common/webgl';

interface IHeroScene {
   glViewport: RefObject<HTMLDivElement>;
}

const CenterScene = ({ glViewport }: IHeroScene) => {
   return (
      <Viewport glViewport={glViewport}>
         <Shapes />
         <LinearGradient strength={6} fromColor='blue_1000' toColor='blue_600' />
      </Viewport>
   );
};

export { CenterScene };
