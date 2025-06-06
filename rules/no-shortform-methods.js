/**
 * @noShortformMethods No shortform methods. foo: function (). not foo().
 * @author TheJaredWilcurt
 */

'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------
export default {
  meta: {
    type: 'layout',
    fixable: 'code',
    docs: {
      description: 'Do not use shortform methods.',
      category: 'Stylistic Issues',
      recommended: true,
      url: 'https://eslint.org/docs/developer-guide/working-with-rules'
    },
    schema: []
  },
  create: function (context) {
    return {
      'Property[method="true"]': function (node) {
        context.report({
          node,
          message: 'Use `foo: function ()`, not `foo()`.',
          fix: function (fixer) {
            const sourceCode = context.getSourceCode();

            const keyText = sourceCode.getText(node.key);
            const valueText = sourceCode.getText(node.value);

            const fixedText = keyText + ': function ' + valueText;
            return fixer.replaceText(node, fixedText);
          }
        });
      }
    };
  }
};
