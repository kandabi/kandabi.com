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
   onClick?: () => void;
   className?: string;
   text: string;
   styles?: {
      fontSize?: number;
      margin?: string;
   };
}

const Button = ({ onClick, className, text, styles }: IButton) => {
   return (
      <ButtonStyled onClick={onClick} className={className} margin={styles?.margin}>
         <CoolText text={text} styles={{ fontSize: styles?.fontSize ?? 18 }} />
      </ButtonStyled>
   );
};

export { Button };
