import styled from 'styled-components';
import Image from 'next/image';

import { useStore } from 'store';

import logoFull from 'assets/images/logo-full.svg';

const LogoStyled = styled(Image)`
   pointer-events: initial;
   cursor: pointer;
   height: 26px;
`;

const Logo = () => {
   const { setScrollToPagePosition } = useStore((state) => ({
      setScrollToPagePosition: state.setScrollToPagePosition,
   }));

   return (
      <LogoStyled
         onClick={() => setScrollToPagePosition(0)}
         src={logoFull.src}
         alt='main logo'
         height={26}
         width={142}
      />
   );
};

export { Logo };
