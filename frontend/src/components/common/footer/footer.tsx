import { useMemo } from 'react';
import styled from 'styled-components';

import { useStore } from 'store';
import { Section } from 'components/common/section';
import { Logo } from 'components/common/logo';
import { Navbar, INavbarItem } from 'components/common/navbar';
import { NavbarItemVariants } from 'components/common/navbar/navbar-item';
import { Link } from 'components/common/link';
import { theme } from 'styles';

const FooterStyled = styled.footer`
   filter: drop-shadow(0px -3px 5px rgba(0, 0, 0, 0.3));
   background-color: ${theme.color.blue_900};
   ${theme.flex.center};
   height: 250px;
   width: 100%;
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
   ${theme.breakpoints.md} {
      font-size: 14px;
   }
`;

const PreviousWebsiteStyled = styled(Link)`
   font-size: 12px;
   ${theme.breakpoints.md} {
      font-size: 14px;
   }
`;

const SitemapStyled = styled(Link)`
   color: ${theme.color.grey_100};
   font-size: 12px;
   ${theme.breakpoints.md} {
      font-size: 14px;
   }
`;

const Footer = () => {
   const setGoToScrollPosition = useStore((state) => state.setGoToScrollPosition);
   const navbarItems: INavbarItem[] = useMemo(
      () => [
         { title: 'Home', onClick: () => setGoToScrollPosition(0) },
         { title: 'Github', link: 'https://example.com', variant: NavbarItemVariants.Link },
         { title: 'LinkedIn', link: 'https://example.com', variant: NavbarItemVariants.Link },
         { title: 'Facebook', link: 'https://example.com', variant: NavbarItemVariants.Link },
         { title: 'Upwork', link: 'https://example.com', variant: NavbarItemVariants.Link },
      ],
      [setGoToScrollPosition]
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

export { Footer };
