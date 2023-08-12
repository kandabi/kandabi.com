import styled from 'styled-components';

import { styles } from 'styles';
import { ProjectTag } from './project-tag';
import { ProjectTagProps } from 'types/project';

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

const ProjectTagsContainer = ({ projectTags, activeProjectTags, setActiveProjectTags }: Props) => {
   const handleProjectTagClick = (projectTag: ProjectTagProps) => {
      const newProjectTags: ProjectTagProps[] = activeProjectTags.includes(projectTag)
         ? activeProjectTags.filter((activeTag) => projectTag !== activeTag)
         : [...activeProjectTags, projectTag];

      setActiveProjectTags(newProjectTags);
   };

   const displayTags = projectTags.slice(0, 4);

   return (
      <ProjectTypesContainerStyled>
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
      </ProjectTypesContainerStyled>
   );
};

export { ProjectTagsContainer };
