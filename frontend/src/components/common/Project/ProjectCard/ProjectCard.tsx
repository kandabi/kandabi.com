import { useState } from 'react';
import { animated, easings, useSpring } from '@react-spring/web';
import styled from 'styled-components';
// import { ProjectTypeButton } from 'components/common/Project/ProjectType';
import { styles } from 'utils/styleUtils';
import { Project } from 'types/graphql';

const cardHoverStyles = [
    'rotateX(0deg) rotateY(0deg) translate3d(-10px, -8px, -8px)',
    'rotateX(2deg) rotateY(1deg) translate3d(-10px, -8px, -4px)',
    'rotateX(1deg) rotateY(0deg) translate3d(-10px, -8px, 0px)',
    'rotateX(0deg) rotateY(0deg) translate3d(-10px, -8px, 0px)',
];

const ProjectStyled = styled(animated.div)`
    background: linear-gradient(180deg, #212e52 57.76%, #344982 100%);
    box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.5s ease-out;
    transform-style: preserve-3d;
    border-radius: 0px 25px;
    pointer-events: initial;
    padding-bottom: 15px;
    position: relative;
    max-height: 320px;
    cursor: pointer;
    z-index: 5000;
    width: 100%;

    &:hover {
        box-shadow: 1px 2px 5px 5px rgba(0, 0, 0, 0.45);
    }
`;

const ContentStyled = styled.div`
    padding: 10px 15px;
`;

const TitleStyled = styled.b`
    text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
    font-size: 22px;
`;

const SeparatorStyled = styled.div`
    border-bottom: 1px solid ${styles.color.WHITE_100};
    margin: 4px 0 12px 0;
    width: 100%;
`;

const TypeAndTagsContainer = styled.div`
    ${styles.flex.start}
    justify-content: start;
    flex-wrap: wrap;
    gap: 6px;
`;

type Props = Partial<Project>;

export const ProjectCard = ({ title, /*thumbnail*/ projectType /*tags*/ }: Props) => {
    const [isHovering, setIsHovering] = useState<boolean>(false);

    const { cardHover } = useSpring({
        from: { cardHover: 0 },
        cardHover: isHovering ? 1 : 0,
        config: { easing: easings.easeOutCubic, duration: 800 },
    });

    return (
        <ProjectStyled
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{
                transform: cardHover.to({
                    range: [0, 0.3, 0.7, 1],
                    output: cardHoverStyles,
                }),
            }}
        >
            {/* <Image src={getMediaUrl(thumbnail)} width='100%' height={165} alt='Project thumbnail' /> */}
            <ContentStyled>
                <TitleStyled>{title}</TitleStyled>
                <SeparatorStyled />
                <TypeAndTagsContainer>
                    {/* <ProjectTypeButton projectType={projectType} isDisabled /> */}
                    {/* {tags?.data.map(projectTag => (
                        <ProjectTag projectTag={projectTag} key={projectTag.id} isDisabled />
                    ))} */}
                </TypeAndTagsContainer>
            </ContentStyled>
        </ProjectStyled>
    );
};
