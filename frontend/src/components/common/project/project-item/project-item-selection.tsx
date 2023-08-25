import styled from 'styled-components';
import { styles } from 'styles';
import { Image } from 'components/common/image';
import { Link } from 'components/common/link';
import { ProjectTag } from 'components/common/project/project-tag';
import { ProjectType } from 'components/common/project/project-type';
import { IProject } from 'types/project';
import { getMediaItemUrl } from 'utils/getMediaItemUrl';

const ProjectItemSelectionStyled = styled.div`
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

const SeperatorStyled = styled.div`
    border-bottom: 1px solid ${styles.color.white_100};
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

interface IProjectItemSelection {
    project: IProject;
}

const ProjectItemSelection = ({ project }: IProjectItemSelection) => {
    const { thumbnail, title, description, projectType, tags, link } = project.attributes;
    // console.log('link', link);

    return (
        <ProjectItemSelectionStyled>
            <Image src={getMediaItemUrl(thumbnail)} width='100%' height={315} alt='Project thumbnail' />
            <ContentStyled>
                {link ? (
                    <LinkStyled text={title} href={link!} styles={{ lineBottom: '-2px', iconWidth: 16 }} />
                ) : (
                    <TitleStyled>{title}</TitleStyled>
                )}
                <SeperatorStyled />
                <DescriptionStyled>{description}</DescriptionStyled>
                <SeperatorStyled />
                <SmallTextStyled>Project Type -</SmallTextStyled>
                <ProjectType projectType={projectType} isDisabled />
                <SmallTextStyled>Project Tags -</SmallTextStyled>
                <ProjectTagsContainer>
                    {tags.data.map(projectTag => (
                        <ProjectTag projectTag={projectTag} key={projectTag.id} isDisabled />
                    ))}
                </ProjectTagsContainer>
            </ContentStyled>
        </ProjectItemSelectionStyled>
    );
};

export { ProjectItemSelection };
