import { RefObject } from 'react';
import { Viewport } from 'components/common/webgl';
// import { Vector2 } from 'three';

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
         {/* <LinearGradient strength={12} fromColor='blue_800' toColor='blue_700' size={new Vector2(12, 8)} /> */}
      </Viewport>
   );
};

export { HeroScene };
