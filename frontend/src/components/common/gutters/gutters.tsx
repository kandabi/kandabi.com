import { css, FlattenInterpolation, ThemeProps } from 'styled-components';
import { styles } from 'styles';

const Gutters: FlattenInterpolation<ThemeProps<any>> = css`
   ${styles.gutters.xs};

   ${styles.breakpoints.md} {
      ${styles.gutters.md};
   }

   ${styles.breakpoints.lg} {
      ${styles.gutters.lg};
   }
`;

export { Gutters };
