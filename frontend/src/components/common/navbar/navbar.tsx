import styled from 'styled-components';
import { NavbarItem, NavbarItemProps } from './navbar-item';

const NavbarItemsStyled = styled.ul`
    pointer-events: initial;
    flex-wrap: wrap;
    display: flex;
    gap: 5px 40px;
`;

interface Props {
    lineStyles?: { bottom: string };
    className?: string;
    items: NavbarItemProps[];
}

export const Navbar = ({ className, lineStyles, items }: Props) => {
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
