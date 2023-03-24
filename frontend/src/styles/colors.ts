type HexColor = `#${string}`;

enum Colors {
   white_100 = 'white_100',
   white_200 = 'white_200',
   white_300 = 'white_300',
   white_400 = 'white_400',
   black_100 = 'black_100',
   yellow_100 = 'yellow_100',
   orange_100 = 'orange_100',
   blue_100 = 'blue_100',
   blue_700 = 'blue_700',
   blue_800 = 'blue_800',
   blue_900 = 'blue_900',
   grey_100 = 'grey_100',
   grey_200 = 'grey_200',
   green_100 = 'green_100',
   green_200 = 'green_200',
   pink_100 = 'pink_100',
   red_100 = 'red_100',
   red_200 = 'red_200',
}

type IColor = keyof typeof Colors | HexColor;

const colorConfig: { [key in Colors]: HexColor } = {
   [Colors.white_100]: '#FFFFFF',
   [Colors.white_200]: '#f2f8ff',
   [Colors.white_300]: '#AEBCCC',
   [Colors.white_400]: '#6686A5',
   [Colors.black_100]: '#000000',
   [Colors.yellow_100]: '#FCE46A',
   [Colors.orange_100]: '#FA7828',
   [Colors.blue_100]: '#00B2FF',
   [Colors.blue_700]: '#0a1120',
   [Colors.blue_800]: '#0f243d',
   [Colors.blue_900]: '#090E15',
   [Colors.grey_100]: '#7B7B7B',
   [Colors.grey_200]: '#cccccc',
   [Colors.green_100]: '#9CFF6E',
   [Colors.green_200]: '#50D400',
   [Colors.pink_100]: '#ED7EFF',
   [Colors.red_100]: '#FF001F',
   [Colors.red_200]: '#E23C50',
};

export { Colors, colorConfig };
export type { HexColor, IColor };
