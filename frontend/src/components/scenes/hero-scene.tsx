import { RefObject } from 'react';
import { Gradient, Viewport } from 'components/common/webgl';

interface IHeroScene {
   glViewport: RefObject<HTMLDivElement>;
}

const HeroScene = ({ glViewport }: IHeroScene) => {
   return (
      <Viewport glViewport={glViewport}>
         <pointLight position={[3, 10, 15]} />
         <mesh position={[2.5, 0, 0]}>
            <sphereGeometry />
            <meshStandardMaterial color='yellow' />
         </mesh>
         <Gradient />
      </Viewport>
   );
};

export { HeroScene };
