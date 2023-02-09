import { GetStaticProps } from 'next';
import axios from 'axios';

import { HomePage } from 'components/home-page';
import { ProjectsApi } from 'api/projects';
import { IProjectItem } from 'components/home-page/projects-about-section/project-item';
import { IProjectsContainer } from 'components/home-page/projects-about-section/projects-container';

const Index = ({ projects }: IProjectsContainer) => {
   return <HomePage projects={projects} />;
};

const getStaticProps: GetStaticProps<IProjectsContainer> = async (context) => {
   const jwtToken = process.env.JWT_API_TOKEN;
   if (!jwtToken) {
      throw new Error('Missing JWT_API_TOKEN, have you added it to .env?');
   }

   const projects = await ProjectsApi.get(jwtToken);

   return {
      props: { projects },
   };
};

export default Index;
export { getStaticProps };
