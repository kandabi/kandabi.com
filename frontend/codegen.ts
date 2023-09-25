import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    ignoreNoDocuments: true,
    schema: './src/graphql/schema.graphql',
    documents: './src/graphql/*.graphql',
    config: {
        namingConvention: {
            avoidOptionals: true,
            enumValues: 'keep',
        },
    },
    generates: {
        './src/types/': {
            preset: 'client',
            plugins: [],
        },
    },
};

export default config;
