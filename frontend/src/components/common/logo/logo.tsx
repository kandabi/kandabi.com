import styled from 'styled-components';

import { useStore } from 'store';
import { Image } from 'components/common/image';

import logoFull from 'assets/svgs/logo-full.svg';

const LogoStyled = styled(Image)`
   pointer-events: initial;
   cursor: pointer;
   height: 26px;
`;

interface ILogo {
   className?: string;
}

const Logo = ({ className }: ILogo) => {
   const setGoToScrollPosition = useStore((state) => state.setGoToScrollPosition);

   return (
      <LogoStyled
         onClick={() => setGoToScrollPosition(0)}
         alt='aviv kandabi main logo'
         className={className}
         src={logoFull.src}
         loading='eager'
         height={26}
         width={142}
      />
   );
};

export { Logo };
