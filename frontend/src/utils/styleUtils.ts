import { Breakpoint, breakpointConfig } from 'utils/breakpointUtils';
import { Color, HexColor, colorConfig } from 'utils/colorUtils';

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

type StylesConfig = {
    breakpoint: Record<Breakpoint, string>;
    color: Record<Color, HexColor>;
    font: {
        catamaran: FontProps;
        rubik: FontProps;
    };
    flex: {
        between: FlexProps;
        center: FlexProps;
        start: FlexProps;
    };
};

export const styles: StylesConfig = {
    breakpoint: breakpointConfig,
    color: colorConfig,
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
