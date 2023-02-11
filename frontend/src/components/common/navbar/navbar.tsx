import styled from 'styled-components';

import { NavbarItem, INavbarItem } from './navbar-item';

const NavbarItemsStyled = styled.ul`
   pointer-events: initial;
   display: flex;
   gap: 50px;
`;

interface INavbar {
   items: INavbarItem[];
}

const Navbar = ({ items }: INavbar) => {
   return (
      <nav>
         <NavbarItemsStyled>
            {items.map((item, index) => (
               <NavbarItem key={index} {...item} />
            ))}
         </NavbarItemsStyled>
      </nav>
   );
};

export { Navbar };
