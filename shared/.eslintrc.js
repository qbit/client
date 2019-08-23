module.exports = {
  env: {es6: true},
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'standard', 'standard-react'],
  overrides: [
    {
      files: ['*.tsx', '*.ts', '*.d.ts'],
      rules: {
        'no-undef': 'off', // ts itself will catch this
        'no-unused-vars': 'off', // ts itself will catch this
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {jsx: true},
    babelOptions: {
      configFile: __dirname + '/babel.config.js',
    },
  },
  globals: {
    requestAnimationFrame: 'readonly',
    cancelAnimationFrame: 'readonly',
    __DEV__: false,
    __STORYBOOK__: false,
    __STORYSHOT__: false,
  },
  plugins: ['filenames', 'babel', 'import', 'react-hooks'],
  settings: {
    'import/core-modules': ['electron', 'react-native'],
    'import/extensions': ['.js', '.tsx', '.d.ts', '.native.tsx', '.desktop.tsx', '.native.js', '.desktop.js'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.tsx', '.d.ts', '.native.tsx', '.desktop.tsx', '.native.js', '.desktop.js'],
      },
    },
  },
  rules: {
    'babel/func-params-comma-dangle': 'off',
    'babel/no-unused-expressions': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'dot-notation': 'off',
    'filenames/match-regex': ['error', '^[0-9a-z-.]+(\\.desktop|\\.native|\\.ios|\\.android)?$'],
    'func-call-spacing': 'off',
    'generator-star-spacing': 'off',
    'import/export': 'error',
    'import/imports-first': 'error',
    'import/named': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'jsx-quotes': 'off',
    'lines-between-class-members': 'off',
    'no-duplicate-imports': 'off',
    'no-empty': 'off',
    'no-extra-semi': 'off',
    'no-mixed-operators': 'off',
    'no-unused-expressions': 'off',
    'no-useless-return': 'off',
    'object-curly-even-spacing': 'off',
    'object-curly-spacing': 'off',
    'prefer-const': 'warn',
    'promise/param-names': 'off',
    'quote-props': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-fragments': 'off',
    'react/jsx-handler-names': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-key': 'error',
    'react/jsx-no-bind': ['error', {allowArrowFunctions: true}],
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-space-before-closing': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-danger': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'off',
    'react/no-direct-mutation-state': 'error',
    'react/no-is-mounted': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unused-prop-types': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'sort-keys': ['error', 'asc', {caseSensitive: true, natural: false}],
    'space-before-function-paren': 'off',
    'standard/array-bracket-even-spacing': 'off',
    'standard/computed-property-even-spacing': ['error', 'never'],
    'standard/no-callback-literal': 'off',
    'yield-star-spacing': 'off',
    camelcase: 'off',
    curly: 'off',
    indent: 'off',
    quotes: 'off',
    strict: ['error', 'global'],
  },
}
