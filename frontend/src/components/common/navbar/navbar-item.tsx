import styled from 'styled-components';

const NavItemStyled = styled.li`
   font-size: 18px;
   cursor: pointer;
`;

interface INavbarItem {
   onClick?: () => void;
   variant?: NavbarItemVariant;
   link?: string;
   title: string;
}

enum NavbarItemVariant {
   Link = 'Link',
   Scroll = 'Scroll',
}

const NavbarItem = ({ title, link, onClick, variant = NavbarItemVariant.Scroll }: INavbarItem) => {
   return (
      <NavItemStyled>
         {variant === NavbarItemVariant.Link ? (
            <a href={link} target='_blank' rel='noreferrer'>
               {title}
            </a>
         ) : (
            <span onClick={() => onClick?.()}>{title}</span>
         )}
      </NavItemStyled>
   );
};

export { NavbarItem, NavbarItemVariant };
export type { INavbarItem };
