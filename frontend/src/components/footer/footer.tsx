import styled from "styled-components";

const FooterStyled = styled.div`
   background-color: rgba(100, 0, 0);
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
         <TitleStyled>footer</TitleStyled>
      </FooterStyled>
   );
};

export { Footer };
