module.exports = {
  root: true,
  extends: ["react-app", "react-app/jest"],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'unused-imports'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react-native/no-inline-styles': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-console': 'warn',
        'prefer-const': 'error',
        quotes: ['error', 'single'],
        'jsx-quotes': ['error', 'prefer-double'],
        semi: ['warn', 'always'],
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
              'object',
              'type',
            ],
            'newlines-between': 'never',
          },
        ],
        'react-hooks/exhaustive-deps': 'off',
        'no-useless-escape': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
      },
    },
  ],
};
