module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [0], // subject ingore case
    // open scope max-length validation, but the max-length is 20
    'scope-max-length': [1, 'always', 20],
  },
};
