import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { BufferGeometry, Float32BufferAttribute, ShaderMaterial, Vector3 } from 'three';
import { useControls } from 'leva';

import shapesTexture from 'assets/textures/shapes.png';

const TOTAL_SHAPE_TYPES = 3;
const MAX_SHAPES = 20;
const opacity = 0.25;

const vertexShader = /* glsl */ `
   uniform float uPointSize;

   attribute float angle;
   attribute float size;
   attribute float type;
   
   varying vec4 vColour;
   varying vec2 vAngle;
   varying float vType;
   
   void main() {
       gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
       gl_PointSize = (size * uPointSize) / gl_Position.w;
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
   type: number;
   size: number;
}

const updateShapes = (time: number, shapes: IShape[]) => {
   for (const shape of shapes) {
      shape.rotation = (time * -shape.size * 0.1) / (shape.size + 0.5);
      shape.position.y += shape.size * 0.0015;
      shape.position.x += Math.sin(shape.position.y + time) * 0.0005;
   }
};

const addShapes = (shapes: IShape[]) => {
   const newShapes = shapes.filter((shape) => shape.position.y < 4);

   for (let i = newShapes.length; i < MAX_SHAPES; i++) {
      newShapes.push({
         // position: new Vector3((0.5 - Math.random()) * 7, 0.5 - Math.random(), 0),
         position: new Vector3((0.5 - Math.random()) * 7, -6.0 + 6.0 * (0.5 - Math.random()), 0),
         type: Math.floor(Math.random() * 3) / TOTAL_SHAPE_TYPES,
         size: (Math.random() + 0.5) * 1.5,
         rotation: 0,
      });
   }

   return newShapes;
};

const updateGeometry = (shapes: IShape[], geometry: BufferGeometry, baseSize: number) => {
   const positions: number[] = [];
   const angles: number[] = [];
   const types: number[] = [];
   const sizes: number[] = [];

   for (let s of shapes) {
      positions.push(s.position.x, s.position.y, s.position.z);
      sizes.push(s.size * baseSize);
      angles.push(s.rotation);
      types.push(s.type);
   }

   geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
   geometry.setAttribute('angle', new Float32BufferAttribute(angles, 1));
   geometry.setAttribute('type', new Float32BufferAttribute(types, 1));
   geometry.setAttribute('size', new Float32BufferAttribute(sizes, 1));

   console.log('t', types);

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

   const { uPointSize } = useControls('Shapes', {
      Opacity: {
         value: opacity,
         min: 0,
         max: 1,
         step: 0.01,
         onChange: (value) => {
            if (shaderRef?.current) {
               shaderRef.current.uniforms.uOpacity.value = value;
            }
         },
      },
      uPointSize: {
         value: 22,
         min: 0,
         max: 100,
         step: 1,
      },
   });

   useFrame(({ clock: { elapsedTime } }) => {
      shapesRef.current = addShapes(shapesRef.current);
      updateShapes(elapsedTime + 100000, shapesRef.current);
      updateGeometry(shapesRef.current, geometryRef.current, uPointSize);
   });

   return (
      <points frustumCulled={false}>
         <bufferGeometry ref={geometryRef} />
         <shaderMaterial
            uniforms={{
               uPointSize: { value: uPointSize },
               uTexture: { value: texture },
               uOpacity: { value: opacity },
               uCount: { value: 1 / TOTAL_SHAPE_TYPES },
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
