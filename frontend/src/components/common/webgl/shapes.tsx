import { useRef } from 'react';

import { useTexture } from '@react-three/drei';

// import snowflakeTexture from 'assets/textures/snowflake.png';
import triangleTexturer from 'assets/textures/triangle.png';
import { useControls } from 'leva';
import { BufferGeometry, Float32BufferAttribute, ShaderMaterial, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';

const MAX_SHAPES = 40;
const opacity = 0.3;
const offset = 0;

const vertexShader = /* glsl */ `
   uniform float uPointSize;

   attribute float angle;
   attribute float size;
   
   varying vec4 vColour;
   varying vec2 vAngle;
   
   void main() {
       gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
       gl_PointSize = (size * uPointSize) / gl_Position.w;
       vAngle = vec2(cos(angle), sin(angle));
   }
`;

const fragmentShader = /* glsl */ `
   uniform sampler2D uTexture;
   uniform float uOpacity;
   uniform float uOffset;

   varying vec2 vAngle;

   void main() {
      vec2 coords = gl_PointCoord - 0.5;
      coords.x += uOffset;
      coords = coords * mat2(vAngle.x, vAngle.y, -vAngle.y, vAngle.x) + 0.5;
      
      gl_FragColor = texture2D(uTexture, coords);
   }
`;

interface IShape {
   position: Vector3;
   rotation: number;
   size: number;
}

const updateShapes = (time: number, shapes: IShape[]) => {
   for (const shape of shapes) {
      shape.rotation = (time * -shape.size * 0.01) / (shape.size + 0.5);
      shape.position.y += shape.size * 0.0015;
      shape.position.x += Math.sin(shape.position.y + time) * 0.0005;
   }
};

const addShapes = (shapes: IShape[]) => {
   const newShapes = shapes.filter((shape) => shape.position.y < 4);

   for (let i = newShapes.length; i < MAX_SHAPES; i++) {
      newShapes.push({
         position: new Vector3((0.5 - Math.random()) * 7, -5.0 + 2.0 * (0.5 - Math.random()), 0),
         size: (Math.random() + 0.5) * 1.5,
         rotation: 0,
      });
   }

   return newShapes;
};

const updateGeometry = (shapes: IShape[], geometry: BufferGeometry, baseSize: number) => {
   const positions: number[] = [];
   const angles: number[] = [];
   const sizes: number[] = [];

   for (let s of shapes) {
      positions.push(s.position.x, s.position.y, s.position.z);
      angles.push(s.rotation);
      sizes.push(s.size * baseSize);
   }

   geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
   geometry.setAttribute('angle', new Float32BufferAttribute(angles, 1));
   geometry.setAttribute('size', new Float32BufferAttribute(sizes, 1));

   geometry.attributes.position.needsUpdate = true;
   geometry.attributes.angle.needsUpdate = true;
   geometry.attributes.size.needsUpdate = true;
};

const Shapes = () => {
   const geometryRef = useRef<BufferGeometry>(null!);
   const shaderRef = useRef<ShaderMaterial>(null);
   const shapesRef = useRef<IShape[]>([]);
   const texture = useTexture(triangleTexturer.src);
   const { uPointSize } = useControls('Shapes', {
      // Offset: {
      //    value: offset,
      //    min: 0,
      //    max: 1,
      //    step: 0.01,
      //    onChange: (value) => {
      //       if (shaderRef?.current) {
      //          shaderRef.current.uniforms.uOffset.value = value;
      //       }
      //    },
      // },
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
         value: 10,
         min: 0,
         max: 100,
         step: 1,
      },
   });

   useFrame(({ clock: { elapsedTime } }) => {
      shapesRef.current = addShapes(shapesRef.current);
      updateShapes(elapsedTime * 10.0, shapesRef.current);
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
               uOffset: { value: offset },
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
