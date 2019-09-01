module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  plugins: ['@typescript-eslint'],
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/recommended',
    '@vue/prettier'
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': 1,
    'vue/html-closing-bracket-spacing': 0,
    'vue/html-self-closing': 0,
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
}
