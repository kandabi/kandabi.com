import { useState } from 'react';
import styled from 'styled-components';

import { theme } from 'styles';
import { ProjectType, ProjectTypeButton } from './project-type-button';

const ProjectTypeContainerStyled = styled.div`
   ${theme.flex.start};
   flex-direction: column;
   gap: 10px;
`;

const ButtonContainerStyled = styled.div`
   ${theme.flex.start};
   gap: 6px;
`;

interface IProjectTypesContainer {
   activeProjectType?: ProjectType;
   setActiveProjectType: (projectType: ProjectType | undefined) => void;
}

const ProjectTypesContainer = ({ activeProjectType, setActiveProjectType }: IProjectTypesContainer) => {
   const handleProjectTypeClick = (projectType: ProjectType) => {
      setActiveProjectType(projectType !== activeProjectType ? projectType : undefined);
   };

   return (
      <ProjectTypeContainerStyled>
         <span>Project Type -</span>
         <ButtonContainerStyled>
            <ProjectTypeButton
               onClick={() => handleProjectTypeClick(ProjectType.WEB)}
               isSelected={ProjectType.WEB === activeProjectType}
               projectType={ProjectType.WEB}
            />
            <ProjectTypeButton
               onClick={() => handleProjectTypeClick(ProjectType.GAME)}
               isSelected={ProjectType.GAME === activeProjectType}
               projectType={ProjectType.GAME}
            />
            <ProjectTypeButton
               onClick={() => handleProjectTypeClick(ProjectType.OTHER)}
               isSelected={ProjectType.OTHER === activeProjectType}
               projectType={ProjectType.OTHER}
            />
         </ButtonContainerStyled>
      </ProjectTypeContainerStyled>
   );
};

export { ProjectTypesContainer };
