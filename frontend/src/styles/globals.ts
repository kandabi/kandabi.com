import * as styled from 'styled-components';
import { colors } from './colors';

const GlobalStyles = styled.createGlobalStyle`
   html,
   body {
      font-family: 'Roboto', Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: ${colors.blue_5};
      font-style: 'normal';
      line-height: 1.2;
      font-weight: 400;
      font-size: 14px;
      padding: 0;
      margin: 0;
   }

   footer,
   header,
   ul,
   li,
   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
      padding: 0;
      margin: 0;
   }

   a {
      text-decoration: none;
      color: inherit;
      margin: 0;
   }

   ul,
   li {
      list-style-type: none;
   }

   button {
      background: none;
      border: none;
      padding: 0;
   }

   img {
      max-width: 100%;
      display: block;
      height: auto;
   }

   input,
   p {
      margin: 0;
   }

   a,
   button {
      cursor: pointer;
      display: block;
   }

   input,
   button {
      border: none;
   }

   @font-face {
      font-family: 'Inter';
      src: url('/fonts/Inter/Inter-Regular.ttf');
      font-style: normal;
      font-weight: 400;
      font-display: swap;
   }

   * {
      scrollbar-width: auto;
      scrollbar-color: ${colors.white_2} ${colors.blue_4};
   }

   *::-webkit-scrollbar {
      width: 12px;
   }

   *::-webkit-scrollbar-track {
      background: ${colors.blue_4};
   }

   *::-webkit-scrollbar-thumb {
      background-color: ${colors.white_2};
      border: 2px solid ${colors.blue_4};
      border-radius: 10px;
   }
`;

export { GlobalStyles };
