import styled from 'styled-components';

import { INavItem, NavItem } from './nav-item';

const NavItemsStyled = styled.ul`
   pointer-events: initial;
   display: flex;
   gap: 50px;
`;

interface INavbar {
   navItems: INavItem[];
}

const Navbar = ({ navItems }: INavbar) => {
   return (
      <nav>
         <NavItemsStyled>
            {navItems.map((item, index) => (
               <NavItem key={index} {...item} />
            ))}
         </NavItemsStyled>
      </nav>
   );
};

export { Navbar };
