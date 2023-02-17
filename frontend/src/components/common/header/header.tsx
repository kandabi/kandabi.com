import styled, { css, FlattenInterpolation, ThemeProps } from 'styled-components';

import { Gutters } from 'components/common/gutters';
import { Navbar } from 'components/common/navbar';
import { INavbarItem } from 'components/common/navbar';
import { useMemo } from 'react';
import { useStore } from 'store';
import { NavbarItemVariant } from 'components/common/navbar/navbar-item';
import { useIsMobile } from 'hooks/useIsMobile';
import { Logo } from 'components/common/logo';

const headerStyles = css`
   /* background: linear-gradient(346deg, rgba(27, 43, 75, 0.65) 10%, rgba(26, 42, 73, 0.65) 65%); */
   background: linear-gradient(173deg, rgba(93, 145, 255, 0.6) 10%, rgba(77, 133, 255, 0.5) 65%);
   filter: drop-shadow(0px 3px 4px rgba(40, 40, 40, 0.15));
   backdrop-filter: blur(6px);
   /* backdrop-filter: blur(4px); */
`;

interface IHeaderStyled {
   headerStyles?: FlattenInterpolation<ThemeProps<any>>;
   currentScrollPosition: number;
   progress?: boolean;
   $opacity?: number;
   top?: string;
}

const HeaderStyled = styled.header<IHeaderStyled>`
   transition: top 0.65s ease-out, opacity 0.5s ease-out;
   opacity: ${({ $opacity = 1 }) => $opacity};
   top: ${({ top = '0' }) => top};
   pointer-events: none;
   position: absolute;
   z-index: 100;
   height: 68px;

   ${({ headerStyles }) => headerStyles};
   ${({ theme: { flex } }) => flex.between};
   ${Gutters}

   ${({ currentScrollPosition, progress = false }) =>
      progress &&
      css`
         &::after {
            border-bottom: 2px solid ${({ theme: { color } }) => color.grey_2};
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
   headerStyles?: FlattenInterpolation<ThemeProps<any>>;
   lineStyles: { bottom: string };
   progress?: boolean;
   opacity?: number;
   top?: string;
}

const headerConfig: { [key in HeaderVariant]: { visible: IHeaderVariant; hidden?: IHeaderVariant } } = {
   [HeaderVariant.FIXED]: {
      visible: {
         lineStyles: { bottom: '-12px' },
         headerStyles: css`
            background: transparent;
         `,
         progress: false,
         opacity: 1,
         top: '6.5vh',
      },
   },
   [HeaderVariant.STICKY]: {
      visible: {
         lineStyles: { bottom: '-8px' },
         progress: true,
         headerStyles,
         opacity: 1,
         top: '0',
      },
      hidden: {
         lineStyles: { bottom: '-8px' },
         progress: true,
         headerStyles,
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

   const navbarItems: INavbarItem[] = useMemo(
      () => [
         { title: 'Home', onClick: () => setScrollToPagePosition(0) },
         { title: 'Projects', onClick: () => setScrollToPagePosition(0.35) },
         { title: 'About', onClick: () => setScrollToPagePosition(0.6) },
         { title: 'Contact', onClick: () => setScrollToPagePosition(0.9) },
         { title: 'Github', link: 'https://example.com', variant: NavbarItemVariant.Link },
      ],
      [setScrollToPagePosition]
   );

   return (
      <HeaderStyled
         currentScrollPosition={currentScrollPosition}
         headerStyles={styles?.headerStyles}
         progress={styles?.progress}
         $opacity={styles?.opacity}
         top={styles?.top}
      >
         <Logo />
         {!isMobile ? <Navbar items={navbarItems} lineStyles={styles?.lineStyles} /> : null}
      </HeaderStyled>
   );
};

export { Header, HeaderVariant };
