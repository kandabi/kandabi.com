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
        maybeValue: 'T | undefined',
    },
    generates: {
        './src/types/graphql.ts': {
            plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
        },
    },
};

export default config;
