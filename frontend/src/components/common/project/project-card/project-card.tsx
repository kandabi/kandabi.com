import { ProjectType } from 'components/common/project/project-type';
import styled from 'styled-components';

const ProjectCardStyled = styled.div``;

interface IProjectCard {
   id: number;
   attributes: {
      title: string;
      projectType: ProjectType;
      description: string;
      link?: string;
      tags: any;
      thumbnail: any;
      video: any;
   };
}

const ProjectCard = () => {
   return <ProjectCardStyled></ProjectCardStyled>;
};

export { ProjectCard };
export type { IProjectCard };
