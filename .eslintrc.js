const path = require('path')
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'next',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    next: {
      rootDir: '.',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: [path.join(__dirname, 'tsconfig.json')],
      },
    },
  },
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  rules: {
    // react
    'react/function-component-definition': 0,
    'react/no-unused-class-component-methods': 'warn',
    'react/default-props-match-prop-types': 'warn',
    'react/jsx-boolean-value': 'warn',
    'react/self-closing-comp': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'warn',
    'react/destructuring-assignment': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-curly-brace-presence': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    // next
    '@next/next/no-html-link-for-pages': 'off',
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn', // or error
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/lines-between-class-members': 'warn',
    '@typescript-eslint/return-await': 'warn',
    '@typescript-eslint/no-use-before-define': 'off',
    "import/no-extraneous-dependencies": 'off',
    'import/prefer-default-export': 'off',
    'import/newline-after-import': 'warn',
    'consistent-return': 'off',
    'no-empty': 'off',
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-nested-ternary': 'off',
    'no-plusplus': 'off',
    'no-console': 'warn',
    'no-alert': 'off',
    'no-restricted-globals': 'off',
    'no-restricted-exports': 'off',
    'no-restricted-properties': 'off',
    'prefer-destructuring': 'off',
    'arrow-body-style': 'off',
    'prefer-exponentiation-operator': 'off',
    'spaced-comment': 'warn',
    'prefer-template': 'warn',
    'no-else-return': 'warn',
    'no-await-in-loop': 'warn',
    'operator-assignment': 'warn',
    'class-methods-use-this': 'warn',
    'no-continue': 'off',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    'no-lonely-if': 'warn',
    'no-restricted-syntax': 'off',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-has-content': 'warn',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'import/order': 'warn',
    'no-lonely-if': 'off',
    'no-await-in-loop': 'off',
    'no-cond-assign': 'off',
  },
  overrides: [
    {
      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching files!
      env: {
        jest: true,
      },
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
      rules: {
        'import/no-extraneous-dependencies': [
          'off',
          { devDependencies: ['**/?(*.)+(spec|test).[jt]s?(x)'] },
        ],
      },
    },
  ],
  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    'node_modules',
    'public',
    'styles',
    '.next',
    'coverage',
    'dist',
    'build',
  ],
}
