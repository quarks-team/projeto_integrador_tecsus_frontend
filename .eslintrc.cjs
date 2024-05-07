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

  ignorePatterns: ['*.min.js', '.gitignore'],

  rules: {
    'no-undef': 'off',
    'vue/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    'prefer-rest-params': 'off',
    'prefer-const': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    'no-setter-return': 'off',
    'no-empty': 'off',
    'no-useless-escape': 'off',
    'vue/multi-word-component-names': 'off',
    'no-prototype-builtins': 'off',
    'prefer-spread': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'none',
        printWidth: 120
      }
    ]
  }
}
