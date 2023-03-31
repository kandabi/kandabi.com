import styled from 'styled-components';
import { CoolText } from 'components/common/cool-text';
import { IColor } from 'types/color';
import { styles } from 'styles';

const ButtonTextStyled = styled(CoolText)`
   position: relative;
   z-index: 1;
`;

interface IButtonBackgroundStyled {
   backgroundColor?: IColor;
}

const ButtonBackgroundStyled = styled.div<IButtonBackgroundStyled>`
   background-color: ${({ backgroundColor = 'yellow_100' }) => styles.color[backgroundColor] || backgroundColor};
   transition: width 0.35s ease-out, opacity 0.25s ease-out;
   transform: translate(-50%, -50%);
   border-radius: 25px;
   position: absolute;
   height: 105%;
   opacity: 0;
   width: 0;
   left: 50%;
   top: 50%;
`;

interface IButtonStyled {
   borderColor?: IColor;
   isDisabled?: boolean;
   $_padding?: string;
   $_height?: string;
   $_margin?: string;
}

const ButtonStyled = styled.button<IButtonStyled>`
   border: 2px solid ${({ borderColor = 'yellow_100' }) => styles.color[borderColor] || borderColor};
   padding: ${({ $_padding = '0 32px' }) => $_padding};
   height: ${({ $_height = '40px' }) => $_height};
   transition: transform 0.2s ease-out;
   margin: ${({ $_margin }) => $_margin};
   pointer-events: ${({ isDisabled }) => isDisabled && 'none'};

   &[data-active='true'],
   &:hover {
      ${ButtonTextStyled} {
         font-weight: 600;
         color: black;
      }

      ${ButtonBackgroundStyled} {
         width: 105%;
         opacity: 1;
      }
   }

   &[data-active='true'] {
      transform: scale(0.9);

      ${ButtonBackgroundStyled} {
         opacity: 0.8;
      }
   }
`;

interface IButton {
   onClick?: () => void;
   isSelected?: boolean;
   isDisabled?: boolean;
   className?: string;
   text: string;
   styles?: {
      fontSize?: number;
      padding?: string;
      height?: string;
      margin?: string;
      color?: IColor;
   };
}

const Button = ({ onClick, isSelected, isDisabled, className, text, styles }: IButton) => {
   return (
      <ButtonStyled
         data-active={isSelected && !isDisabled}
         borderColor={styles?.color}
         $_padding={styles?.padding}
         $_margin={styles?.margin}
         $_height={styles?.height}
         isDisabled={isDisabled}
         className={className}
         onClick={onClick}
      >
         <ButtonTextStyled text={text} styles={{ fontSize: styles?.fontSize ?? 18 }} />
         <ButtonBackgroundStyled backgroundColor={styles?.color} />
      </ButtonStyled>
   );
};

export { Button };
