import { GetStaticProps } from 'next';

import { TagsApi } from 'api/tags';
import { ProjectsApi } from 'api/projects';
import { HomePage } from 'components/home-page';
import { IProjectsSection } from 'components/home-page/center-section/projects-section';
import { IProject, IProjectTag } from 'types/project';

interface IIndex {
   projects: IProject[];
   projectTags: IProjectTag[];
}

const Index = ({ projects, projectTags }: IIndex) => {
   return <HomePage projects={projects} projectTags={projectTags} />;
};

const getStaticProps: GetStaticProps<IProjectsSection> = async () => {
   let projects: IProject[] = [];
   let projectTags: IProjectTag[] = [];
   const jwtToken = process.env.JWT_API_TOKEN!;
   if (!jwtToken) {
      console.error('Missing JWT_API_TOKEN, have you added it to environment variables??');
   }

   try {
      projectTags = await TagsApi.get(jwtToken);
   } catch (ex) {
      // console.error('Failed to fetch projects.', ex);
   }

   try {
      projects = await ProjectsApi.get(jwtToken);
   } catch (ex) {
      // console.error('Failed to fetch projects.', ex);
   }

   return {
      props: {
         projects,
         projectTags,
      },
   };
};

export default Index;
export { getStaticProps };
