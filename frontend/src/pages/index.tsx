import { GetStaticProps } from 'next';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

import { HomePage } from 'components/HomePage';
import { GetProjectsDocument, GetProjectsQuery, GetTagsDocument, GetTagsQuery } from 'types/graphql';

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
    projectsQuery?: GetProjectsQuery;
    tagsQuery?: GetTagsQuery;
};

const Index = ({ projectsQuery, tagsQuery }: Props) => {
    return <HomePage projectsQuery={projectsQuery} tagsQuery={tagsQuery} />;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    let projectsQuery: GetProjectsQuery | undefined;
    let tagsQuery: GetTagsQuery | undefined;

    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const jwtToken = process.env.JWT_API_TOKEN;
    if (!jwtToken || !baseUrl) {
        console.error('Missing JWT_API_TOKEN or NEXT_PUBLIC_API_URL have you added it to environment variables?');
        return {
            props: {},
        };
    }

    const client = getClient(jwtToken, baseUrl);

    try {
        const projectsResult = await client.query({ query: GetProjectsDocument });
        const tagsResult = await client.query({ query: GetTagsDocument });

        projectsQuery = projectsResult.data;
        tagsQuery = tagsResult.data;
    } catch (ex) {
        console.log('ex', ex);
    }

    return {
        props: { projectsQuery, tagsQuery },
    };
};

export default Index;
