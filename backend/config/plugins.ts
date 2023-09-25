import path from 'path';

export default {
    graphql: {
        config: {
            endpoint: '/graphql',
            shadowCRUD: true,
            playgroundAlways: false,
            generateArtifacts: true,
            artifacts: {
                schema: path.join(__dirname, '..', 'schema.graphql'),
                typegen: path.join(__dirname, '..', 'types.d.ts'),
            },
            depthLimit: 7,
            amountLimit: 100,
            apolloServer: {
                tracing: false,
            },
        },
    },
};
