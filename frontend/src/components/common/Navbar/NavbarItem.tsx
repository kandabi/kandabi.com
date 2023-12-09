import styled from 'styled-components';
import { Line } from 'components/common/Line';
import { Link } from 'components/common/Link';

export enum NavbarItemVariants {
    LINK = 'LINK',
    SCROLL = 'SCROLL',
}

const NavbarItemStyled = styled.li`
    list-style-type: none;
    font-size: 18px;
    cursor: pointer;
`;

export type NavbarItemProps = {
    lineStyles?: { bottom: string };
    variant?: NavbarItemVariants;
    onClick?: () => void;
    title: string;
    link?: string;
};

export const NavbarItem = ({
    title,
    link,
    onClick,
    lineStyles,
    variant = NavbarItemVariants.SCROLL,
}: NavbarItemProps) => {
    return (
        <NavbarItemStyled>
            {variant === NavbarItemVariants.LINK ? (
                <Link styles={{ lineBottom: lineStyles?.bottom }} text={title} href={link!} />
            ) : (
                <Line styles={{ bottom: lineStyles?.bottom }}>
                    <span onClick={onClick}>{title}</span>
                </Line>
            )}
        </NavbarItemStyled>
    );
};
