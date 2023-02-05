import styled, { css } from 'styled-components';

import logoFull from 'assets/logo-full.svg';
import { breakpoints } from 'styles/breakpoints';
import { colors } from 'styles/colors';

interface IHeaderStyled {
   scrollPercentage: number;
   background?: string;
   progress?: boolean;
   opacity?: number;
   top?: string;
}

const HeaderStyled = styled.div<IHeaderStyled>`
   background: ${({ background = 'transparent' }) => background};
   transition: top 0.65s ease-out, opacity 0.5s ease-out;
   opacity: ${({ opacity = 1 }) => opacity};
   top: ${({ top = '0' }) => top};
   position: absolute;
   z-index: 100;
   height: 60px;
   width: calc(100% - 56px - 12px);
   padding: 0 28px;

   ${breakpoints.md} {
      width: calc(100% - 380px - 12px);
      padding: 0 190px;
   }

   ${({ theme: { flex } }) => flex.between};

   ${({ scrollPercentage, progress = false }) =>
      progress &&
      css`
         &::after {
            transition: width 0.4s ease-out;
            width: ${scrollPercentage * 100}%;
            border-bottom: 2px solid #d3d3d3;
            border-radius: 1px;
            position: absolute;
            content: ' ';
            bottom: 0;
            left: 0;
         }
      `};
`;

const NavbarStyled = styled.div`
   overflow: hidden;
   display: flex;
   gap: 50px;
`;

const NavStyled = styled.nav`
   cursor: pointer;
   color: ${colors.white_1};
`;

const LogoStyled = styled.img`
   height: 26px;
`;

const navItems = ['Home', 'Projects', 'About', 'Contact', 'Github'];

enum HeaderVariant {
   DEFAULT = 'DEFAULT',
   SCROLL = 'SCROLL',
}

interface IHeaderVariant {
   background?: string;
   progress?: boolean;
   opacity?: number;
   top?: string;
}

const headerConfig: { [key in HeaderVariant]: { visible: IHeaderVariant; hidden?: IHeaderVariant } } = {
   [HeaderVariant.DEFAULT]: {
      visible: {
         background: 'transparent',
         progress: false,
         opacity: 1,
         top: '5.5vh',
      },
   },
   [HeaderVariant.SCROLL]: {
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
   scrollPercentage: number;
}

const Header = ({ scrollPercentage, headerVariant = HeaderVariant.DEFAULT }: IHeader) => {
   const config = headerConfig[headerVariant];
   const isActive = headerVariant === HeaderVariant.DEFAULT || scrollPercentage > 0.15;
   const styles = isActive ? config.visible : config.hidden;

   return (
      <HeaderStyled scrollPercentage={scrollPercentage} {...styles}>
         <LogoStyled src={logoFull.src} />
         {
            <NavbarStyled>
               {navItems.map((item, index) => (
                  <NavStyled key={index}>{item}</NavStyled>
               ))}
            </NavbarStyled>
         }
      </HeaderStyled>
   );
};

export { Header, HeaderVariant };
