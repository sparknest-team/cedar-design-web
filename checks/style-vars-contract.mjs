import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { checkThemeContract } from "@ui-foundation/theme-contract/checker";

const workspace = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const result = checkThemeContract({
  cedarSource: resolve(workspace, "cedar-design-web/packages/cedar-ui/src"),
  mapleSource: resolve(workspace, "maple-design-mobile/packages/maple-ui/src"),
});

console.log(
  `Style variable contract passed: ${result.systemCount} shared system tokens, ` +
    `${result.componentCount} component contracts, and no unresolved system references.`,
);
