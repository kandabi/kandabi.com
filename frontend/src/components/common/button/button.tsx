import styled from 'styled-components';
import { CoolText } from 'components/common/cool-text';

interface IButtonStyled {
   margin?: string;
}

const ButtonStyled = styled.button<IButtonStyled>`
   border: 2px solid ${({ theme: { color } }) => color.yellow_1};
   margin: ${({ margin }) => margin};
`;

interface IButton {
   className?: string;
   styles?: {
      fontSize?: number;
      margin?: string;
   };
   text: string;
}

const Button = ({ className, styles, text }: IButton) => {
   return (
      <ButtonStyled className={className} margin={styles?.margin}>
         <CoolText text={text} styles={{ fontSize: styles?.fontSize ?? 18 }} />
      </ButtonStyled>
   );
};

export { Button };
