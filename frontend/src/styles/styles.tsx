import { colorConfig } from './colors';
import { Colors, HexColor } from 'types/color';
import { breakpointConfig, Breakpoints } from './breakpoints';

type IFlex = {
   justifyContent: string;
   alignItems: string;
   display: string;
};

type IFont = {
   fontFamily: string;
   fontWeight: string;
   fontStyle: string;
};

type IGuttersBreakpoints = Breakpoints.xs | Breakpoints.md | Breakpoints.lg;

interface IStyles {
   breakpoints: { [key in Breakpoints]: string };
   color: { [key in Colors]: HexColor };
   gutters: { [key in IGuttersBreakpoints]: { width: string; padding: string } };
   font: {
      catamaran: IFont;
      rubik: IFont;
   };
   flex: {
      between: IFlex;
      center: IFlex;
      start: IFlex;
   };
}

const styles: IStyles = {
   breakpoints: breakpointConfig,
   color: colorConfig,

   gutters: {
      [Breakpoints.xs]: {
         width: 'calc(100% - 56px)',
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

   font: {
      catamaran: {
         fontFamily: '"Catamaran", sans-serif',
         fontWeight: '800',
         fontStyle: 'normal',
      },
      rubik: {
         fontFamily: '"Rubik", sans-serif',
         fontWeight: '300',
         fontStyle: 'normal',
      },
   },

   flex: {
      between: {
         justifyContent: 'space-between',
         alignItems: 'center',
         display: 'flex',
      },
      center: {
         justifyContent: 'center',
         alignItems: 'center',
         display: 'flex',
      },
      start: {
         justifyContent: 'center',
         alignItems: 'start',
         display: 'flex',
      },
   },
};

export { styles };
export type { IStyles };
