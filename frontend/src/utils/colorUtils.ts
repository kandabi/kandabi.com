import { Color as ThreeColor } from 'three';

export enum Color {
    WHITE_100 = 'WHITE_100',
    WHITE_200 = 'WHITE_200',
    WHITE_300 = 'WHITE_300',
    WHITE_400 = 'WHITE_400',
    BLACK_100 = 'BLACK_100',
    YELLOW_100 = 'YELLOW_100',
    ORANGE_100 = 'ORANGE_100',
    BLUE_100 = 'BLUE_100',
    BLUE_500 = 'BLUE_500',
    BLUE_600 = 'BLUE_600',
    BLUE_700 = 'BLUE_700',
    BLUE_800 = 'BLUE_800',
    BLUE_900 = 'BLUE_900',
    BLUE_1000 = 'BLUE_1000',
    GREY_100 = 'GREY_100',
    GREY_200 = 'GREY_200',
    GREEN_100 = 'GREEN_100',
    GREEN_200 = 'GREEN_200',
    PINK_100 = 'PINK_100',
    RED_100 = 'RED_100',
    RED_200 = 'RED_200',
}

export type HexColor = `#${string}` | string;
export type ColorType = Color | HexColor;

export const colorConfig: Record<Color, HexColor> = {
    [Color.WHITE_100]: '#FFFFFF',
    [Color.WHITE_200]: '#F2F8FF',
    [Color.WHITE_300]: '#AEBCCC',
    [Color.WHITE_400]: '#6686A5',
    [Color.BLACK_100]: '#000000',
    [Color.YELLOW_100]: '#FCE46A',
    [Color.ORANGE_100]: '#FA7828',
    [Color.BLUE_100]: '#00B2FF',
    [Color.BLUE_500]: '#1a3d70',
    [Color.BLUE_600]: '#183865',
    [Color.BLUE_700]: '#0A1120',
    [Color.BLUE_800]: '#0F243D',
    [Color.BLUE_900]: '#090E15',
    [Color.BLUE_1000]: '#0B1327',
    [Color.GREY_100]: '#7B7B7B',
    [Color.GREY_200]: '#CCCCCC',
    [Color.GREEN_100]: '#9CFF6E',
    [Color.GREEN_200]: '#50D400',
    [Color.PINK_100]: '#ED7EFF',
    [Color.RED_100]: '#FF001F',
    [Color.RED_200]: '#E23C50',
};

export const getColor = (colorType?: ColorType): HexColor | undefined => {
    if (!colorType) return;

    return colorConfig?.[colorType as Color] || colorType;
};

export const getThreeColor = (colorType: ColorType): ThreeColor | undefined => {
    const hexColor = getColor(colorType);

    return hexColor ? new ThreeColor(hexColor) : undefined;
};
