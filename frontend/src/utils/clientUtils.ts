import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const getApolloClient = (jwtToken: string, baseUrl: string) => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            headers: { Authorization: `Bearer ${jwtToken}` },
            uri: `${baseUrl}/graphql`,
            fetch,
        }),
    });
};
