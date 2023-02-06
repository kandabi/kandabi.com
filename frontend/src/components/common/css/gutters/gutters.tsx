import { css, FlattenInterpolation, ThemeProps } from 'styled-components';
import { IAppTheme } from 'styles/theme';

const Gutters: FlattenInterpolation<ThemeProps<IAppTheme>> = css`
   ${({ theme: { gutters } }) => gutters.xs};

   ${({ theme: { breakpoints } }) => breakpoints.md} {
      ${({ theme: { gutters } }) => gutters.md};
   }

   ${({ theme: { breakpoints } }) => breakpoints.lg} {
      ${({ theme: { gutters } }) => gutters.lg};
   }
`;

export { Gutters };
