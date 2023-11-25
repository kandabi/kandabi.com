import { FlattenInterpolation, ThemeProps, css } from 'styled-components';
import { styles } from 'utils/styleUtils';

export const Gutters: FlattenInterpolation<ThemeProps<any>> = css`
    width: calc(100% - var(--scrollbar-width));
    padding: 0 28px;

    ${styles.breakpoint.md} {
        padding: 0 7.5vw;
    }
    ${styles.breakpoint.lg} {
        padding: 0 10vw;
    }
`;
