import styled from 'styled-components';

import linkIcon from 'assets/images/link.svg';
import { Line } from 'components/common/line';
import { Image } from 'components/common/image';

interface ILinkStyled {
   fontSize?: number;
}

const LinkStyled = styled.a<ILinkStyled>`
   font-size: ${({ fontSize = 18 }) => `${fontSize}px`};
   ${({ theme: { flex } }) => flex.center};
   position: relative;
   cursor: pointer;
   gap: 3px;
`;

interface ILink {
   className?: string;
   text: string;
   href: string;
   showLine?: boolean;
   styles?: {
      lineBottom?: string;
      iconWidth?: number;
      fontSize?: number;
   };
}

const Link = ({ className, text, href, styles, showLine = true }: ILink) => {
   const renderLink = () => {
      return (
         <>
            <span>{text}</span>
            <Image src={linkIcon.src} width={styles?.iconWidth ?? 12} height={14} alt='Outside link' />
         </>
      );
   };

   return (
      <LinkStyled href={href} className={className} target='_blank'>
         {showLine ? <Line styles={{ bottom: styles?.lineBottom }}>{renderLink()}</Line> : renderLink()}
      </LinkStyled>
   );
};

export { Link };
