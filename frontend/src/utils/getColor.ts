import { Color } from 'three';
import { colorConfig } from 'styles';
import { ColorType } from 'types/color';

export const getColor = (color: ColorType) => {
   return new Color(colorConfig[color] || color);
};
