module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'next',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier', 'react'],
  root: true,
  settings: {
    next: {
      rootDir: 'client/'
    },
    react: {
      version: 'detect'
    }
  },
  rules: {
    '@next/next/no-html-link-for-pages': ['error', 'client/app/'],
    'react/prop-types': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'no-empty-function': 'warn',
    'no-unused-vars': 'warn',
    'no-vars-requires': 'warn',
    'react/display-name': 'off',
    'import/no-anonymous-default-export': 'off'
  }
}
