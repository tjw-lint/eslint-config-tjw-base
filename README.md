# eslint-config-tjw-base

The Jared Wilcurt's base ESLint 10+ rules for ESM projects.

**Release notes:**

* v1 - CJS and ESLint < v9
* v2 - CJS and ESLint < v9
* v3 - ESLint v9
* v4 - ESLint v9
* v5 - ESLint v10, Stylistic v4 or v5
* v6 - ESLint v10, Stylistic v6


## Using this

1. If you don't have a `package.json` do `npm init -y` first
1. Run `npm pkg set type=module`
1. Run `npm install --save-dev eslint eslint-config-tjw-base @stylistic/eslint-plugin`
   * **Requires:**
      * `eslint` >=10.0.0
      * `@stylistic/eslint-plugin` >=6.0.0
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
* [eslint-config-tjw-import](https://github.com/tjw-lint/eslint-config-tjw-import) (ESLint <10)
* [eslint-config-tjw-import-x](https://github.com/tjw-lint/eslint-config-tjw-import-x) (ESLint 10+)
* [eslint-config-tjw-jest](https://github.com/tjw-lint/eslint-config-tjw-jest)
* [eslint-config-tjw-jsdoc](https://github.com/tjw-lint/eslint-config-tjw-jsdoc)
* [eslint-config-tjw-vue](https://github.com/tjw-lint/eslint-config-tjw-vue)
