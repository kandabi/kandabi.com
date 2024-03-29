import { GetStaticProps } from 'next';

import { HomePage } from 'components/HomePage';
import { GetProjectsDocument, GetProjectsQuery, GetTagsDocument, GetTagsQuery } from 'types/graphql';
import { getApolloClient } from 'utils/clientUtils';

type Props = {
    projectsQuery: GetProjectsQuery;
    tagsQuery: GetTagsQuery;
};

export default function Index({ projectsQuery, tagsQuery }: Props) {
    return <HomePage projectsQuery={projectsQuery} tagsQuery={tagsQuery} />;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    let projectsQuery: GetProjectsQuery = {};
    let tagsQuery: GetTagsQuery = {};

    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const jwtToken = process.env.JWT_API_TOKEN;
    if (!jwtToken || !baseUrl) {
        console.error('Missing JWT_API_TOKEN or NEXT_PUBLIC_API_URL have you added it to environment variables?');
        return {
            props: { projectsQuery, tagsQuery },
        };
    }

    const apolloClient = getApolloClient(jwtToken, baseUrl);

    try {
        const projectsResult = await apolloClient.query({ query: GetProjectsDocument });
        const tagsResult = await apolloClient.query({ query: GetTagsDocument });

        projectsQuery = projectsResult.data;
        tagsQuery = tagsResult.data;
    } catch (ex) {
        console.log('ex', ex);
    }

    return {
        props: { projectsQuery, tagsQuery },
    };
};
