import styled from 'styled-components';

import { Link } from 'components/common/link';
import { Line } from 'components/common/line';

const NavbarItemStyled = styled.li`
   position: relative;
   font-size: 18px;
   cursor: pointer;
`;

enum NavbarItemVariants {
   Link = 'Link',
   Scroll = 'Scroll',
}

interface INavbarItem {
   lineStyles?: { bottom: string };
   variant?: NavbarItemVariants;
   onClick?: () => void;
   title: string;
   link?: string;
}

const NavbarItem = ({ title, link, onClick, lineStyles, variant = NavbarItemVariants.Scroll }: INavbarItem) => {
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

export { NavbarItem, NavbarItemVariants };
export type { INavbarItem };
