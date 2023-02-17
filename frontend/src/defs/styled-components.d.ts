import 'styled-components';
import { IAppTheme } from 'styles/theme';

declare module 'styled-components' {
   export interface DefaultTheme extends IAppTheme {}
}
