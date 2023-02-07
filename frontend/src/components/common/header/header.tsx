import styled, { css } from 'styled-components';

import logoFull from 'assets/logo-full.svg';
import { Gutters } from 'components/common/css/gutters';
import { Navbar } from 'components/common/navbar';
import { INavItem } from 'components/common/navbar';
import { useMemo } from 'react';
import { useStore } from 'store';
import { NavItemVariant } from 'components/common/navbar/nav-item';
import { useIsMobile } from 'hooks/useIsMobile';

interface IHeaderStyled {
   scrollPercent: number;
   background?: string;
   progress?: boolean;
   $opacity?: number;
   top?: string;
}

const HeaderStyled = styled.header<IHeaderStyled>`
   background: ${({ background = 'transparent' }) => background};
   transition: top 0.65s ease-out, opacity 0.5s ease-out;
   opacity: ${({ $opacity = 1 }) => $opacity};
   top: ${({ top = '0' }) => top};
   position: absolute;
   z-index: 100;
   height: 60px;

   ${({ theme: { flex } }) => flex.between};
   ${Gutters}

   ${({ scrollPercent, progress = false }) =>
      progress &&
      css`
         &::after {
            transition: width 0.4s ease-out;
            width: ${scrollPercent * 100}%;
            border-bottom: 2px solid #d3d3d3;
            border-radius: 1px;
            position: absolute;
            content: ' ';
            bottom: 0;
            left: 0;
         }
      `};
`;

const LogoStyled = styled.img`
   height: 26px;
`;

enum HeaderVariant {
   FIXED = 'FIXED',
   STICKY = 'STICKY',
}

interface IHeaderVariant {
   background?: string;
   progress?: boolean;
   opacity?: number;
   top?: string;
}

const headerConfig: { [key in HeaderVariant]: { visible: IHeaderVariant; hidden?: IHeaderVariant } } = {
   [HeaderVariant.FIXED]: {
      visible: {
         background: 'transparent',
         progress: false,
         opacity: 1,
         top: '5.5vh',
      },
   },
   [HeaderVariant.STICKY]: {
      visible: {
         background: 'linear-gradient(180.1deg, #212E52 0.09%, #344982 99.92%);',
         progress: true,
         opacity: 1,
         top: '0',
      },
      hidden: {
         background: 'linear-gradient(180.1deg, #212E52 0.09%, #344982 99.92%);',
         progress: true,
         opacity: 0,
         top: '-60px',
      },
   },
};

interface IHeader {
   headerVariant: HeaderVariant;
}

const Header = ({ headerVariant = HeaderVariant.FIXED }: IHeader) => {
   const [scrollPercent, setScrollToPercent] = useStore(({ mouseScroll, setScrollToPercent }) => [
      mouseScroll,
      setScrollToPercent,
   ]);
   const { isMobile } = useIsMobile();

   const config = headerConfig[headerVariant];
   const isActive = headerVariant === HeaderVariant.FIXED || scrollPercent > 0.15;
   const styles = isActive ? config.visible : config.hidden;

   const navItems: INavItem[] = useMemo(
      () => [
         { title: 'Home', onClick: () => setScrollToPercent(0) },
         { title: 'Projects', onClick: () => setScrollToPercent(0.35) },
         { title: 'About', onClick: () => setScrollToPercent(0.6) },
         { title: 'Contact', onClick: () => setScrollToPercent(0.9) },
         { title: 'Github', link: 'https://example.com', variant: NavItemVariant.Link },
      ],
      [setScrollToPercent]
   );

   return (
      <HeaderStyled
         scrollPercent={scrollPercent}
         background={styles?.background}
         progress={styles?.progress}
         $opacity={styles?.opacity}
         top={styles?.top}
      >
         <LogoStyled src={logoFull.src} />
         {!isMobile ? <Navbar navItems={navItems} /> : null}
      </HeaderStyled>
   );
};

export { Header, HeaderVariant };
