import { GetStaticProps } from 'next';

// import { ProjectsApi } from 'api/projects';
import { HomePage } from 'components/home-page';
import { IProjectItem } from 'components/home-page/center-section/projects-section/project-item';
import { IProjectsContainer } from 'components/home-page/center-section/projects-section/projects-container';

const Index = ({ projects }: IProjectsContainer) => {
   return <HomePage projects={projects} />;
};

const getStaticProps: GetStaticProps<IProjectsContainer> = async () => {
   let projects: IProjectItem[] = [];
   const jwtToken = process.env.JWT_API_TOKEN!;
   if (!jwtToken) {
      console.error('Missing JWT_API_TOKEN, have you added it to environment variables??');
   }
   return { props: { projects } };

   // try {
   //    projects = await ProjectsApi.get(jwtToken);
   // } catch (ex) {
   //    console.error('Failed to fetch projects.', ex);
   // }

   // return { props: { projects } };
};

export default Index;
export { getStaticProps };
