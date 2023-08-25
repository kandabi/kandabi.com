import { Color as ThreeColor } from 'three';

export enum Color {
    white_100 = 'white_100',
    white_200 = 'white_200',
    white_300 = 'white_300',
    white_400 = 'white_400',
    black_100 = 'black_100',
    yellow_100 = 'yellow_100',
    orange_100 = 'orange_100',
    blue_100 = 'blue_100',
    blue_500 = 'blue_500',
    blue_600 = 'blue_600',
    blue_700 = 'blue_700',
    blue_800 = 'blue_800',
    blue_900 = 'blue_900',
    blue_1000 = 'blue_1000',
    grey_100 = 'grey_100',
    grey_200 = 'grey_200',
    green_100 = 'green_100',
    green_200 = 'green_200',
    pink_100 = 'pink_100',
    red_100 = 'red_100',
    red_200 = 'red_200',
}

export type HexColor = `#${string}`;
export type ColorType = keyof typeof Color | HexColor;

export const colorConfig: { [key in Color]: HexColor } = {
    [Color.white_100]: '#FFFFFF',
    [Color.white_200]: '#F2F8FF',
    [Color.white_300]: '#AEBCCC',
    [Color.white_400]: '#6686A5',
    [Color.black_100]: '#000000',
    [Color.yellow_100]: '#FCE46A',
    [Color.orange_100]: '#FA7828',
    [Color.blue_100]: '#00B2FF',
    [Color.blue_500]: '#1a3d70',
    [Color.blue_600]: '#0E1E35',
    [Color.blue_700]: '#0A1120',
    [Color.blue_800]: '#0F243D',
    [Color.blue_900]: '#090E15',
    [Color.blue_1000]: '#0B1327',
    [Color.grey_100]: '#7B7B7B',
    [Color.grey_200]: '#CCCCCC',
    [Color.green_100]: '#9CFF6E',
    [Color.green_200]: '#50D400',
    [Color.pink_100]: '#ED7EFF',
    [Color.red_100]: '#FF001F',
    [Color.red_200]: '#E23C50',
};

export const getThreeColor = (color: ColorType) => {
    return new ThreeColor(colorConfig[color] || color);
};
