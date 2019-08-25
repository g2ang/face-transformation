module.exports = {
  '*.{ts,tsx}': [
    'prettier --write',
    'git add',
    'craco test --watchAll=false --bail --findRelatedTests',
  ],
  '*.{css,scss}': ['stylelint'],
};
