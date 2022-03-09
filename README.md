# eslint-config-tjw-base

The Jared Wilcurt's base ESLint rules


## Using this

1. `npm install --save-dev eslint eslint-config-tjw-base`
1. In your `.eslintrc.js` add `tjw-base` to your `extends` like so:
    ```js
    module.exports = {
      extends: [
        'tjw-base'
      ]
    };
    ```

If you already have a `no-restricted-syntax` rule, you can merge in these with

```js
// .eslintrc.js
const baseRestrictedSyntax = require('eslint-config-tjw-base/no-restricted-syntax.json');

module.exports = {
  extends: [
    'tjw-base'
  ],
  rules: {
    'no-restricted-syntax': [
      'error',
      ...baseRestrictedSyntax,
      // your custom rules
    ]
  }
};
```

* * *

**See also:**

* [eslint-config-tjw-base](https://github.com/tjw-lint/eslint-config-tjw-base)
* [eslint-config-tjw-jest](https://github.com/tjw-lint/eslint-config-tjw-jest)
* [eslint-config-tjw-jsdoc](https://github.com/tjw-lint/eslint-config-tjw-jsdoc)
* [eslint-config-tjw-vue](https://github.com/tjw-lint/eslint-config-tjw-vue)
