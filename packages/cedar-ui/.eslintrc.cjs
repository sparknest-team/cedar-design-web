module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2022,
    sourceType: "module",
    extraFileExtensions: [".vue"],
  },
  plugins: ["vue", "@typescript-eslint"],
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  rules: {
    "no-debugger": "error",
    "no-console": ["error", { allow: ["warn", "error"] }],
  },
  overrides: [
    {
      files: ["**/__demos__/**", "**/__tests__/**"],
      rules: { "no-console": "off" },
    },
  ],
  ignorePatterns: [
    "dist",
    "es",
    "lib",
    "components",
    "docs/.vuepress/.cache",
    "docs/.vuepress/.temp",
    "src/_utils/maple/test.ts",
    "src/_utils/pick.ts",
  ],
};
