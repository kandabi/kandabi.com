import { View } from '@react-three/drei';
import { RefObject } from 'react';

interface IBall {
   glViewport: RefObject<HTMLDivElement>;
}

const Ball = ({ glViewport }: IBall) => {
   return (
      <View index={1} track={glViewport as any}>
         <pointLight position={[3, 10, 15]} />
         <mesh position={[2.5, 0, 0]}>
            <sphereGeometry />
            <meshStandardMaterial color='yellow' />
         </mesh>
      </View>
   );
};

export { Ball };
