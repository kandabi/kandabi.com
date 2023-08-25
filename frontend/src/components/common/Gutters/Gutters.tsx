import { FlattenInterpolation, ThemeProps, css } from 'styled-components';
import { styles } from 'utils/styles';

export const Gutters: FlattenInterpolation<ThemeProps<any>> = css`
    ${styles.gutters.xs};

    ${styles.breakpoint.md} {
        ${styles.gutters.md};
    }

    ${styles.breakpoint.lg} {
        ${styles.gutters.lg};
    }
`;
