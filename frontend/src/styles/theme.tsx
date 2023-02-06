import { ThemeProvider } from 'styled-components';
import { breakpointsConfig, Breakpoints } from './breakpoints';
import { colorConfig, Colors, HexColor } from './color';

type IFlex = {
   justifyContent: string;
   alignItems: string;
   display: string;
};

type IGuttersBreakpoints = Breakpoints.xs | Breakpoints.md | Breakpoints.lg;

interface IThemeConfig {
   breakpoints: { [key in Breakpoints]: string };
   color: { [key in Colors]: HexColor };
   gutters: { [key in IGuttersBreakpoints]: { width: string; padding: string } };
   flex: {
      center: IFlex;
      between: IFlex;
      evenly: IFlex;
   };
}

const themeConfig: IThemeConfig = {
   breakpoints: breakpointsConfig,
   color: colorConfig,

   gutters: {
      [Breakpoints.xs]: {
         width: 'calc(100% - 56px - var(--scrollbar-width))',
         padding: '0 28px',
      },
      [Breakpoints.md]: {
         width: 'calc(100% - 15vw - var(--scrollbar-width))',
         padding: '0 7.5vw',
      },
      [Breakpoints.lg]: {
         width: 'calc(100% - 20vw - var(--scrollbar-width))',
         padding: '0 10vw',
      },
   },

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

type IAppTheme = typeof themeConfig;

interface IAppThemeProvider {
   children: any;
}

const AppThemeProvider = ({ children }: IAppThemeProvider) => {
   return <ThemeProvider theme={themeConfig}>{children}</ThemeProvider>;
};

export { AppThemeProvider, themeConfig };
export type { IAppTheme };
