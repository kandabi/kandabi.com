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
