import styled from 'styled-components';

import { Link } from 'components/common/link';
import { Line } from 'components/common/line';

const NavbarItemStyled = styled.li`
   position: relative;
   font-size: 18px;
   cursor: pointer;
`;

enum NavbarItemVariant {
   Link = 'Link',
   Scroll = 'Scroll',
}

interface INavbarItem {
   lineStyles?: { bottom: string };
   variant?: NavbarItemVariant;
   onClick?: () => void;
   title: string;
   link?: string;
}

const NavbarItem = ({ title, link, onClick, lineStyles, variant = NavbarItemVariant.Scroll }: INavbarItem) => {
   return (
      <NavbarItemStyled>
         {variant === NavbarItemVariant.Link ? (
            <Link styles={{ lineBottom: lineStyles?.bottom }} text={title} href={link!} />
         ) : (
            <Line styles={{ bottom: lineStyles?.bottom }}>
               <span onClick={onClick}>{title}</span>
            </Line>
         )}
      </NavbarItemStyled>
   );
};

export { NavbarItem, NavbarItemVariant };
export type { INavbarItem };
