import { useMemo } from 'react';
import styled from 'styled-components';
import { useAppStore } from 'store';
import { Link } from 'components/common/Link';
import { Logo } from 'components/common/Logo';
import { Navbar, NavbarItemProps } from 'components/common/Navbar';
import { NavbarItemVariants } from 'components/common/Navbar/NavbarItem';
import { Section } from 'components/common/Section';
import { ScrollToSection } from 'utils/scrollToSectionUtils';
import { styles } from 'utils/styleUtils';

const FooterStyled = styled.footer`
    filter: drop-shadow(0px -3px 5px rgba(0, 0, 0, 0.3));
    background-color: ${styles.color.BLUE_900};
    ${styles.flex.center};
    position: absolute;
    height: 250px;
    width: 100%;
    bottom: 0;
`;

const LogoFooterStyled = styled(Logo)`
    margin-bottom: 14px;
`;

const NavbarFooterStyled = styled(Navbar)`
    margin-bottom: 14px;
`;

const CopyrightStyled = styled.p`
    font-size: 12px;
    padding: 4px 6px;
    ${styles.breakpoint.md} {
        font-size: 14px;
    }
`;

const PreviousWebsiteStyled = styled(Link)`
    font-size: 12px;
    ${styles.breakpoint.md} {
        font-size: 14px;
    }
`;

const SitemapStyled = styled(Link)`
    color: ${styles.color.GREY_100};
    font-size: 12px;
    ${styles.breakpoint.md} {
        font-size: 14px;
    }
`;

export const Footer = () => {
    const setScrollToSection = useAppStore(state => state.setScrollToSection);
    const navbarItems: NavbarItemProps[] = useMemo(
        () => [
            { title: 'Home', onClick: () => setScrollToSection(ScrollToSection.HERO) },
            { title: 'Github', link: 'https://example.com', variant: NavbarItemVariants.Link },
            { title: 'LinkedIn', link: 'https://example.com', variant: NavbarItemVariants.Link },
            { title: 'Facebook', link: 'https://example.com', variant: NavbarItemVariants.Link },
            { title: 'Upwork', link: 'https://example.com', variant: NavbarItemVariants.Link },
        ],
        [setScrollToSection],
    );

    return (
        <FooterStyled>
            <Section gap='6px'>
                <LogoFooterStyled />
                <NavbarFooterStyled items={navbarItems} />
                <CopyrightStyled>
                    © 2017 - {new Date().getFullYear()} Aviv Kandabi, All rights reserved.
                </CopyrightStyled>
                <PreviousWebsiteStyled
                    href='https://kandabi-2020.netlify.app/'
                    text='Previous Website'
                    showLine={false}
                />
                <SitemapStyled href='https://kandabi-2020.netlify.app/' text='Sitemap' showLine={false} />
            </Section>
        </FooterStyled>
    );
};
