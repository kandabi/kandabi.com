import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: 'http://127.0.0.1:8118/graphql',
    documents: 'src/**/*.tsx',
    config: {
        namingConvention: {
            avoidOptionals: true,
            enumValues: 'keep',
        },
        noSchema: true,
    },
    generates: {
        'src/graphql/': {
            preset: 'client',
            plugins: [],
        },
    },
};

export default config;
