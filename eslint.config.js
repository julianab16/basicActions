import eslintPluginJest from 'eslint-plugin-jest';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        exports: 'writable',
        module: 'writable',
        require: 'readonly',
      }
    },
    rules: {
      'complexity': ['warn', 10],
      'no-unused-vars': 'warn',
    }
  },
  {
    files: ['**/*.test.js', '**/tests/**/*.js'],
    plugins: {
      jest: eslintPluginJest
    },
    languageOptions: {
      globals: {
        ...eslintPluginJest.environments.globals.globals,
      }
    },
    rules: {
      ...eslintPluginJest.configs.recommended.rules,
    }
  }
];