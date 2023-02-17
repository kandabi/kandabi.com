import styled from 'styled-components';

const ProjectStyled = styled.div``;

interface IProjectItem {
   id: number;
   attributes: {
      order: number;
      title: string;
      projectType: string;
      description: string;
      link?: string;
      tags: any;
      thumbnail: any;
      video: any;
   };
}

const ProjectItem = () => {
   return <ProjectStyled></ProjectStyled>;
};

export { ProjectItem };
export type { IProjectItem };
