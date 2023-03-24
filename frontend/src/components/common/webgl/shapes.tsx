import { RefObject } from 'react';

import { Viewport } from 'components/common/webgl';

const _positions = new Array(1000).fill(0).map((v) => (0.5 - Math.random()) * 7.5);
const positions = new Float32Array(_positions);
const _sizes = new Array(333).fill(0).map((v) => (Math.random() + 0.5) * 100.0);
const sizes = new Float32Array(_sizes);

const vertexShader = /* glsl */ `
   uniform float uPointSize;

   attribute vec4 colour;
   attribute float angle;
   attribute float size;
   
   varying vec4 vColour;
   varying vec2 vAngle;
   
   void main() {
       vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
       gl_Position = projectionMatrix * mvPosition;
       gl_PointSize = size / gl_Position.w;
       vAngle = vec2(cos(angle), sin(angle));
       vColour = vec4(colour.rgb, colour.a);
   }
`;

const fragmentShader = /* glsl */ `
   varying vec2 vAngle;

   void main() {
      vec2 coords = (gl_PointCoord - 0.5) * mat2(vAngle.x, vAngle.y, -vAngle.y, vAngle.x) + 0.5;
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
   }
`;

interface IShapes {}

const Shapes = ({}: IShapes) => {
   return (
      <points>
         <bufferGeometry>
            <bufferAttribute
               attach='attributes-position'
               count={positions.length / 3}
               array={positions}
               itemSize={3}
            />
            <bufferAttribute attach='attributes-size' count={sizes.length} array={sizes} itemSize={1} />
         </bufferGeometry>
         <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} />
      </points>
   );
};

export { Shapes };
