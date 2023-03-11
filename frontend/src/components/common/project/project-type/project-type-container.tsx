import styled from 'styled-components';

import { theme } from 'styles';
import { ProjectType, ProjectTypes } from './project-type';

const ProjectTypeContainerStyled = styled.div`
   ${theme.flex.start};
   flex-direction: column;
   gap: 10px;
`;

const ButtonContainerStyled = styled.div`
   ${theme.flex.start};
   gap: 6px;
`;

interface IProjectTypeContainer {
   activeProjectType?: ProjectTypes;
   setActiveProjectType: (projectType: ProjectTypes | undefined) => void;
}

const ProjectTypeContainer = ({ activeProjectType, setActiveProjectType }: IProjectTypeContainer) => {
   const handleProjectTypeClick = (projectType: ProjectTypes) => {
      setActiveProjectType(projectType !== activeProjectType ? projectType : undefined);
   };

   return (
      <ProjectTypeContainerStyled>
         <span>Project Type -</span>
         <ButtonContainerStyled>
            {Object.keys(ProjectTypes).map((key) => (
               <ProjectType
                  onClick={() => handleProjectTypeClick(ProjectTypes[key])}
                  isSelected={ProjectTypes[key] === activeProjectType}
                  projectType={ProjectTypes[key]}
                  key={key}
               />
            ))}
         </ButtonContainerStyled>
      </ProjectTypeContainerStyled>
   );
};

export { ProjectTypeContainer };
