// import styled from 'styled-components';
import { IProjectItem } from 'components/home-page/center-section/projects-section/project-item';
// import { Canvas } from 'react-three-fiber';

// const ProjectsStyled = styled.div``;

interface IProjectsContainer {
   projects: IProjectItem[];
}

const ProjectsContainer = ({ projects }: IProjectsContainer) => {
   console.log('projects', projects);
   return <></>;
   // return <ProjectsStyled></ProjectsStyled>;

   // return (
   //    <Canvas>
   //       <pointLight position={[10, 10, 10]} />
   //       <mesh>
   //          <sphereGeometry />
   //          <meshStandardMaterial color='hotpink' />
   //       </mesh>
   //    </Canvas>
   // );
};

export { ProjectsContainer };
export type { IProjectsContainer };
