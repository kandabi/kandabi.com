import { useState } from 'react';
import styled from 'styled-components';

import { ProjectTypesContainer } from 'components/common/project/project-type';
import { ProjectTagsContainer } from 'components/common/project/project-tag';
import { Section } from 'components/common/section';
import { styles } from 'styles';
import { IProject, IProjectTag, ProjectTypes } from 'types/project';
import { ProjectItemSelection, ProjectItemsContainer } from 'components/common/project/project-item';

const ProjectsStyled = styled.div`
   ${styles.flex.start}
   position: relative;
   top: 200px;
`;

const TitleStyled = styled.h2`
   text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.75);
   color: ${styles.color.white_100};
   line-height: 1.16em;
   font-size: 40px;
   ${styles.breakpoints.md} {
      font-size: 52px;
   }
`;

const ProjectsContainerStyled = styled.div`
   ${styles.flex.between}
   height: 640px;
   width: 100%;
   gap: 25px;
`;

const ProjectFiltersStyled = styled.div`
   ${styles.flex.start}
   gap: 40px;
`;

interface IProjectsSection {
   projects: IProject[];
   projectTags: IProjectTag[];
}

const ProjectsSection = ({ projects, projectTags }: IProjectsSection) => {
   const [activeProjectTags, setActiveProjectTags] = useState<IProjectTag[]>([]);
   const [activeProjectType, setActiveProjectType] = useState<ProjectTypes>();

   return (
      <ProjectsStyled>
         <Section gap='26px'>
            <TitleStyled>Projects</TitleStyled>
            <ProjectFiltersStyled>
               <ProjectTypesContainer
                  setActiveProjectType={setActiveProjectType}
                  activeProjectType={activeProjectType}
               />
               <ProjectTagsContainer
                  setActiveProjectTags={setActiveProjectTags}
                  activeProjectTags={activeProjectTags}
                  projectTags={projectTags}
               />
            </ProjectFiltersStyled>
            <ProjectsContainerStyled>
               <ProjectItemsContainer projects={projects} />
               <ProjectItemSelection project={projects[0]} />
            </ProjectsContainerStyled>
         </Section>
      </ProjectsStyled>
   );
};

export { ProjectsSection };
export type { IProjectsSection };
