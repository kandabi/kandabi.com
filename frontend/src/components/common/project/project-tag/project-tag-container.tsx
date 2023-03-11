import styled from 'styled-components';

import { theme } from 'styles';
import { IProjectTag, ProjectTag } from './project-tag';

const ProjectTypeContainerStyled = styled.div`
   ${theme.flex.start};
   flex-direction: column;
   gap: 10px;
`;

const ButtonContainerStyled = styled.div`
   ${theme.flex.start};
   gap: 6px;
`;

interface IProjectTagContainer {
   projectTags: IProjectTag[];
   activeProjectTags: IProjectTag[];
   setActiveProjectTags: (projectType: IProjectTag[]) => void;
}

const ProjectTagContainer = ({ projectTags, activeProjectTags, setActiveProjectTags }: IProjectTagContainer) => {
   const handleProjectTagClick = (projectTag: IProjectTag) => {
      const newProjectTags: IProjectTag[] = activeProjectTags.includes(projectTag)
         ? activeProjectTags.filter((activeTag) => projectTag !== activeTag)
         : [...activeProjectTags, projectTag];

      setActiveProjectTags(newProjectTags);
   };

   return (
      <ProjectTypeContainerStyled>
         <span>Project Tags -</span>
         <ButtonContainerStyled>
            {projectTags.map((projectTag) => {
               return (
                  <ProjectTag
                     onClick={() => handleProjectTagClick(projectTag)}
                     isSelected={activeProjectTags.includes(projectTag)}
                     projectTag={projectTag}
                     key={projectTag.id}
                  />
               );
            })}
         </ButtonContainerStyled>
      </ProjectTypeContainerStyled>
   );
};

export { ProjectTagContainer };
