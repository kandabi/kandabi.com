import styled from 'styled-components';

import { NavbarItem, INavbarItem } from './navbar-item';

const NavbarItemsStyled = styled.ul`
   pointer-events: initial;
   flex-wrap: wrap;
   display: flex;
   gap: 5px 50px;
`;

interface INavbar {
   lineStyles?: { bottom: string };
   className?: string;
   items: INavbarItem[];
}

const Navbar = ({ className, lineStyles, items }: INavbar) => {
   return (
      <nav className={className}>
         <NavbarItemsStyled>
            {items.map((item, index) => (
               <NavbarItem key={index} lineStyles={lineStyles} {...item} />
            ))}
         </NavbarItemsStyled>
      </nav>
   );
};

export { Navbar };
