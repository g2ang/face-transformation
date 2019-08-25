module.exports = {
  hooks: {
    'pre-commit': 'npm run tsc && lint-staged',
  },
};
