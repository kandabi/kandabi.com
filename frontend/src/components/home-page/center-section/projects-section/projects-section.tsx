import styled from 'styled-components';

import { theme } from 'styles';
import { IProjectItem } from 'components/home-page/center-section/projects-section/project-item';
import { Section } from 'components/common/section';

const ProjectsStyled = styled.div`
   ${theme.flex.center}
   position: relative;
   top: 200px;
`;

const TitleStyled = styled.h2`
   text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.75);
   color: ${theme.color.white_1};
   line-height: 1.16em;
   font-size: 40px;
   ${theme.breakpoints.md} {
      font-size: 52px;
   }
`;

interface IProjectsSection {
   projects: IProjectItem[];
}

const ProjectsSection = ({ projects }: IProjectsSection) => {
   console.log('projects', projects);
   return (
      <ProjectsStyled>
         <Section>
            <TitleStyled>Projects</TitleStyled>
         </Section>
      </ProjectsStyled>
   );
};

export { ProjectsSection };
