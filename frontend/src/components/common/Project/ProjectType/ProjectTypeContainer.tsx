import styled from 'styled-components';
import { ProjectType } from './ProjectType';
import { styles } from 'styles';
import { ProjectTypes } from 'types/project';

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
    activeProjectType?: ProjectTypes;
    setActiveProjectType: (projectType: ProjectTypes | undefined) => void;
}

export const ProjectTypeContainer = ({ activeProjectType, setActiveProjectType }: Props) => {
    const handleProjectTypeClick = (projectType: ProjectTypes) => {
        setActiveProjectType(projectType !== activeProjectType ? projectType : undefined);
    };

    return (
        <ProjectTypesContainerStyled>
            <span>Project Type -</span>
            <ButtonContainerStyled>
                {Object.keys(ProjectTypes).map(key => (
                    <ProjectType
                        onClick={() => handleProjectTypeClick(ProjectTypes[key])}
                        isSelected={ProjectTypes[key] === activeProjectType}
                        projectType={ProjectTypes[key]}
                        key={key}
                    />
                ))}
            </ButtonContainerStyled>
        </ProjectTypesContainerStyled>
    );
};
