import { ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from 'styles';

interface ILineStyled {
   bottom?: string;
}

const LineStyled = styled.div<ILineStyled>`
   ${theme.flex.center}
   padding: 4px 6px;
   gap: 3px;

   &:hover::after {
      width: 95%;
      opacity: 1;
   }

   &::after {
      border-bottom: 2px solid ${theme.color.white_1};
      transition: width 0.4s, opacity 0.5s ease-out;
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

interface ILine {
   children: ReactNode;
   styles?: {
      bottom?: string;
   };
}

const Line = ({ children, styles }: ILine) => {
   return <LineStyled bottom={styles?.bottom}>{children}</LineStyled>;
};

export { Line };
