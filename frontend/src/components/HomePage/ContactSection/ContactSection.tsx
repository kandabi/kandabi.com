import { ParallaxLayer } from '@react-spring/parallax';
import styled from 'styled-components';
import { Footer } from 'components/common/Footer';

const ContactStyled = styled.div`
    justify-content: center;
    align-items: center;
    position: relative;
    display: flex;
    height: 100vh;
    width: 100%;
`;

const TitleStyled = styled.h1`
    color: white;
    font-size: 5rem;
`;

export const ContactSection = () => {
    return (
        <ParallaxLayer offset={1.5} speed={0.4}>
            <ContactStyled>
                <TitleStyled>Hello!!!!!!!!!!</TitleStyled>
            </ContactStyled>
            <Footer />
        </ParallaxLayer>
    );
};
