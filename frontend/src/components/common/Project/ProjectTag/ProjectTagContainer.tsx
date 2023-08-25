import styled from 'styled-components';
import { ProjectTag } from './ProjectTag';
import { ProjectTagProps } from 'types/project';
import { styles } from 'utils/styles';

const ProjectTypesContainerStyled = styled.div`
    ${styles.flex.start};
    flex-direction: column;
    gap: 10px;
`;

const ButtonContainerStyled = styled.div`
    ${styles.flex.start};
    gap: 6px;
`;

interface Props {
    projectTags: ProjectTagProps[];
    activeProjectTags: ProjectTagProps[];
    setActiveProjectTags: (projectType: ProjectTagProps[]) => void;
}

export const ProjectTagContainer = ({ projectTags, activeProjectTags, setActiveProjectTags }: Props) => {
    const handleProjectTagClick = (projectTag: ProjectTagProps) => {
        const newProjectTags: ProjectTagProps[] = activeProjectTags.includes(projectTag)
            ? activeProjectTags.filter(activeTag => projectTag !== activeTag)
            : [...activeProjectTags, projectTag];

        setActiveProjectTags(newProjectTags);
    };

    const displayTags = projectTags.slice(0, 4);

    return (
        <ProjectTypesContainerStyled>
            <span>Project Tags -</span>
            <ButtonContainerStyled>
                {displayTags.map(projectTag => (
                    <ProjectTag
                        isSelected={activeProjectTags.includes(projectTag)}
                        onClick={() => handleProjectTagClick(projectTag)}
                        styles={{ padding: '0 16px' }}
                        projectTag={projectTag}
                        key={projectTag.id}
                    />
                ))}
                <ProjectTag
                    onClick={() => console.log('Show More')}
                    styles={{ padding: '0 16px' }}
                    projectTag={{
                        attributes: {
                            color: 'white_100',
                            title: 'Show More',
                        },
                    }}
                />
            </ButtonContainerStyled>
        </ProjectTypesContainerStyled>
    );
};
