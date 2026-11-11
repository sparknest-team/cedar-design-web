import { mergeConfig } from "vite";
import base from "./vitest.config";
export default mergeConfig(base, {
  test: {
    include: ["src/scheduler/__tests__/*.test.tsx"],
    coverage: {
      include: ["src/scheduler/**/*.{ts,vue}"],
      exclude: ["**/__tests__/**", "**/__demos__/**", "**/style/**"],
      all: true,
      reporter: ["text", "json-summary"],
      reportsDirectory: "./coverage/scheduler",
    },
  },
});
