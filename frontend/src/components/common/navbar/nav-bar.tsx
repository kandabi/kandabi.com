import styled from 'styled-components';

import { INavItem, NavItem } from './nav-item';

const NavItemsStyled = styled.ul`
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
