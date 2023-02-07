import { ReactNode } from 'react';
import styled from 'styled-components';
import { Gutters } from 'components/common/gutters';

interface ISectionStyled {
   gap?: string;
}

const SectionStyled = styled.section<ISectionStyled>`
   gap: ${({ gap = '10px' }) => gap};
   flex-direction: column;

   ${({ theme: { flex } }) => flex.start};
   ${Gutters}
`;

interface ISection {
   children: ReactNode;
   gap?: string;
}

const Section = ({ children, gap }: ISection) => {
   return <SectionStyled gap={gap}>{children}</SectionStyled>;
};

export { Section };
