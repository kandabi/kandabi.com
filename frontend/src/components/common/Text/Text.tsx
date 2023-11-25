import styled from 'styled-components';
import { ColorType } from 'utils/colorUtils';
import { styles } from 'utils/styleUtils';

type StyledTextProps = {
    $_letterSpacing?: number;
    $_fontWeight?: number;
    $_fontSize?: number;
    $_color?: ColorType;
};

const StyledText = styled.span<StyledTextProps>`
    font-size: ${({ $_fontSize = 18 }) => `${$_fontSize}px`};
    font-weight: ${({ $_fontWeight = 300 }) => `${$_fontWeight}px`};
    letter-spacing: ${({ $_letterSpacing = 0 }) => `${$_letterSpacing}em`};
    color: ${styles.color.WHITE_100};
    ${styles.font.rubik};
`;

type Props = {
    children: string;
    className?: string;
    as?: 'span' | 'p';
    color?: ColorType;
    fontSize?: number;
    fontWeight?: number;
    letterSpacing?: number;
};

export const Text = ({ children, className, color, fontSize, fontWeight, letterSpacing, as = 'span' }: Props) => {
    return (
        <StyledText
            className={className}
            $_letterSpacing={letterSpacing}
            $_fontWeight={fontWeight}
            $_fontSize={fontSize}
            $_color={color}
            as={as}
        >
            {children}
        </StyledText>
    );
};
