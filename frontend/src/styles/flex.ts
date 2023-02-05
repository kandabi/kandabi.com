import { css } from 'styled-components';
import { breakpoints } from './breakpoints';

const padding = css`
   width: calc(100% - 56px - 12px);
   padding: 0 28px;

   ${breakpoints.md} {
      width: calc(100% - 380px - 12px);
      padding: 0 190px;
   }
`;

export { padding };
