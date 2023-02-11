import styled from 'styled-components';

import linkIcon from 'assets/images/link.svg';

interface ILinkStyled {
   fontSize?: number;
}

const LinkStyled = styled.a<ILinkStyled>`
   font-size: ${({ fontSize = 18 }) => `${fontSize}px`};
   ${({ theme: { flex } }) => flex.center};
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
   className?: string;
   text: string;
   href: string;
   styles?: {
      iconWidth?: number;
      fontSize?: number;
   };
}

const Link = ({ className, text, href, styles }: ILink) => {
   return (
      <LinkStyled href={href} className={className} target='_blank'>
         <span>{text}</span>
         <LinkIconStyled src={linkIcon.src} iconWidth={styles?.iconWidth} />
      </LinkStyled>
   );
};

export { Link };
