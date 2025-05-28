import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser, ecmaVersion: 12, sourceType: 'module' } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  reactHooks.configs['recommended-latest'],
  {
    rules: {
      'react/react-in-jsx-scope': 0
    },
    ignores: ['/node_modules', 'dist'],
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];
