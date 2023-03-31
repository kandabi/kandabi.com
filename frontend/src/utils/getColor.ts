import { Color } from 'three';
import { colorConfig } from 'styles';
import { IColor } from 'types/color';

const getColor = (color: IColor) => {
   return new Color(colorConfig[color] || color);
};

export { getColor };
