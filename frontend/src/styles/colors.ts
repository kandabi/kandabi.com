import { Colors, HexColor } from 'types/color';

const colorConfig: { [key in Colors]: HexColor } = {
   [Colors.white_100]: '#FFFFFF',
   [Colors.white_200]: '#F2F8FF',
   [Colors.white_300]: '#AEBCCC',
   [Colors.white_400]: '#6686A5',
   [Colors.black_100]: '#000000',
   [Colors.yellow_100]: '#FCE46A',
   [Colors.orange_100]: '#FA7828',
   [Colors.blue_100]: '#00B2FF',
   [Colors.blue_600]: '#0E1E35',
   [Colors.blue_700]: '#0A1120',
   [Colors.blue_800]: '#0F243D',
   [Colors.blue_900]: '#090E15',
   [Colors.blue_1000]: '#0B1327',
   [Colors.grey_100]: '#7B7B7B',
   [Colors.grey_200]: '#CCCCCC',
   [Colors.green_100]: '#9CFF6E',
   [Colors.green_200]: '#50D400',
   [Colors.pink_100]: '#ED7EFF',
   [Colors.red_100]: '#FF001F',
   [Colors.red_200]: '#E23C50',
};

export { colorConfig };
