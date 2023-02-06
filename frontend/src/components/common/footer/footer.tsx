import styled from 'styled-components';

const FooterStyled = styled.footer`
   background-color: ${({ theme: { color } }) => color.blue_5};
   justify-content: center;
   align-items: center;
   display: flex;
   height: 250px;
   width: 100%;
`;

const TitleStyled = styled.h1`
   color: white;
   font-size: 5rem;
`;

const Footer = () => {
   return (
      <FooterStyled>
         <TitleStyled>Footer</TitleStyled>
      </FooterStyled>
   );
};

export { Footer };