import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { styles } from 'utils/styleUtils';

const openState = css<{ $_width?: string }>`
    width: ${({ $_width = '100%' }) => $_width};
    opacity: 1;
`;

type StyledLineProps = {
    $_padding?: string;
    $_bottom?: string;
    $_width?: string;
    $_isOpen?: boolean;
};

const LineStyled = styled.div<StyledLineProps>`
    ${styles.flex.center}
    padding: ${({ $_padding }) => $_padding};
    position: relative;
    width: 100%;
    gap: 3px;

    &::after {
        border-bottom: 2px solid ${styles.color.WHITE_100};
        transition:
            width 0.4s,
            opacity 0.5s ease-out;
        bottom: ${({ $_bottom = '-8px' }) => $_bottom};
        transform: translate(-50%, 0);
        position: absolute;
        content: ' ';
        opacity: 0;
        width: 0;
        left: 50%;
        ${({ $_isOpen }) => $_isOpen && openState};
    }

    &:hover::after {
        ${openState}
    }
`;

type Props = {
    children: ReactNode;
    isOpen?: boolean;
    className?: string;
    styles?: {
        padding?: string;
        bottom?: string;
        width?: string;
    };
};

export const Line = ({ children, isOpen, className, styles }: Props) => {
    return (
        <LineStyled
            className={className}
            $_isOpen={isOpen}
            $_width={styles?.width}
            $_bottom={styles?.bottom}
            $_padding={styles?.padding}
        >
            {children}
        </LineStyled>
    );
};
