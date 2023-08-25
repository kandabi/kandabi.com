import { MapConfig } from './types';
import { Breakpoint, breakpointConfig } from 'utils/breakpoints';
import { Color, HexColor, colorConfig } from 'utils/colors';

type FlexProps = {
    justifyContent: string;
    alignItems: string;
    display: string;
};

type FontProps = {
    fontFamily: string;
    fontWeight: string;
    fontStyle: string;
};

type GuttersBreakpoint = Breakpoint.xs | Breakpoint.md | Breakpoint.lg;

interface StylesConfig {
    breakpoint: MapConfig<Breakpoint, string>;
    color: MapConfig<Color, HexColor>;
    gutters: MapConfig<GuttersBreakpoint, { width: string; padding: string }>;
    font: {
        catamaran: FontProps;
        rubik: FontProps;
    };
    flex: {
        between: FlexProps;
        center: FlexProps;
        start: FlexProps;
    };
}

export const styles: StylesConfig = {
    breakpoint: breakpointConfig,
    color: colorConfig,

    gutters: {
        [Breakpoint.xs]: {
            width: 'calc(100% - 56px)',
            padding: '0 28px',
        },
        [Breakpoint.md]: {
            width: 'calc(100% - 15vw - var(--scrollbar-width))',
            padding: '0 7.5vw',
        },
        [Breakpoint.lg]: {
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
