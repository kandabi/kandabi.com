import styled from 'styled-components';
import { ProjectTag } from './ProjectTag';
import { styles } from 'utils/styleUtils';
import { GetTagsQuery, TagEntity } from 'types/graphql';
import { Color } from 'utils/colorUtils';

const ProjectTypesContainerStyled = styled.div`
    ${styles.flex.start};
    flex-direction: column;
    gap: 10px;
`;

const ButtonContainerStyled = styled.div`
    ${styles.flex.start};
    gap: 6px;
`;

type Props = {
    tagsQuery?: GetTagsQuery;
    activeProjectTags: TagEntity[];
    setActiveProjectTags: (projectType: TagEntity[]) => void;
};

export const ProjectTagContainer = ({ tagsQuery, activeProjectTags, setActiveProjectTags }: Props) => {
    console.log('tagsQuery', tagsQuery);
    const handleProjectTagClick = (projectTag: TagEntity) => {
        const newProjectTags: TagEntity[] = activeProjectTags.includes(projectTag)
            ? activeProjectTags.filter(activeTag => projectTag !== activeTag)
            : [...activeProjectTags, projectTag];

        setActiveProjectTags(newProjectTags);
    };

    const displayTags = tagsQuery?.tags?.data.slice(0, 4);

    return (
        <ProjectTypesContainerStyled>
            <span>Project Tags -</span>
            <ButtonContainerStyled>
                {displayTags?.map(
                    projectTag =>
                        projectTag?.attributes && (
                            <ProjectTag
                                isSelected={activeProjectTags.includes(projectTag)}
                                onClick={() => handleProjectTagClick(projectTag)}
                                styles={{ padding: '0 16px' }}
                                projectTag={projectTag.attributes}
                                key={projectTag.id}
                            />
                        ),
                )}
                <ProjectTag
                    onClick={() => console.log('Show More')}
                    styles={{ padding: '0 16px' }}
                    projectTag={{ color: Color.WHITE_100, title: 'Show More' }}
                />
            </ButtonContainerStyled>
        </ProjectTypesContainerStyled>
    );
};
