import { GetStaticProps } from 'next';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

import { HomePage } from 'components/HomePage';
import { ProjectTagProps } from 'components/common/Project/ProjectTag';
import { GetProjectsDocument, GetProjectsQuery, ProjectEntity } from 'types/graphql';

export const getClient = (jwtToken: string, baseUrl: string) => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            headers: { Authorization: `Bearer ${jwtToken}` },
            uri: `${baseUrl}/graphql`,
            fetch,
        }),
    });
};

type Props = {
    projects: ProjectEntity[];
};

const Index = ({ projects }: Props) => {
    console.log('projects', projects);
    return <HomePage projects={projects} projectTags={[]} />;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    let projects: ProjectEntity[] = [];
    let projectTags: ProjectTagProps[] = [];

    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const jwtToken = process.env.JWT_API_TOKEN;
    if (!jwtToken || !baseUrl) {
        console.error('Missing JWT_API_TOKEN or NEXT_PUBLIC_API_URL have you added it to environment variables??');
        return {
            props: { projects },
        };
    }

    const client = getClient(jwtToken, baseUrl);

    try {
        const { data } = await client.query({
            query: GetProjectsDocument,
        });

        projects = data.projects?.data || [];
    } catch (ex) {
        console.log('ex', ex);
    }

    return {
        props: { projects, projectTags },
    };
};

export default Index;
