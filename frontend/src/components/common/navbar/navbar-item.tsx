import styled from 'styled-components';
import { Link } from '../link';

const NavbarItemStyled = styled.li`
   font-size: 18px;
   cursor: pointer;
`;

enum NavbarItemVariant {
   Link = 'Link',
   Scroll = 'Scroll',
}

interface INavbarItem {
   onClick?: () => void;
   variant?: NavbarItemVariant;
   link?: string;
   title: string;
}

const NavbarItem = ({ title, link, onClick, variant = NavbarItemVariant.Scroll }: INavbarItem) => {
   return (
      <NavbarItemStyled>
         {variant === NavbarItemVariant.Link ? (
            <Link text={title} href={link!} />
         ) : (
            <span onClick={() => onClick?.()}>{title}</span>
         )}
      </NavbarItemStyled>
   );
};

export { NavbarItem, NavbarItemVariant };
export type { INavbarItem };
