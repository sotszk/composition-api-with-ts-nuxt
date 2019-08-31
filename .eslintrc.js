module.exports = {
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
    'plugin:prettier/recommended',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
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