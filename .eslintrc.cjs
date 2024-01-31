module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:eslint-plugin-import/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [],
    rules: {
        '@typescript-eslint/no-var-requires': 0,
        'prettier/prettier': 'warn',
        'import/order': [
            'error',
            {
                pathGroups: [
                    { pattern: 'vue', group: 'builtin' },
                    { pattern: 'vite', group: 'builtin' },
                    { pattern: 'webpack', group: 'builtin' },
                    { pattern: '@/shared/**', group: 'internal' },
                    { pattern: '@/entities/**', group: 'internal' },
                    { pattern: '@/features/**', group: 'internal' },
                    { pattern: '@/widgets/**', group: 'internal' },
                    { pattern: '@/pages/**', group: 'internal' },
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                ],
                'newlines-between': 'never',
                alphabetize: { order: 'asc', caseInsensitive: true },
            },
        ],
        'no-restricted-imports': [
            'error',
            {
                patterns: [
                    {
                        group: [
                            '@/shared/*/*/**/**',
                            '@/entities/*/**',
                            '@/features/*/*/**',
                            '@/widgets/*/**',
                            '@/pages/*/**',
                            '@/app/**',
                        ],
                        message:
                            'Modules outside of this slice/segment can only reference the public API, not the internal file structure of the slice/segment',
                    },
                    {
                        group: [
                            '../**/shared',
                            '../**/entities',
                            '../**/features',
                            '../**/widgets',
                            '../**/pages',
                            '../**/app',
                        ],
                        message: 'Prefer absolute imports instead of relatives',
                    },
                ],
            },
        ],
    },
    overrides: [
        {
            files: ['./src/**/*.ts', './src/**/*.vue'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                '@feature-sliced/eslint-config/rules/layers-slices',
            ],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                sourceType: 'module',
                project: './tsconfig.json',
                tsconfigRootDir: __dirname,
                extraFileExtensions: ['.vue'],
            },
            plugins: ['@typescript-eslint/eslint-plugin', 'vue'],
            rules: {
                'vue/multi-word-component-names': 'off',
                'vue/no-reserved-component-names': 'off',
                'vue/v-slot-style': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
            },
        },
    ],
    settings: {
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
    globals: {
        DEV: true,
        API_URL: true,
    },
};
