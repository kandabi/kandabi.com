import styled from 'styled-components';
import { Section } from 'components/common/section';
import { Logo } from 'components/common/logo';

const FooterStyled = styled.footer`
   background-color: ${({ theme: { color } }) => color.blue_5};
   filter: drop-shadow(0px -3px 5px rgba(0, 0, 0, 0.3));
   position: relative;
   height: 250px;
   width: 100%;
`;

const Footer = () => {
   return (
      <FooterStyled>
         <Section gap='12px'>
            <Logo />
         </Section>
      </FooterStyled>
   );
};

export { Footer };
