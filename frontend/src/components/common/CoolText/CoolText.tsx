import styled from 'styled-components';
import { styles } from 'utils/styleUtils';

interface CoolTextStyledProps {
    $_fontSize?: number;
    margin?: string;
}

const CoolTextStyled = styled.span<CoolTextStyledProps>`
    font-size: ${({ $_fontSize = 18 }) => `${$_fontSize}px`};
    color: ${styles.color.WHITE_100};
    letter-spacing: 0.15em;
    ${styles.font.rubik};
`;

interface Props {
    className?: string;
    text: string;
    styles?: {
        fontSize?: number;
    };
}

export const CoolText = ({ text, className, styles }: Props) => {
    return (
        <CoolTextStyled className={className} $_fontSize={styles?.fontSize}>
            {text}
        </CoolTextStyled>
    );
};
