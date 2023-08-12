import { ReactNode } from 'react';
import styled from 'styled-components';
import { Gutters } from 'components/common/gutters';
import { styles } from 'styles';

interface SectionStyledProps {
   gap?: string;
}

const SectionStyled = styled.section<SectionStyledProps>`
   gap: ${({ gap = '10px' }) => gap};
   flex-direction: column;
   z-index: 1;

   ${styles.flex.start};
   ${Gutters}
`;

interface Props {
   children: ReactNode;
   gap?: string;
}

const Section = ({ children, gap }: Props) => {
   return <SectionStyled gap={gap}>{children}</SectionStyled>;
};

export { Section };
