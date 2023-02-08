import styled, { css } from 'styled-components';

import { Gutters } from 'components/common/gutters';
import { Navbar } from 'components/common/navbar';
import { INavItem } from 'components/common/navbar';
import { useMemo } from 'react';
import { useStore } from 'store';
import { NavItemVariant } from 'components/common/navbar/nav-item';
import { useIsMobile } from 'hooks/useIsMobile';
import { Logo } from 'components/common/logo';

interface IHeaderStyled {
   currentScrollPosition: number;
   background?: string;
   progress?: boolean;
   shadow?: boolean;
   $opacity?: number;
   top?: string;
}

const HeaderStyled = styled.header<IHeaderStyled>`
   filter: ${({ shadow = false }) => shadow && 'drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.2))'};
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
            border-bottom: 2px solid ${({ theme: { color } }) => color.white_1};
            width: ${currentScrollPosition * 100}%;
            transition: width 0.4s ease-out;
            border-radius: 1px;
            position: absolute;
            content: ' ';
            bottom: 0;
            left: 0;
         }
      `};
`;

enum HeaderVariant {
   FIXED = 'FIXED',
   STICKY = 'STICKY',
}

interface IHeaderVariant {
   background?: string;
   progress?: boolean;
   opacity?: number;
   shadow?: boolean;
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
         background: 'linear-gradient(346deg,#6a9ed1 10%,#4279c8 65%)',
         progress: true,
         shadow: true,
         opacity: 1,
         top: '0',
      },
      hidden: {
         background: 'linear-gradient(346deg,#6a9ed1 10%,#4279c8 65%)',
         progress: true,
         shadow: true,
         opacity: 0,
         top: '-60px',
      },
   },
};

interface IHeader {
   headerVariant: HeaderVariant;
}

const Header = ({ headerVariant = HeaderVariant.FIXED }: IHeader) => {
   const { isMobile } = useIsMobile();
   const { currentScrollPosition, setScrollToPagePosition } = useStore((state) => ({
      currentScrollPosition: state.currentScrollPosition,
      setScrollToPagePosition: state.setScrollToPagePosition,
   }));

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
         shadow={styles?.shadow}
         top={styles?.top}
      >
         <Logo />
         {!isMobile ? <Navbar navItems={navItems} /> : null}
      </HeaderStyled>
   );
};

export { Header, HeaderVariant };
