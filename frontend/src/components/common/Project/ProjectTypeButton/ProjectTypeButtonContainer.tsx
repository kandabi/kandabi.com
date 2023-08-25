import styled from 'styled-components';
import { ProjectType } from './ProjectTypeButton';
import { ProjectTypes } from 'components/common/Project/projectUtils';
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
