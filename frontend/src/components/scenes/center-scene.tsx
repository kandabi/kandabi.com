import { RefObject } from 'react';
import { LinearGradient, Shapes, Viewport } from 'components/common/webgl';

interface IHeroScene {
   glViewport: RefObject<HTMLDivElement>;
}

const CenterScene = ({ glViewport }: IHeroScene) => {
   return (
      <Viewport glViewport={glViewport}>
         <Shapes />
         <LinearGradient strength={16} fromColor='blue_800' toColor='blue_700' />
      </Viewport>
   );
};

export { CenterScene };
