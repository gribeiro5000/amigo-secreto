module.exports = {
  extends: ['plugin:prettier/recommended'],

  plugins: ['prettier'],

  rules: {
    'prettier/prettier': 'error',
  },

  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module', // Adicionando sourceType 'module'
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    es6: true,
  },
};