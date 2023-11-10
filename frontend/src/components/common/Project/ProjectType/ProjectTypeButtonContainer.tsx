import styled from 'styled-components';
import { ProjectType } from './ProjectType';
import { ProjectTypeButton } from './ProjectTypeButton';
import { styles } from 'utils/styleUtils';

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
    activeProjectType?: ProjectType;
    setActiveProjectType: (projectType: ProjectType | undefined) => void;
};

export const ProjectTypeContainer = ({ activeProjectType, setActiveProjectType }: Props) => {
    const handleProjectTypeClick = (projectType: ProjectType) => {
        setActiveProjectType(projectType !== activeProjectType ? projectType : undefined);
    };

    return (
        <ProjectTypesContainerStyled>
            <span>Project Type -</span>
            <ButtonContainerStyled>
                {Object.values(ProjectType).map(projectType => (
                    <ProjectTypeButton
                        onClick={() => handleProjectTypeClick(ProjectType[projectType])}
                        isSelected={ProjectType[projectType] === activeProjectType}
                        projectType={ProjectType[projectType]}
                        key={projectType}
                    />
                ))}
            </ButtonContainerStyled>
        </ProjectTypesContainerStyled>
    );
};
