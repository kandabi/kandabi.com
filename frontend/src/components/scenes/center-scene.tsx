import { RefObject } from 'react';
import { Gradient, Shapes, Viewport } from 'components/common/webgl';

interface IHeroScene {
   glViewport: RefObject<HTMLDivElement>;
}

const CenterScene = ({ glViewport }: IHeroScene) => {
   return (
      <Viewport glViewport={glViewport}>
         <Shapes />
         <Gradient />
      </Viewport>
   );
};

export { CenterScene };
