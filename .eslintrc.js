module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'google',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'arrow-body-style': 'off',
    'accessor-pairs': 'warn',
    'array-bracket-newline': 'off',
    'array-bracket-spacing': 'error',
    'array-callback-return': 'warn',
    'array-element-newline': 'off',
    'block-scoped-var': 'warn',
    'comma-spacing': 'error',
    'func-names': 'warn',
    'jsx-quotes': 'error',
    'func-style': 'error',
    indent: 'off',
    eqeqeq: 'error',
    'linebreak-style': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
  },
};
