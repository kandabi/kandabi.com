import React from 'react';
import styled from 'styled-components';
import { Section } from 'components/common/Section';
import { styles } from 'utils/styleUtils';

const TitleStyled = styled.h2`
    text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.75);
    color: ${styles.color.WHITE_100};
    line-height: 1.16em;
    font-size: 40px;
    ${styles.breakpoint.md} {
        font-size: 52px;
    }
`;

const ContentContainer = styled.div`
    flex-direction: column;
    ${styles.flex.start}
    gap: 12px;
`;

interface SubtitleStyledProps {
    $_fontSize?: string;
    $_margin?: string;
}

const SubtitleStyled = styled.span<SubtitleStyledProps>`
    font-size: ${({ $_fontSize = '18px' }) => $_fontSize};
    margin: ${({ $_margin }) => $_margin};
`;

interface ListStyledProps {
    $_margin?: string;
}

const ListStyled = styled.ul<ListStyledProps>`
    margin: ${({ $_margin = '0 0 8px 0' }) => $_margin};
    flex-direction: column;
    padding-left: 25px;
    gap: 5px;

    ${styles.flex.start}
`;

const ListItemStyled = styled.li`
    font-size: 16px;
`;

export const AboutMeSection = () => {
    return (
        <Section gap='26px' margin='160px 0'>
            <TitleStyled>About Me</TitleStyled>
            <ContentContainer>
                <SubtitleStyled>🚀 Senior Software Developer</SubtitleStyled>
                <ListStyled>
                    <ListItemStyled>7+ years of development experience</ListItemStyled>
                    <ListItemStyled>Specialize in developing advanced web applications and systems</ListItemStyled>
                    <ListItemStyled>Fluent English, Hebrew and Spanish speaker</ListItemStyled>
                </ListStyled>
                <SubtitleStyled>🌍 Proficient in the following tech </SubtitleStyled>
                <ListStyled>
                    <ListItemStyled>Node.js, .Net Core</ListItemStyled>
                    <ListItemStyled>Javascript, Typescript, C#</ListItemStyled>
                    <ListItemStyled>React.js, Three.js, jQuery</ListItemStyled>
                    <ListItemStyled>Windows, Linux, Docker</ListItemStyled>
                    <ListItemStyled>Sql Server, PostgreSQL, MySQL</ListItemStyled>
                    <ListItemStyled>Azure, AWS, DigitalOcean</ListItemStyled>
                    <ListItemStyled>Figma, Blender</ListItemStyled>
                </ListStyled>
                <SubtitleStyled>💡 Why me</SubtitleStyled>
                <ListStyled>
                    <ListItemStyled>
                        Diligent: Eager to build innovative and cutting-edge solutions for my clients
                    </ListItemStyled>
                    <ListItemStyled>
                        Reliable: I work hard and efficiently with a personal attention to detail
                    </ListItemStyled>
                    <ListItemStyled>Creative: I find unique ways to demonstrate ideas using code</ListItemStyled>
                </ListStyled>
                <SubtitleStyled>👨‍🚀 Still on the fence?</SubtitleStyled>
                <SubtitleStyled $_margin='10px 0 15px'>
                    {"Send me a message so I can convince you I'm the right person for the job!"}
                </SubtitleStyled>
                <SubtitleStyled>Looking forward to working with you,</SubtitleStyled>
                <SubtitleStyled>Aviv</SubtitleStyled>
            </ContentContainer>
        </Section>
    );
};
