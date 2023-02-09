import styled from 'styled-components';

import { NavbarItem, INavbarItem } from './navbar-item';

const NavItemsStyled = styled.ul`
   pointer-events: initial;
   display: flex;
   gap: 50px;
`;

interface INavbar {
   navItems: INavbarItem[];
}

const Navbar = ({ navItems }: INavbar) => {
   return (
      <nav>
         <NavItemsStyled>
            {navItems.map((item, index) => (
               <NavbarItem key={index} {...item} />
            ))}
         </NavItemsStyled>
      </nav>
   );
};

export { Navbar };
