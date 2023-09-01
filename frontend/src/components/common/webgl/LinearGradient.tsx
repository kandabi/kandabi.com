import { useRef } from 'react';
import { useControls } from 'leva';
import { Color, ShaderMaterial, Vector2 } from 'three';
import { ColorType, colorConfig, getThreeColor } from 'utils/colorUtils';

const vertexShader = `
   varying vec2 vUv;

   void main() {
       gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
       vUv = uv;
   }
`;

const fragmentShader = `
   uniform vec3 uTopColor;
   uniform vec3 uBottomColor;
   uniform float uBaseStrength;
   uniform float uStrength;
   uniform float uLength;

   varying vec2 vUv;

   const highp float NOISE_GRANULARITY = 0.5/255.0;

   highp float random(highp vec2 coords) {
      return fract(sin(dot(coords.xy, vec2(12.9898,78.233))) * 43758.5453);
   }

   void main() {
      vec3 colorMix =  mix(uTopColor, uBottomColor, 1.0 - vUv.y * uLength ) * uStrength + uBaseStrength;
      colorMix += mix(-NOISE_GRANULARITY, NOISE_GRANULARITY, random(vUv)) * uStrength * 0.1; // Solves gradient color banding by dithering.
      gl_FragColor = vec4(colorMix, 1.0);
   }
`;

interface ILinearGradient {
    baseStrength: number;
    strength?: number;
    length?: number;
    topColor: ColorType;
    bottomColor: ColorType;
    size?: Vector2;
}

export const LinearGradient = ({
    topColor,
    bottomColor,
    baseStrength = 0.06,
    strength = 1,
    length = 1,
    size = new Vector2(14, 8),
}: ILinearGradient) => {
    const shaderRef = useRef<ShaderMaterial>(null);

    useControls('Gradient', {
        uTopColor: {
            value: colorConfig[topColor] || topColor,
            onChange: value => {
                if (shaderRef?.current) {
                    shaderRef.current.uniforms.uTopColor.value = new Color(value);
                }
            },
        },
        uBottomColor: {
            value: colorConfig[bottomColor] || bottomColor,
            onChange: value => {
                if (shaderRef?.current) {
                    shaderRef.current.uniforms.uBottomColor.value = new Color(value);
                }
            },
        },
        length: {
            value: length,
            min: -3.0,
            max: 3,
            step: 0.01,
            onChange: value => {
                if (shaderRef?.current) {
                    shaderRef.current.uniforms.uLength.value = value;
                }
            },
        },
        strength: {
            value: strength,
            min: 0,
            max: 20,
            step: 0.01,
            onChange: value => {
                if (shaderRef?.current) {
                    shaderRef.current.uniforms.uStrength.value = value;
                }
            },
        },
        baseStrength: {
            value: baseStrength,
            min: 0,
            max: 1,
            step: 0.01,
            onChange: value => {
                if (shaderRef?.current) {
                    shaderRef.current.uniforms.uBaseStrength.value = value;
                }
            },
        },
    });

    return (
        <mesh>
            <planeGeometry args={[size.x, size.y]} />
            <shaderMaterial
                ref={shaderRef}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={{
                    uTopColor: { value: getThreeColor(topColor) },
                    uBottomColor: { value: getThreeColor(bottomColor) },
                    uBaseStrength: { value: baseStrength },
                    uStrength: { value: strength },
                    uLength: { value: 2.0 },
                }}
            />
        </mesh>
    );
};
