import { ReactNode } from 'react';
import styled from 'styled-components';
import { Gutters } from 'components/common/Gutters';
import { styles } from 'utils/styleUtils';

type SectionStyledProps = {
    $_margin?: string;
    gap?: string;
};

const SectionStyled = styled.section<SectionStyledProps>`
    margin: ${({ $_margin }) => $_margin};
    gap: ${({ gap = '10px' }) => gap};
    flex-direction: column;
    z-index: 1;

    ${styles.flex.start};
    ${Gutters}
`;

type Props = {
    children: ReactNode;
    margin?: string;
    gap?: string;
};

export const Section = ({ children, gap, margin }: Props) => {
    return (
        <SectionStyled gap={gap} $_margin={margin}>
            {children}
        </SectionStyled>
    );
};
