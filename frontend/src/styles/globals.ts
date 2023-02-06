import * as styled from 'styled-components';

const GlobalStyles = styled.createGlobalStyle`
   html,
   body {
      font-family: 'Roboto', Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-style: 'normal';
      color: ${({ theme: { color } }) => color.white_1};
      font-weight: 400;
      line-height: 1.2;
      font-size: 14px;
      padding: 0;
      margin: 0;
   }

   header,
   footer,
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

   :root {
      --scrollbar-width: 12px;
   }

   * {
      scrollbar-color: ${({ theme: { color } }) => `${color.white_2} ${color.blue_2}`};
      scrollbar-width: auto;
   }

   *::-webkit-scrollbar {
      width: var(--scrollbar-width);
   }

   *::-webkit-scrollbar-track {
      background: ${({ theme: { color } }) => color.blue_4};
   }

   *::-webkit-scrollbar-thumb {
      background-color: ${({ theme: { color } }) => color.white_2};
      border: 2px solid ${({ theme: { color } }) => color.blue_4};
      border-radius: 10px;
   }
`;

export { GlobalStyles };
