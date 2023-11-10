import { ReactNode } from 'react';
import styled from 'styled-components';
import { styles } from 'utils/styleUtils';

const LineStyled = styled.div<{ bottom?: string }>`
    ${styles.flex.center}
    padding: 4px 6px;
    gap: 3px;

    &:hover::after {
        width: 95%;
        opacity: 1;
    }

    &::after {
        border-bottom: 2px solid ${styles.color.WHITE_100};
        transition:
            width 0.4s,
            opacity 0.5s ease-out;
        bottom: ${({ bottom = '-8px' }) => bottom};
        transform: translate(-50%, 0);
        border-radius: 8px;
        position: absolute;
        content: ' ';
        opacity: 0;
        width: 0;
        left: 50%;
    }
`;

type Props = {
    children: ReactNode;
    styles?: {
        bottom?: string;
    };
};

export const Line = ({ children, styles }: Props) => {
    return <LineStyled bottom={styles?.bottom}>{children}</LineStyled>;
};
