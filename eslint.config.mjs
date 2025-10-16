import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    extends: [js.configs.recommended, tseslint.configs.recommended, pluginReact.configs.flat.recommended],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh.configs.vite
    },
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'max-len': [
        'error',
        {
          code: 200,
          ignorePattern: '^(\\s*<path\\s+d="[^"]+"|\\s*<svg\\s+[^>]+>)',
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true
        }
      ]
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
]);
