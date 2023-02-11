import { useMemo } from 'react';
import styled from 'styled-components';

import { useStore } from 'store';
import { Section } from 'components/common/section';
import { Logo } from 'components/common/logo';
import { Navbar, INavbarItem } from 'components/common/navbar';
import { NavbarItemVariant } from '../navbar/navbar-item';
import { Link } from '../link';

const FooterStyled = styled.footer`
   background-color: ${({ theme: { color } }) => color.blue_5};
   filter: drop-shadow(0px -3px 5px rgba(0, 0, 0, 0.3));
   ${({ theme: { flex } }) => flex.center};
   height: 250px;
   width: 100%;
`;

const CopyrightStyled = styled.p`
   font-size: 12px;
   ${({ theme: { breakpoints } }) => breakpoints.md} {
      font-size: 14px;
   }
`;

const PreviousWebsiteStyled = styled(Link)`
   font-size: 12px;
   ${({ theme: { breakpoints } }) => breakpoints.md} {
      font-size: 14px;
   }
`;

const SitemapStyled = styled(Link)`
   color: ${({ theme: { color } }) => color.grey_1};
   font-size: 12px;
   ${({ theme: { breakpoints } }) => breakpoints.md} {
      font-size: 14px;
   }
`;

const Footer = () => {
   const setScrollToPagePosition = useStore((state) => state.setScrollToPagePosition);

   const navbarItems: INavbarItem[] = useMemo(
      () => [
         { title: 'Home', onClick: () => setScrollToPagePosition(0) },
         { title: 'Github', link: 'https://example.com', variant: NavbarItemVariant.Link },
         { title: 'LinkedIn', link: 'https://example.com', variant: NavbarItemVariant.Link },
         { title: 'Facebook', link: 'https://example.com', variant: NavbarItemVariant.Link },
         { title: 'Upwork', link: 'https://example.com', variant: NavbarItemVariant.Link },
      ],
      [setScrollToPagePosition]
   );

   return (
      <FooterStyled>
         <Section gap='12px'>
            <Logo />
            <Navbar items={navbarItems} />
            <CopyrightStyled>© 2017 - {new Date().getFullYear()} Aviv Kandabi, All rights reserved.</CopyrightStyled>
            <PreviousWebsiteStyled href='https://kandabi-2020.netlify.app/' text='Previous Website' />
            <SitemapStyled href='https://kandabi-2020.netlify.app/' text='Sitemap' />
         </Section>
      </FooterStyled>
   );
};

export { Footer };
