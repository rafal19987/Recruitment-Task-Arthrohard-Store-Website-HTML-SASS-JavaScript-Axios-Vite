module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',

  overrides: [
    {
      ecmaFeatures: {
        modules: true,
        spread: true,
        restParams: true,
      },
    },
    {
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      files: ['.eslintrc.{js,cjs}', '*.js'],
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 2,
    'no-undef': 2,
  },
};
