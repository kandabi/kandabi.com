import styled from 'styled-components';

import { useStore } from 'store';
import logoFull from 'assets/images/logo-full.svg';
import { Image } from 'components/common/image';

const LogoStyled = styled(Image)`
   pointer-events: initial;
   cursor: pointer;
   height: 26px;
`;

interface ILogo {
   className?: string;
}

const Logo = ({ className }: ILogo) => {
   const setScrollToPagePosition = useStore((state) => state.setScrollToPagePosition);

   return (
      <LogoStyled
         onClick={() => setScrollToPagePosition(0)}
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
