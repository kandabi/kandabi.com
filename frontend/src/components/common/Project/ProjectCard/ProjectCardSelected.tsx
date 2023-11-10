import styled from 'styled-components';
import { ProjectProps } from './ProjectCard';
import { Image } from 'components/common/Image';
import { Link } from 'components/common/Link';
import { ProjectTag } from 'components/common/Project/ProjectTag';
import { ProjectTypeButton } from 'components/common/Project/ProjectType';
import { getMediaUrl } from 'utils/mediaUtils';
import { styles } from 'utils/styleUtils';

const ProjectSelectionStyled = styled.div`
    background: linear-gradient(180deg, #212e52 57.76%, #344982 100%);
    box-shadow: 2px 4px 5px 3px rgba(0, 0, 0, 0.25);
    border-radius: 0px 25px;
    position: relative;
    height: 100%;
    width: 30%;
    left: -15px;
`;

const TitleStyled = styled.b`
    text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
    font-size: 22px;
`;

const LinkStyled = styled(Link)`
    text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
    font-size: 22px;
`;

const ContentStyled = styled.div`
    ${styles.flex.start}
    flex-direction: column;
    padding: 10px 15px;
    gap: 8px;
`;

const SeparatorStyled = styled.div`
    border-bottom: 1px solid ${styles.color.WHITE_100};
    margin: 4px 0 12px 0;
    width: 100%;
`;

const DescriptionStyled = styled.span`
    font-size: 16px;
`;

const SmallTextStyled = styled.span`
    font-size: 14px;
`;

const ProjectTagsContainer = styled.div`
    ${styles.flex.start}
    gap:8px;
`;

type Props = {
    project: ProjectProps;
};

export const ProjectSelection = ({ project }: Props) => {
    const { thumbnail, title, description, projectType, tags, link } = project.attributes;
    // console.log('link', link);

    return (
        <ProjectSelectionStyled>
            <Image src={getMediaUrl(thumbnail)} width='100%' height={315} alt='Project thumbnail' />
            <ContentStyled>
                {link ? (
                    <LinkStyled text={title} href={link!} styles={{ lineBottom: '-2px', iconWidth: 16 }} />
                ) : (
                    <TitleStyled>{title}</TitleStyled>
                )}
                <SeparatorStyled />
                <DescriptionStyled>{description}</DescriptionStyled>
                <SeparatorStyled />
                <SmallTextStyled>Project Type -</SmallTextStyled>
                <ProjectTypeButton projectType={projectType} isDisabled />
                <SmallTextStyled>Project Tags -</SmallTextStyled>
                <ProjectTagsContainer>
                    {tags.data.map(projectTag => (
                        <ProjectTag projectTag={projectTag} key={projectTag.id} isDisabled />
                    ))}
                </ProjectTagsContainer>
            </ContentStyled>
        </ProjectSelectionStyled>
    );
};
