import styled from 'styled-components';

import { Link } from 'components/common/link';
import { Line } from 'components/common/line';

export enum NavbarItemVariants {
   Link = 'Link',
   Scroll = 'Scroll',
}

const NavbarItemStyled = styled.li`
   position: relative;
   font-size: 18px;
   cursor: pointer;
`;

export interface NavbarItemProps {
   lineStyles?: { bottom: string };
   variant?: NavbarItemVariants;
   onClick?: () => void;
   title: string;
   link?: string;
}

export const NavbarItem = ({
   title,
   link,
   onClick,
   lineStyles,
   variant = NavbarItemVariants.Scroll,
}: NavbarItemProps) => {
   return (
      <NavbarItemStyled>
         {variant === NavbarItemVariants.Link ? (
            <Link styles={{ lineBottom: lineStyles?.bottom }} text={title} href={link!} />
         ) : (
            <Line styles={{ bottom: lineStyles?.bottom }}>
               <span onClick={onClick}>{title}</span>
            </Line>
         )}
      </NavbarItemStyled>
   );
};
