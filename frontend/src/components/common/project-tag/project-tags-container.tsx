import styled from 'styled-components';

import { theme } from 'styles';
import { IProjectTag, ProjectTagButton } from './project-tag-button';

const ProjectTypeContainerStyled = styled.div`
   ${theme.flex.start};
   flex-direction: column;
   gap: 10px;
`;

const ButtonContainerStyled = styled.div`
   ${theme.flex.start};
   gap: 6px;
`;

interface IProjectTagsContainer {
   projectTags: IProjectTag[];
   activeProjectTags: IProjectTag[];
   setActiveProjectTags: (projectType: IProjectTag[]) => void;
}

const ProjectTagsContainer = ({ projectTags, activeProjectTags, setActiveProjectTags }: IProjectTagsContainer) => {
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
                  <ProjectTagButton
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

export { ProjectTagsContainer };
