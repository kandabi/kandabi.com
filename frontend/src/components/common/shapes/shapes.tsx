import { View } from '@react-three/drei';
import { RefObject, useMemo, useRef } from 'react';
import { Vector2, Mesh, Shape } from 'three';

const trianglePoints: Vector2[] = [new Vector2(-2, 0), new Vector2(0, 3), new Vector2(2, 0)];

interface IShapes {
   glViewport: RefObject<HTMLDivElement>;
}

const Shapes = ({ glViewport }: IShapes) => {
   const triangleRef = useRef<Mesh>(null!);
   const shape = useMemo(() => new Shape(trianglePoints), []);

   return (
      <View track={glViewport as any}>
         <mesh ref={triangleRef} position={[0, 0, 0]} scale={0.2}>
            <shapeGeometry attach='geometry' args={[shape]} />
            <meshBasicMaterial transparent={true} opacity={0.05} color='#FFFFFF' />
         </mesh>
      </View>
   );
};

export { Shapes };
