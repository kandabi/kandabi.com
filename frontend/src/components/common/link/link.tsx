import styled from 'styled-components';

import linkIcon from 'assets/images/link.svg';
import { Line, LineVariant } from 'components/common/line';

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

interface ILinkIconStyled {
   iconWidth?: number;
}

const LinkIconStyled = styled.img<ILinkIconStyled>`
   width: ${({ width = 12 }) => `${width}px`};
`;

interface ILink {
   lineVariant?: LineVariant;
   className?: string;
   text: string;
   href: string;
   styles?: {
      lineBottom?: string;
      iconWidth?: number;
      fontSize?: number;
   };
}

const Link = ({ className, text, href, styles, lineVariant }: ILink) => {
   return (
      <LinkStyled href={href} className={className} target='_blank'>
         <Line variant={lineVariant} styles={{ bottom: styles?.lineBottom }}>
            <span>{text}</span>
            <LinkIconStyled src={linkIcon.src} iconWidth={styles?.iconWidth} />
         </Line>
      </LinkStyled>
   );
};

export { Link };
