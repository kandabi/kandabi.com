import { css, FlattenInterpolation, ThemeProps } from 'styled-components';
import { styles } from 'styles';

const Gutters: FlattenInterpolation<ThemeProps<any>> = css`
   ${styles.gutters.xs};

   ${styles.breakpoint.md} {
      ${styles.gutters.md};
   }

   ${styles.breakpoint.lg} {
      ${styles.gutters.lg};
   }
`;

export { Gutters };
