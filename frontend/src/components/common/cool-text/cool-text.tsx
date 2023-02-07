import styled from 'styled-components';

interface ICoolTextStyled {
   $fontSize?: number;
   margin?: string;
}

const CoolTextStyled = styled.span<ICoolTextStyled>`
   ${({ theme: { font } }) => font.rubik};
   color: ${({ theme: { color } }) => color.white_1};
   font-size: ${({ $fontSize = 20 }) => `${$fontSize}px`};
   margin: ${({ margin }) => margin};
   letter-spacing: 0.15em;
`;

interface ICoolText {
   className?: string;
   text: string;
   styles?: {
      fontSize?: number;
      margin?: string;
   };
}

const CoolText = ({ text, className, styles }: ICoolText) => {
   return (
      <CoolTextStyled className={className} $fontSize={styles?.fontSize}>
         {text}
      </CoolTextStyled>
   );
};

export { CoolText };
