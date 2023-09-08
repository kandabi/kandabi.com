import { GetStaticProps } from 'next';
import { HomePage } from 'components/HomePage';
import { ProjectsSectionProps } from 'components/HomePage/CenterSection/ProjectsSection';
import { ProjectProps } from 'components/common/Project/ProjectCard';
import { ProjectTagProps } from 'components/common/Project/ProjectTag';
import { ProjectsApi } from 'api/projects';
import { TagsApi } from 'api/tags';

export const getStaticProps: GetStaticProps<ProjectsSectionProps> = async () => {
    let projects: ProjectProps[] = [];
    let projectTags: ProjectTagProps[] = [];
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

interface Props {
    projects: ProjectProps[];
    projectTags: ProjectTagProps[];
}

const Index = ({ projects, projectTags }: Props) => {
    return <HomePage projects={projects} projectTags={projectTags} />;
};

export default Index;
