import styled, { css } from 'styled-components';

import logoFull from 'assets/images/logo-full.svg';
import { Gutters } from 'components/common/gutters';
import { Navbar } from 'components/common/navbar';
import { INavItem } from 'components/common/navbar';
import { useMemo } from 'react';
import { useStore } from 'store';
import { NavItemVariant } from 'components/common/navbar/nav-item';
import { useIsMobile } from 'hooks/useIsMobile';

interface IHeaderStyled {
   currentScrollPosition: number;
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
   pointer-events: none;
   position: absolute;
   z-index: 100;
   height: 60px;

   ${({ theme: { flex } }) => flex.between};
   ${Gutters}

   ${({ currentScrollPosition, progress = false }) =>
      progress &&
      css`
         &::after {
            transition: width 0.4s ease-out;
            width: ${currentScrollPosition * 100}%;
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
   pointer-events: initial;
   cursor: pointer;
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
         top: '6.5vh',
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
   const { currentScrollPosition, setScrollToPagePosition } = useStore((state) => ({
      currentScrollPosition: state.currentScrollPosition,
      setScrollToPagePosition: state.setScrollToPagePosition,
   }));
   const { isMobile } = useIsMobile();

   const config = headerConfig[headerVariant];
   const isActive = headerVariant === HeaderVariant.FIXED || currentScrollPosition > 0.15;
   const styles = isActive ? config.visible : config.hidden;

   const navItems: INavItem[] = useMemo(
      () => [
         { title: 'Home', onClick: () => setScrollToPagePosition(0) },
         { title: 'Projects', onClick: () => setScrollToPagePosition(0.35) },
         { title: 'About', onClick: () => setScrollToPagePosition(0.6) },
         { title: 'Contact', onClick: () => setScrollToPagePosition(0.9) },
         { title: 'Github', link: 'https://example.com', variant: NavItemVariant.Link },
      ],
      [setScrollToPagePosition]
   );

   return (
      <HeaderStyled
         currentScrollPosition={currentScrollPosition}
         background={styles?.background}
         progress={styles?.progress}
         $opacity={styles?.opacity}
         top={styles?.top}
      >
         <LogoStyled src={logoFull.src} onClick={() => setScrollToPagePosition(0)} />
         {!isMobile ? <Navbar navItems={navItems} /> : null}
      </HeaderStyled>
   );
};

export { Header, HeaderVariant };
