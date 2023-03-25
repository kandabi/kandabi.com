import { GetStaticProps } from 'next';

// import { ProjectsApi } from 'api/projects';
import { TagsApi } from 'api/tags';
import { HomePage } from 'components/home-page';
import { IProjectCard } from 'components/common/project/project-card';
import { IProjectsContainer } from 'components/home-page/center-section/projects-section/projects-container';
import { IProjectTag } from 'components/common/project/project-tag/project-tag';

interface IIndex {
   projects: IProjectCard[];
   projectTags: IProjectTag[];
}

const Index = ({ projects, projectTags }: IIndex) => {
   return <HomePage projects={projects} projectTags={projectTags} />;
};

const getStaticProps: GetStaticProps<IProjectsContainer> = async () => {
   let projects: IProjectCard[] = [];
   let projectTags: IProjectTag[] = [];
   const jwtToken = process.env.JWT_API_TOKEN!;
   if (!jwtToken) {
      console.error('Missing JWT_API_TOKEN, have you added it to environment variables??');
   }

   try {
      projectTags = await TagsApi.get(jwtToken);
   } catch (ex) {
      console.error('Failed to fetch projects.', ex);
   }

   return {
      props: {
         projects,
         projectTags,
      },
   };

   // try {
   //    projects = await ProjectsApi.get(jwtToken);
   // } catch (ex) {
   //    console.error('Failed to fetch projects.', ex);
   // }

   // return { props: { projects } };
};

export default Index;
export { getStaticProps };
