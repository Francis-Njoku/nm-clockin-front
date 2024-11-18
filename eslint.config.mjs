import tseslint from 'typescript-eslint'
import typescriptParser from '@typescript-eslint/parser'

import globals from 'globals'
import eslint from '@eslint/js'

import typescriptLint from '@typescript-eslint/eslint-plugin'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import node from 'eslint-plugin-node'
import ally from 'eslint-plugin-jsx-a11y'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config(
  // prettier.configs.recommended,
  // react.configs.recommended,
  // node.configs.recommended,
  // typescriptLint.configs.recommended,
  prettierConfig,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{mjs, js,jsx,ts,tsx}'],
    plugins: {
      node: node,
      react: react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      typescript: typescriptLint,
      prettier: prettier,
      ally: ally
    },
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    ignores: ['!/.*', ' /build/', ' /test-config/', ' .vscode', '.history', 'dist'],
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/prop-types': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',
      'react/display-name': 'off',
      'react-hooks/rules-of-hooks': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
    }
  }
)
