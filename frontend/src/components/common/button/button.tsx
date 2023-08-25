import styled from 'styled-components';
import { styles } from 'styles';
import { CoolText } from 'components/common/CoolText';
import { ColorType } from 'utils/color';

const ButtonTextStyled = styled(CoolText)`
    position: relative;
    z-index: 1;
`;

interface ButtonBackgroundStyledProps {
    backgroundColor?: ColorType;
}

const ButtonBackgroundStyled = styled.div<ButtonBackgroundStyledProps>`
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

interface ButtonStyledProps {
    borderColor?: ColorType;
    isDisabled?: boolean;
    $_padding?: string;
    $_height?: string;
    $_margin?: string;
}

const ButtonStyled = styled.button<ButtonStyledProps>`
    border: 2px solid ${({ borderColor = 'yellow_100' }) => styles.color[borderColor] || borderColor};
    padding: ${({ $_padding = '0 32px' }) => $_padding};
    height: ${({ $_height = '40px' }) => $_height};
    transition: transform 0.2s ease-out;
    margin: ${({ $_margin }) => $_margin};
    pointer-events: ${({ isDisabled }) => isDisabled && 'none'};
    border-radius: 40px;
    position: relative;
    background: none;
    cursor: pointer;

    &[data-active='true'],
    &:hover {
        ${ButtonTextStyled} {
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

interface Props {
    text: string;
    onClick?: () => void;
    isSelected?: boolean;
    isDisabled?: boolean;
    className?: string;
    styles?: {
        fontSize?: number;
        padding?: string;
        height?: string;
        margin?: string;
        color?: ColorType;
    };
}

export const Button = ({ text, onClick, isSelected, isDisabled, className, styles }: Props) => {
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
