const { createConfig } = require('@typescript-eslint/utils');
const globals = require('globals');

module.exports = createConfig({
  files: ['**/*.{js,jsx,ts,tsx}'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: globals.browser,
  },
  rules: {
    // Add your custom rules here
  },
  ignores: ['node_modules/', '.next/', 'out/'],
});
