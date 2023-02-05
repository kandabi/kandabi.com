import { ThemeProvider } from 'styled-components';

import { colors } from './colors';

const themeConfig = {
   color: colors,

   flex: {
      center: {
         justifyContent: 'center',
         alignItems: 'center',
         display: 'flex',
      },
      between: {
         justifyContent: 'space-between',
         alignItems: 'center',
         display: 'flex',
      },
      evenly: {
         justifyContent: 'space-evenly',
         alignItems: 'center',
         display: 'flex',
      },
   },
};

interface ITheme {
   children: any;
}

const AppThemeProvider = ({ children }: ITheme) => {
   return <ThemeProvider theme={themeConfig}>{children}</ThemeProvider>;
};

export { AppThemeProvider, themeConfig };
