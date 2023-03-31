import styled from 'styled-components';

import { ProjectItem } from './project-item';
import { IProject } from 'types/project';

const ProjectItemsContainerStyled = styled.div`
   border: 1px solid red;
   display: grid;
   height: 100%;
   width: 60%;
`;

interface IProjectItemsContainer {
   projects: IProject[];
}

const ProjectItemsContainer = ({ projects }: IProjectItemsContainer) => {
   return (
      <ProjectItemsContainerStyled>
         {projects.map((project) => (
            <ProjectItem project={project} key={project.id} />
         ))}
      </ProjectItemsContainerStyled>
   );
};

export { ProjectItemsContainer };
