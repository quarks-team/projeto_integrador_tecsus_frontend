/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,

  env: {
    node: true,
    browser: true,
    es2022: true
  },

  parserOptions: {
    parser: '@typescript-eslint/parser'
  },

  plugins: ['vue', '@typescript-eslint'],

  extends: [
    'plugin:vue/vue3-essential', // Regras essenciais para Vue.js 3
    '@vue/typescript/recommended', // Regras recomendadas para TypeScript no Vue
    'eslint:recommended', // Conjunto de regras recomendadas pelo ESLint
    '@vue/prettier', // Integração com Prettier para formatação
    '@vue/eslint-config-typescript', // Suporte para TypeScript
    '@vue/eslint-config-prettier' // Suporte para Prettier
  ],

  overrides: [
    {
      files: ['*.mjs', '*.ts', '*.tsx', '*.vue', '*.mts'],
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module'
      }
    },
    {
      files: ['*.js', '*.jsx', '*.cjs', '*.cts'],
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'commonjs'
      }
    }
  ],

  ignorePatterns: ['.gitignore'],

  rules: {
    'no-undef': 'on',
    'vue/no-unused-vars': 'on',
    '@typescript-eslint/no-unused-vars': 'on',
    'no-unused-vars': 'on',
    'prefer-rest-params': 'on',
    'prefer-const': 'on',
    '@typescript-eslint/no-this-alias': 'on',
    'no-setter-return': 'on',
    'no-empty': 'on',
    'no-useless-escape': 'on',
    'vue/multi-word-component-names': 'on',
    'no-prototype-builtins': 'on',
    'prefer-spread': 'on'
  }
}
