import styled, { css, FlattenInterpolation, ThemeProps } from 'styled-components';

import { Gutters } from 'components/common/gutters';
import { Navbar } from 'components/common/navbar';
import { INavbarItem } from 'components/common/navbar';
import { useMemo } from 'react';
import { useStore } from 'store';
import { NavbarItemVariant } from 'components/common/navbar/navbar-item';
import { useIsMobile } from 'hooks/useIsMobile';
import { Logo } from 'components/common/logo';
import { theme } from 'styles';

const headerStyles = css`
   background: linear-gradient(346deg, rgba(15, 23, 42, 0.75) 10%, rgba(15, 23, 42, 0.75) 65%);
   filter: drop-shadow(0px 3px 4px rgba(144, 149, 255, 0.15));
   backdrop-filter: blur(6px);
`;

interface IHeaderStyled {
   headerStyles?: FlattenInterpolation<ThemeProps<any>>;
   $_opacity?: number;
   top?: string;
}

const HeaderStyled = styled.header<IHeaderStyled>`
   transition: top 0.65s ease-out, opacity 0.5s ease-out;
   opacity: ${({ $_opacity = 1 }) => $_opacity};
   top: ${({ top = '0' }) => top};
   pointer-events: none;
   position: absolute;
   z-index: 100;
   height: 68px;

   ${({ headerStyles }) => headerStyles};
   ${theme.flex.between};
   ${Gutters}
`;

interface IHeaderProgressStyled {
   $_width: string;
}

const HeaderProgressStyled = styled.div<IHeaderProgressStyled>`
   border-bottom: 2px solid ${theme.color.grey_2};
   width: ${({ $_width }) => $_width};
   transition: width 0.6s ease-out;
   border-radius: 1px;
   position: absolute;
   bottom: 0;
   left: 0;
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
   const { currentScrollPosition, setGoToScrollPosition } = useStore((state) => ({
      currentScrollPosition: state.currentScrollPosition,
      setGoToScrollPosition: state.setGoToScrollPosition,
   }));

   const config = headerConfig[headerVariant];
   const isActive = headerVariant === HeaderVariant.FIXED || currentScrollPosition > 0.15;
   const styles = isActive ? config.visible : config.hidden;

   const navbarItems: INavbarItem[] = useMemo(
      () => [
         { title: 'Home', onClick: () => setGoToScrollPosition(0) },
         { title: 'Projects', onClick: () => setGoToScrollPosition(0.35) },
         { title: 'About', onClick: () => setGoToScrollPosition(0.6) },
         { title: 'Contact', onClick: () => setGoToScrollPosition(0.9) },
         { title: 'Github', link: 'https://example.com', variant: NavbarItemVariant.Link },
      ],
      [setGoToScrollPosition]
   );

   return (
      <HeaderStyled headerStyles={styles?.headerStyles} $_opacity={styles?.opacity} top={styles?.top}>
         <Logo />
         {!isMobile ? <Navbar items={navbarItems} lineStyles={styles?.lineStyles} /> : null}
         {styles?.progress && <HeaderProgressStyled $_width={`${Math.round(currentScrollPosition * 100)}%`} />}
      </HeaderStyled>
   );
};

export { Header, HeaderVariant };
