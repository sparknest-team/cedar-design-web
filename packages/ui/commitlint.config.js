module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-or-subject-empty': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'type-or-subject-empty': ({ subject, type }) => {
          const types = ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'build', 'ci', 'perf', 'revert']
          return [!!subject && !!type, `请确认你的 commit message 格式为：type(scope?): subject \n可选type: ${types}`]
        },
      },
    },
  ],
}
