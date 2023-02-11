import styled from 'styled-components';
import { IProjectItem } from '../project-item';

const ProjectsStyled = styled.div``;

interface IProjectsContainer {
   projects: IProjectItem[];
}

const ProjectsContainer = ({ projects }: IProjectsContainer) => {
   return <ProjectsStyled></ProjectsStyled>;
};

export { ProjectsContainer };
export type { IProjectsContainer };
