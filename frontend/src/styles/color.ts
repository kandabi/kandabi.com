type HexColor = `#${string}`;

enum Colors {
   white_1 = 'white_1',
   white_2 = 'white_2',
   white_3 = 'white_3',
   white_4 = 'white_4',
   black_1 = 'black_1',
   yellow_1 = 'yellow_1',
   blue_1 = 'blue_1',
   blue_2 = 'blue_2',
   blue_3 = 'blue_3',
   blue_4 = 'blue_4',
   blue_5 = 'blue_5',
   grey_1 = 'grey_1',
   grey_2 = 'grey_2',
}

const colors: { [key in Colors]: HexColor } = {
   [Colors.white_1]: '#FFFFFF',
   [Colors.white_2]: '#f2f8ff',
   [Colors.white_3]: '#AEBCCC',
   [Colors.white_4]: '#6686A5',
   [Colors.black_1]: '#000000',
   [Colors.yellow_1]: '#FCE46A',
   [Colors.blue_1]: '#4867B1',
   [Colors.blue_2]: '#344982',
   [Colors.blue_3]: '#212E52',
   [Colors.blue_4]: '#182339',
   [Colors.blue_5]: '#090E15',
   [Colors.grey_1]: '#7B7B7B',
   [Colors.grey_2]: '#cccccc',
};

export { colors, Colors };
export type { HexColor };
