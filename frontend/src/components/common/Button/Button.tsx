import styled from 'styled-components';
import { Text } from 'components/common/Text';
import { Color, ColorType, getColor } from 'utils/colorUtils';

const ButtonTextStyled = styled(Text)`
    position: relative;
    z-index: 1;
`;

const ButtonBackgroundStyled = styled.div<{ backgroundColor?: ColorType }>`
    background-color: ${({ backgroundColor = Color.YELLOW_100 }) => getColor(backgroundColor)};
    transition:
        width 0.35s ease-out,
        opacity 0.25s ease-out;
    transform: translate(-50%, -50%);
    border-radius: 25px;
    position: absolute;
    height: 105%;
    opacity: 0;
    width: 0;
    left: 50%;
    top: 50%;
`;

type ButtonStyledProps = {
    $_borderColor?: ColorType;
    $_isDisabled?: boolean;
    $_padding?: string;
    $_height?: string;
    $_margin?: string;
};

const ButtonStyled = styled.button<ButtonStyledProps>`
    border: 2px solid ${({ $_borderColor = Color.YELLOW_100 }) => getColor($_borderColor)};
    padding: ${({ $_padding = '0 32px' }) => $_padding};
    height: ${({ $_height = '40px' }) => $_height};
    transition: transform 0.2s ease-out;
    margin: ${({ $_margin }) => $_margin};
    pointer-events: ${({ $_isDisabled }) => $_isDisabled && 'none'};
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

type Props = {
    text: string;
    onClick?: () => void;
    isSelected?: boolean;
    isDisabled?: boolean;
    className?: string;
    fontSize?: number;
    padding?: string;
    height?: string;
    margin?: string;
    color?: ColorType;
};

export const Button = ({
    text,
    onClick,
    isSelected,
    isDisabled,
    className,
    fontSize = 18,
    padding,
    height,
    margin,
    color,
}: Props) => {
    return (
        <ButtonStyled
            data-active={isSelected && !isDisabled}
            $_borderColor={color}
            $_padding={padding}
            $_margin={margin}
            $_height={height}
            $_isDisabled={isDisabled}
            className={className}
            onClick={onClick}
        >
            <ButtonTextStyled fontSize={fontSize}>{text}</ButtonTextStyled>
            <ButtonBackgroundStyled backgroundColor={color} />
        </ButtonStyled>
    );
};
