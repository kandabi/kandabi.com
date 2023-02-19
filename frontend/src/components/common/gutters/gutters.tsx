import { css, FlattenInterpolation, ThemeProps } from 'styled-components';
import { theme } from 'styles';

const Gutters: FlattenInterpolation<ThemeProps<any>> = css`
   ${theme.gutters.xs};

   ${theme.breakpoints.md} {
      ${theme.gutters.md};
   }

   ${theme.breakpoints.lg} {
      ${theme.gutters.lg};
   }
`;

export { Gutters };
