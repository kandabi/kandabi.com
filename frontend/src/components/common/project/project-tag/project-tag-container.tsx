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

   const displayTags = projectTags.slice(0, 4);

   return (
      <ProjectTypeContainerStyled>
         <span>Project Tags -</span>
         <ButtonContainerStyled>
            {displayTags.map((projectTag) => {
               return (
                  <ProjectTag
                     isSelected={activeProjectTags.includes(projectTag)}
                     onClick={() => handleProjectTagClick(projectTag)}
                     styles={{ padding: '0 16px' }}
                     projectTag={projectTag}
                     key={projectTag.id}
                  />
               );
            })}

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
      </ProjectTypeContainerStyled>
   );
};

export { ProjectTagContainer };
