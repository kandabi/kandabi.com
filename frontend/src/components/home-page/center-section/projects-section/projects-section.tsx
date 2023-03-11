import { useState } from 'react';
import styled from 'styled-components';

import { ProjectTypes, ProjectTypeContainer } from 'components/common/project/project-type';
import { ProjectTagContainer } from 'components/common/project/project-tag';
import { IProjectCard } from 'components/common/project/project-card';
import { IProjectTag } from 'components/common/project/project-tag';
import { Section } from 'components/common/section';
import { theme } from 'styles';

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
   projects: IProjectCard[];
   projectTags: IProjectTag[];
}

const ProjectsSection = ({ projects, projectTags }: IProjectsSection) => {
   const [activeProjectTags, setActiveProjectTags] = useState<IProjectTag[]>([]);
   const [activeProjectType, setActiveProjectType] = useState<ProjectTypes>();

   console.log('projects', projects);
   return (
      <ProjectsStyled>
         <Section gap='26px'>
            <TitleStyled>Projects</TitleStyled>
            <ProjectFiltersStyled>
               <ProjectTypeContainer
                  setActiveProjectType={setActiveProjectType}
                  activeProjectType={activeProjectType}
               />
               <ProjectTagContainer
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
