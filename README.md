# eslint-config-tjw-base

The Jared Wilcurt's base ESLint 9+ rules for ESM projects.

For CJS and ESLint < v9, use v2.x releases.


## Using this

1. If you don't have a `package.json` do `npm init -y` first
1. Run `npm pkg set type=module`
1. Run `npm install --save-dev eslint eslint-config-tjw-base @stylistic/eslint-plugin-js`
1. In your `eslint.config.js` add `tjwBase` to your config like so:
    ```js
    import js from '@eslint/js';
    import tjwBase from 'eslint-config-tjw-base';
    
    export default [
      js.configs.recommended,
      tjwBase.configs.recommended,
      {
        // project specific settings
      }
    ];
    ```
1. Run `npm pkg set scripts.lint="eslint *.js src"`
   * Change `*.js src` to your files and folders you want to be linted
1. Run `npm run lint`


* * *


**See also:**

* [eslint-config-tjw-base](https://github.com/tjw-lint/eslint-config-tjw-base)
* [eslint-config-tjw-import](https://github.com/tjw-lint/eslint-config-tjw-import)
* [eslint-config-tjw-jest](https://github.com/tjw-lint/eslint-config-tjw-jest)
* [eslint-config-tjw-jsdoc](https://github.com/tjw-lint/eslint-config-tjw-jsdoc)
* [eslint-config-tjw-vue](https://github.com/tjw-lint/eslint-config-tjw-vue)
