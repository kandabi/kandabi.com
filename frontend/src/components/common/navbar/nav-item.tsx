import styled from 'styled-components';

const NavItemStyled = styled.li`
   font-size: 18px;
   cursor: pointer;
`;

interface INavItem {
   onClick?: () => void;
   variant?: NavItemVariant;
   link?: string;
   title: string;
}

enum NavItemVariant {
   Link = 'Link',
   Scroll = 'Scroll',
}

const NavItem = ({ title, link, onClick, variant = NavItemVariant.Scroll }: INavItem) => {
   return (
      <NavItemStyled>
         {variant === NavItemVariant.Link ? (
            <a href={link} target='_blank' rel='noreferrer'>
               {title}
            </a>
         ) : (
            <span onClick={() => onClick?.()}>{title}</span>
         )}
      </NavItemStyled>
   );
};

export { NavItem, NavItemVariant };
export type { INavItem };
