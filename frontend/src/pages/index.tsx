import { GetStaticProps } from 'next';

import { ProjectsApi } from 'api/projects';
import { HomePage } from 'components/home-page';
import { IProjectItem } from 'components/home-page/projects-about-section/project-item';
import { IProjectsContainer } from 'components/home-page/projects-about-section/projects-container';

const Index = ({ projects }: IProjectsContainer) => {
   return <HomePage projects={projects} />;
};

const getStaticProps: GetStaticProps<IProjectsContainer> = async (context) => {
   let projects: IProjectItem[] = [];
   const jwtToken = process.env.JWT_API_TOKEN!;
   if (!jwtToken) {
      console.error('Missing JWT_API_TOKEN, have you added it to environment variables??');
   } else {
      projects = await ProjectsApi.get(jwtToken);
   }

   return {
      props: { projects },
   };
};

export default Index;
export { getStaticProps };
