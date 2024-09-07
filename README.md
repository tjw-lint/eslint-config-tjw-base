# eslint-config-tjw-base

The Jared Wilcurt's base ESLint 9+ rules for ESM projects.

For CJS and ESLint < v9, use v2.x releases.


## Using this

1. `npm install --save-dev eslint eslint-config-tjw-base @stylistic/eslint-plugin-js`
1. In your `eslint.config.js` add `tjw-base` to your `extends` like so:
    ```js
    import js from '@eslint/js';
    import tjwBase from 'eslint-config-tjw-base';
    
    export default [
      js.configs.recommended,
      tjwBase,
      {
        // project specific settings
      }
    ];
    ```

If you already have a `no-restricted-syntax` rule, you can merge the ones that come with this config with your own, like so:

```js
// eslint.config.js
import js from '@eslint/js';
import baseRestrictedSyntax from 'eslint-config-tjw-base/no-restricted-syntax.js';
import tjwBase from 'eslint-config-tjw-base';

export default [
  js.configs.recommended,
  tjwBase,
  {
    rules: {
      'no-restricted-syntax': [
        'error',
        ...baseRestrictedSyntax,
        // your custom rules
      ]
    }
  }
];
```


* * *


**See also:**

* [eslint-config-tjw-base](https://github.com/tjw-lint/eslint-config-tjw-base)
* [eslint-config-tjw-import](https://github.com/tjw-lint/eslint-config-tjw-import)
* [eslint-config-tjw-jest](https://github.com/tjw-lint/eslint-config-tjw-jest)
* [eslint-config-tjw-jsdoc](https://github.com/tjw-lint/eslint-config-tjw-jsdoc)
* [eslint-config-tjw-vue](https://github.com/tjw-lint/eslint-config-tjw-vue)
