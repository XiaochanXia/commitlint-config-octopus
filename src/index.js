module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'subject-case': [0],
    'scope-max-length': [1, 'always', 20],
  },
};
