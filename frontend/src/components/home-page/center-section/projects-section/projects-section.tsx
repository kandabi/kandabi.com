import { useState } from 'react';
import styled from 'styled-components';

import { theme } from 'styles';
import { IProjectItem } from 'components/home-page/center-section/projects-section/project-item';
import { Section } from 'components/common/section';
import { IProjectTag } from 'components/common/project-tag/project-tag-button';
import { ProjectType, ProjectTypesContainer } from 'components/common/project-type';
import { ProjectTagsContainer } from 'components/common/project-tag';

const ProjectsStyled = styled.div`
   ${theme.flex.center}
   position: relative;
   top: 200px;
`;

const TitleStyled = styled.h2`
   text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.75);
   color: ${theme.color.white_100};
   line-height: 1.16em;
   font-size: 40px;
   ${theme.breakpoints.md} {
      font-size: 52px;
   }
`;

const ProjectFiltersStyled = styled.div`
   ${theme.flex.start}
   gap: 40px;
`;

interface IProjectsSection {
   projects: IProjectItem[];
   projectTags: IProjectTag[];
}

const ProjectsSection = ({ projects, projectTags }: IProjectsSection) => {
   const [activeProjectType, setActiveProjectType] = useState<ProjectType>();
   const [activeProjectTags, setActiveProjectTags] = useState<IProjectTag[]>([]);

   console.log('projects', projects);
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
         </Section>
      </ProjectsStyled>
   );
};

export { ProjectsSection };
