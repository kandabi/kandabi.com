import { ParallaxLayer } from '@react-spring/parallax';
import styled from 'styled-components';
import { Footer } from 'components/common/Footer';
import { Section } from 'components/common/Section';
import { styles } from 'utils/styleUtils';
import { Input } from 'components/common/Input';
import { Button } from 'components/common/Button';

const ContactStyled = styled.div`
    display: flex;
    width: 100%;
`;

const TitleStyled = styled.h3`
    color: white;
    font-size: 40px;
`;

const ContentContainer = styled.div`
    flex-direction: column;
    ${styles.flex.start}
    width: 100%;
    gap: 12px;
`;

const SmallInputContainer = styled.div`
    ${styles.flex.between}
    margin-top: 5px;
    gap: 12px;
`;

const SubtitleStyled = styled.p`
    font-size: 20px;
    ${styles.breakpoint.md} {
        font-size: 32px;
    }
`;

export const ContactSection = () => {
    return (
        <ParallaxLayer factor={1.0} offset={2.5} speed={1}>
            <ContactStyled>
                <Section gap='16px'>
                    <TitleStyled>Contact Me</TitleStyled>
                    <SubtitleStyled>
                        I am interested in freelance work - especially in ambitious or large projects in all development
                        fields.
                    </SubtitleStyled>
                    <SubtitleStyled>
                        I'll be happy to assist you at every step in building your dream product.
                    </SubtitleStyled>
                    <SubtitleStyled>You can contact me using the form below. </SubtitleStyled>
                    <SmallInputContainer>
                        <Input placeholder='Name' value='' name='name' />
                        <Input placeholder='Email' value='' name='email' />
                    </SmallInputContainer>
                    <Input placeholder='Subject' value='' name='subject' />
                    <Input placeholder='Message' value='' name='message' as='textarea' rows={4} />
                    <Button onClick={() => {}} text='Send' styles={{ margin: '0 0 0 auto' }} />
                </Section>
                <Footer />
            </ContactStyled>
        </ParallaxLayer>
    );
};
