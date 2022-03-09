module.exports = {
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    // (a) => a not a => a
    'arrow-parens': [
      'error',
      'always'
    ],
    // } else { not }\n else {
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    // last item in a list should not have a comma at the end
    'comma-dangle': [
      'error',
      'never'
    ],
    // [a, b] not [a,b]  or [a ,b]
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    // commas go at the end of a line, not the start
    'comma-style': [
      'error',
      'last'
    ],
    // if (a) { a++ } not if (a) a++
    curly: [
      'error'
    ],
    // allow async-await
    'generator-star-spacing': [
      'off'
    ],
    // 2 space indentation (should match .editorconfig)
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    // { key: value } not { key:value }
    'key-spacing': [
      'error',
      {
        afterColon: true,
        beforeColon: false
      }
    ],
    // { key: value } not {key: value}
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    // let a = 1; not let a =     1;
    'no-multi-spaces': [
      'error'
    ],
    // No empty lines at top or bottom or file (except 1 EOF for git)
    // and no more than 2 empty returns in a file
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxBOF: 0,
        maxEOF: 0
      }
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'Property[method="true"]',
        message: 'No shortform methods. x: function (). not x()'
      }
    ],
    // Remove unused defined variables
    'no-unused-vars': [
      'error'
    ],
    // Don't reference a variable that is not defined
    'no-undef': [
      'error'
    ],
    // Only allow let and const, no var
    'no-var': [
      'error'
    ],
    // Curly braces start and end should match in a sane way
    'object-curly-spacing': [
      'error',
      'always'
    ],
    // Consistent operator placement on multiple lines
    'operator-linebreak': [
      'error',
      'after'
    ],
    // Define each variable on it's own line
    'one-var': [
      'error',
      'never'
    ],
    // Don't have returns as the first or last character in a function or if statement
    'padded-blocks': [
      'error',
      'never'
    ],
    // Single quotes are used by ~80% of the JS community
    quotes: [
      'error',
      'single'
    ],
    // Only require quotes around object keys that need them
    'quote-props': [
      'error',
      'as-needed'
    ],
    // TC39 strongly reccommends not relying on ASI
    semi: [
      'error',
      'always'
    ],
    // if (a) {} not if (a){}
    'space-before-blocks': [
      'error',
      'always'
    ],
    // function name () {} not function name() {}
    'space-before-function-paren': [
      'error',
      'always'
    ],
    // a(b) not a( b )
    'space-in-parens': [
      'error',
      'never'
    ],
    // 1 + 2 not 1+2
    'space-infix-ops': [
      'error'
    ],
    // Comments begin with a space
    'spaced-comment': [
      'error',
      'always'
    ]
  }
};
