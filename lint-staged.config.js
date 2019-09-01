module.exports = {
  '*.{ts,tsx}': [
    'eslint --fix',
    'prettier --write',
    'git add',
    'craco test --watchAll=false --bail --findRelatedTests',
  ],
  '*.{css,scss}': ['stylelint'],
};
