import 'styled-components';
import { Theme } from './utills/themes';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}  // Расширяем стандартный интерфейс DefaultTheme
}