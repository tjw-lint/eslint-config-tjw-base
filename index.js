import globals from 'globals';
import stylisticJs from '@stylistic/eslint-plugin-js';

export default {
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.nodeBuiltin
    },
    parserOptions: {
      ecmaVersion: 2025,
      sourceType: 'module'
    }
  },
  plugins: {
    '@stylistic/js': stylisticJs
  },
  rules: {
    // (a) => a not a => a
    '@stylistic/js/arrow-parens': [
      'error',
      'always'
    ],
    // () => {} not ()=>{}
    '@stylistic/js/arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    // } else { not }\n else {
    '@stylistic/js/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    // last item in a list should not have a comma at the end
    '@stylistic/js/comma-dangle': [
      'error',
      'never'
    ],
    // [a, b] not [a,b]  or [a ,b]
    '@stylistic/js/comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    // commas go at the end of a line, not the start
    '@stylistic/js/comma-style': [
      'error',
      'last'
    ],
    // allow async-await
    '@stylistic/js/generator-star-spacing': [
      'off'
    ],
    // 2 space indentation (should match .editorconfig)
    '@stylistic/js/indent': [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    // { key: value } not { key:value }
    '@stylistic/js/key-spacing': [
      'error',
      {
        afterColon: true,
        beforeColon: false
      }
    ],
    // { key: value } not {key: value}
    '@stylistic/js/keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    // let a = 1; not let a =     1;
    '@stylistic/js/no-multi-spaces': [
      'error'
    ],
    // No empty lines at top or bottom or file (except 1 EOF for git)
    // and no more than 2 empty returns in a file
    '@stylistic/js/no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxBOF: 0,
        maxEOF: 0
      }
    ],
    // Curly braces start and end should match in a sane way
    '@stylistic/js/object-curly-spacing': [
      'error',
      'always'
    ],
    // Consistent operator placement on multiple lines
    '@stylistic/js/operator-linebreak': [
      'error',
      'after'
    ],
    // Don't have returns as the first or last character in a function or if statement
    '@stylistic/js/padded-blocks': [
      'error',
      'never'
    ],
    // Single quotes are used by ~80% of the JS community
    '@stylistic/js/quotes': [
      'error',
      'single'
    ],
    // Only require quotes around object keys that need them
    '@stylistic/js/quote-props': [
      'error',
      'as-needed'
    ],
    // TC39 strongly reccommends not relying on ASI
    '@stylistic/js/semi': [
      'error',
      'always'
    ],
    // if (a) {} not if (a){}
    '@stylistic/js/space-before-blocks': [
      'error',
      'always'
    ],
    // function name () {} not function name() {}
    '@stylistic/js/space-before-function-paren': [
      'error',
      'always'
    ],
    // a(b) not a( b )
    '@stylistic/js/space-in-parens': [
      'error',
      'never'
    ],
    // 1 + 2 not 1+2
    '@stylistic/js/space-infix-ops': [
      'error'
    ],
    // Comments begin with a space
    '@stylistic/js/spaced-comment': [
      'error',
      'always'
    ],
    // if (a) { a++ } not if (a) a++
    curly: [
      'error'
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
    // Define each variable on it's own line
    'one-var': [
      'error',
      'never'
    ]
  }
};
