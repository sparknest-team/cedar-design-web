import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vuePlugin from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

// Mirrors the rule set of the previous .eslintrc.cjs (ESLint 8) so the upgrade to
// flat config does not introduce new violations. Formatting is handled by Prettier.
export default [
  {
    ignores: [
      'dist/**',
      'es/**',
      'lib/**',
      'components/**',
      'types/**',
      'docs/.vuepress/.cache/**',
      'docs/.vuepress/.temp/**',
      'src/_utils/maple/test.ts',
      'src/_utils/pick.ts',
    ],
  },
  {
    files: ['**/*.{js,ts,tsx,vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2022,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
    // ESLint 9 defaults this to "warn"; keep the ESLint 8 behaviour so the upgrade
    // reports exactly the same problems as before.
    linterOptions: { reportUnusedDisableDirectives: 'off' },
    plugins: { vue: vuePlugin, '@typescript-eslint': tsPlugin },
    rules: {
      'no-debugger': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
    },
  },
  {
    files: ['**/__demos__/**', '**/__tests__/**'],
    rules: { 'no-console': 'off' },
  },
]
