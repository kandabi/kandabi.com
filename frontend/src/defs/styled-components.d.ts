import 'styled-components';
import { IAppTheme } from 'components/styles/theme';

declare module 'styled-components' {
   export interface DefaultTheme extends IAppTheme {}
}
