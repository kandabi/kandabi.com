import styled from 'styled-components';
import { Footer } from 'components/common/Footer';
import { Section } from 'components/common/Section';
import { styles } from 'utils/styleUtils';
import { Input } from 'components/common/Input';
import { Button } from 'components/common/Button';

const ContactStyled = styled.div`
    flex-direction: column;
    height: 100%;
    width: 100%;
    ${styles.flex.between}
`;

const TitleStyled = styled.h3`
    color: white;
    font-size: 40px;
`;

const SmallInputContainer = styled.div`
    ${styles.flex.between}
    margin-top: 5px;
    width: 100%;
    gap: 12px;
`;

const SubtitleStyled = styled.p`
    font-size: 16px;
    ${styles.breakpoint.md} {
        font-size: 20px;
    }
`;

export const ContactSection = () => {
    return (
        <>
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
                    <Button onClick={() => {}} text='Send' margin={'0 0 0 auto'} />
                </Section>
                <Footer />
            </ContactStyled>
        </>
    );
};
