import styled from 'styled-components';
import { theme } from 'styles';

interface ICoolTextStyled {
   $_fontSize?: number;
   margin?: string;
}

const CoolTextStyled = styled.span<ICoolTextStyled>`
   font-size: ${({ $_fontSize = 18 }) => `${$_fontSize}px`};
   color: ${theme.color.white_100};
   letter-spacing: 0.15em;
   ${theme.font.rubik};
`;

interface ICoolText {
   className?: string;
   text: string;
   styles?: {
      fontSize?: number;
   };
}

const CoolText = ({ text, className, styles }: ICoolText) => {
   return (
      <CoolTextStyled className={className} $_fontSize={styles?.fontSize}>
         {text}
      </CoolTextStyled>
   );
};

export { CoolText };
