module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        // https://github.com/stylelint/stylelint/issues/1612
        ignoreAtRules: ['each', 'for', 'function', 'if', 'include', 'mixin'],
      },
    ],
    'declaration-no-important': true,
  },
};
