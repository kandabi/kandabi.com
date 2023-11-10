import { GetStaticProps } from 'next';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

import { HomePage } from 'components/HomePage';
import { ProjectsSectionProps } from 'components/HomePage/CenterSection/ProjectsSection';
import { ProjectProps } from 'components/common/Project/ProjectCard';
import { ProjectTagProps } from 'components/common/Project/ProjectTag';
import { GetProjectsDocument, GetProjectsQuery } from 'types/graphql';

export const getGqlClient = (jwtToken: string, baseUrl: string) => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            headers: { Authorization: `Bearer ${jwtToken}` },
            uri: `${baseUrl}/graphql`,
            fetch,
        }),
    });
};

interface Props {
    projects?: GetProjectsQuery;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    let projects: GetProjectsQuery | undefined = undefined;
    let projectTags: ProjectTagProps[] = [];

    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const jwtToken = process.env.JWT_API_TOKEN;
    if (!jwtToken || !baseUrl) {
        console.error('Missing JWT_API_TOKEN or NEXT_PUBLIC_API_URL have you added it to environment variables??');
        return {
            props: {},
        };
    }

    const gqlClient = getGqlClient(jwtToken, baseUrl);

    try {
        const { data } = await gqlClient.query({
            query: GetProjectsDocument,
        });

        projects = data;
    } catch (ex) {
        console.log('ex', ex);
    }

    return {
        props: { projects, projectTags },
    };
};

const Index = ({ projects }: Props) => {
    return <HomePage projects={[]} projectTags={[]} />;
};

export default Index;
