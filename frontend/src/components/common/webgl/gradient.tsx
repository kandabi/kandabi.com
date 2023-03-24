import { useRef } from 'react';
import { useControls } from 'leva';
import { Color, ShaderMaterial } from 'three';

const vertexShader = /* glsl */ `
   varying vec2 vUv;

   void main() {
       gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
       vUv = uv;
   }
`;

const fragmentShader = /* glsl */ `
   uniform vec3 uTopColor;
   uniform vec3 uBottomColor;
   uniform float uColorStrength;

   varying vec2 vUv;

   const highp float NOISE_GRANULARITY = 0.5/255.0;

   highp float random(highp vec2 coords) {
      return fract(sin(dot(coords.xy, vec2(12.9898,78.233))) * 43758.5453);
   }


   void main() {
      vec3 colorMix = mix(uTopColor, uBottomColor, vUv.y) * uColorStrength;
      // Solves gradient color banding by dithering.
      colorMix += mix(-NOISE_GRANULARITY, NOISE_GRANULARITY, random(vUv)) * uColorStrength * 0.1;
      gl_FragColor = vec4(colorMix , 1.0);
   }
`;

const colorStrength = 16;

interface IGradient {}

const Gradient = ({}: IGradient) => {
   const shaderRef = useRef<ShaderMaterial>(null);
   useControls({
      uColorStrength: {
         value: colorStrength,
         min: 5,
         max: 50,
         step: 0.01,
         onChange: (strength) => {
            if (shaderRef?.current) {
               shaderRef.current.uniforms.uColorStrength.value = strength;
            }
         },
      },
   });

   return (
      <mesh position={[0, 0, 0]}>
         <planeGeometry args={[8, 8]} />
         <shaderMaterial
            fragmentShader={fragmentShader}
            vertexShader={vertexShader}
            ref={shaderRef}
            uniforms={{
               uColorStrength: { value: colorStrength },
               uTopColor: { value: new Color(0x0f243d) },
               uBottomColor: { value: new Color(0x0a1120) },
            }}
         />
      </mesh>
   );
};

export { Gradient };
