import { Color, Vector2 } from 'three';
import { colorConfig, IColor } from 'styles';

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
   uniform float uStrength;

   varying vec2 vUv;

   const highp float NOISE_GRANULARITY = 0.5/255.0;

   highp float random(highp vec2 coords) {
      return fract(sin(dot(coords.xy, vec2(12.9898,78.233))) * 43758.5453);
   }

   void main() {
      vec3 colorMix = mix(uTopColor, uBottomColor, vUv.y) * uStrength;
      // colorMix += mix(-NOISE_GRANULARITY, NOISE_GRANULARITY, random(vUv)) * uStrength * 0.1; // Solves gradient color banding by dithering.
      gl_FragColor = vec4(colorMix , 1.0);
   }
`;

interface ILinearGradient {
   strength?: number;
   fromColor: IColor;
   toColor: IColor;
   size?: Vector2;
}

const LinearGradient = ({ fromColor, toColor, strength = 1, size = new Vector2(8, 8) }: ILinearGradient) => {
   return (
      <mesh>
         <planeGeometry args={[size.x, size.y]} />
         <shaderMaterial
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={{
               uBottomColor: { value: new Color(colorConfig[toColor] || toColor) },
               uTopColor: { value: new Color(colorConfig[fromColor] || fromColor) },
               uStrength: { value: strength },
            }}
         />
      </mesh>
   );
};

export { LinearGradient };
