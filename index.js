// JS
module.exports = {
  'parserOptions': {
    'sourceType': 'module'
  },
  'env': {
    'browser': true,
    'node': true
  },
  'rules': {
    'arrow-parens': [
      'off'
    ],
    'brace-style': [
      'error',
      '1tbs',
      {
        'allowSingleLine': true
      }
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    'comma-spacing': [
      'error',
      {
        'before': false,
        'after': true
      }
    ],
    'comma-style': [
      'error',
      'last'
    ],
    'curly': [
      'error'
    ],
    // allow async-await
    'generator-star-spacing': [
      'off'
    ],
    // 2 space indentation (should match .editorconfig)
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1
      }
    ],
    'keyword-spacing': [
      'error',
      {
        'before': true,
        'after': true
      }
    ],
    // allow debugger during development
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multi-spaces': [
      'error'
    ],
    'no-unused-vars': [
      'error'
    ],
    'no-undef': [
      'error'
    ],
    // Only allow let and const, no var
    'no-var': [
      'error'
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'one-var': [
      'error',
      'never'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'space-before-blocks': [
      'error',
      'always'
    ],
    'space-before-function-paren': [
      'error',
      'always'
    ],
    'space-in-parens': [
      'error',
      'never'
    ],
    'space-infix-ops': [
      'error'
    ],
    'spaced-comment': [
      'error',
      'always'
    ]
  }
};
