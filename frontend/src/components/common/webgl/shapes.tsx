import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { BufferGeometry, Float32BufferAttribute, ShaderMaterial, Vector3 } from 'three';
import { useControls } from 'leva';

import shapesTexture from 'assets/textures/shapes.png';

const TOTAL_SHAPE_TYPES = 3;
const MAX_SHAPES = 20;
const SIZE_MULTIPLIER = 30;
const BASE_SIZE = 12;
const OPACITY = 0.3;

const vertexShader = /* glsl */ `
   uniform float uSizeMultiplier;

   attribute float angle;
   attribute float size;
   attribute float type;
   
   varying vec4 vColour;
   varying vec2 vAngle;
   varying float vType;
   
   void main() {
       gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
       gl_PointSize = (size * uSizeMultiplier) / gl_Position.w;
       vAngle = vec2(cos(angle), sin(angle));
       vType = type;
   }
`;

const fragmentShader = /* glsl */ `
   uniform sampler2D uTexture;
   uniform float uOpacity;
   uniform float uCount;

   varying float vType;
   varying vec2 vAngle;

   void main() {
      vec2 coords = gl_PointCoord - 0.5;
      coords = coords * mat2(vAngle.x, vAngle.y, -vAngle.y, vAngle.x) + 0.5;
      coords.x = coords.x * uCount + vType;
      
      gl_FragColor = texture2D(uTexture, coords) * uOpacity;
   }
`;

interface IShape {
   position: Vector3;
   rotation: number;
   speed: number;
   type: number;
   size: number;
}

const updateShapes = (time: number, shapes: IShape[]) => {
   for (const shape of shapes) {
      shape.rotation = time * shape.speed * 0.25;
      shape.position.y += shape.speed * 0.001;
      shape.position.x += Math.sin(shape.position.y + time * 0.001) * 0.0004;
   }
};

const addShapes = (shapes: IShape[]): IShape[] => {
   const newShapes = shapes.filter((shape) => shape.position.y < 4);

   for (let i = newShapes.length; i < MAX_SHAPES; i++) {
      const initialSize = (Math.random() + 0.2) * 3;
      newShapes.push({
         position: new Vector3((0.5 - Math.random()) * 7, -5 + 2 * (0.5 - Math.random()), 0),
         type: Math.floor(Math.random() * 3) / TOTAL_SHAPE_TYPES,
         size: initialSize * BASE_SIZE,
         speed: 4 / initialSize,
         rotation: 0,
      });
   }

   return newShapes;
};

const updateGeometry = (shapes: IShape[], geometry: BufferGeometry) => {
   const positions: number[] = [];
   const angles: number[] = [];
   const types: number[] = [];
   const sizes: number[] = [];

   for (let s of shapes) {
      positions.push(s.position.x, s.position.y, s.position.z);
      angles.push(s.rotation);
      sizes.push(s.size);
      types.push(s.type);
   }

   geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
   geometry.setAttribute('angle', new Float32BufferAttribute(angles, 1));
   geometry.setAttribute('type', new Float32BufferAttribute(types, 1));
   geometry.setAttribute('size', new Float32BufferAttribute(sizes, 1));

   geometry.attributes.position.needsUpdate = true;
   geometry.attributes.type.needsUpdate = true;
   geometry.attributes.angle.needsUpdate = true;
   geometry.attributes.size.needsUpdate = true;
};

const Shapes = () => {
   const geometryRef = useRef<BufferGeometry>(null!);
   const shaderRef = useRef<ShaderMaterial>(null);
   const shapesRef = useRef<IShape[]>([]);
   const texture = useTexture(shapesTexture.src);

   useControls('Shapes', {
      sizeMultiplier: {
         value: SIZE_MULTIPLIER,
         min: 0,
         max: 100,
         step: 1,
         onChange: (value) => {
            if (shaderRef?.current) {
               shaderRef.current.uniforms.uSizeMultiplier.value = value;
            }
         },
      },
   });

   useFrame(({ clock: { elapsedTime } }) => {
      shapesRef.current = addShapes(shapesRef.current);
      updateShapes(elapsedTime, shapesRef.current);
      updateGeometry(shapesRef.current, geometryRef.current);
   });

   return (
      <points frustumCulled={false}>
         <bufferGeometry ref={geometryRef} />
         <shaderMaterial
            uniforms={{
               uTexture: { value: texture },
               uCount: { value: 1 / TOTAL_SHAPE_TYPES },
               uSizeMultiplier: { value: SIZE_MULTIPLIER },
               uOpacity: { value: OPACITY },
            }}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            transparent={true}
            depthWrite={false}
            depthTest={true}
            ref={shaderRef}
         />
      </points>
   );
};

export { Shapes };