import { normalizeTypeScript } from "./normalize-source.mjs";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const workspace = fileURLToPath(new URL("../../", import.meta.url));
const cedar = resolve(
  workspace,
  "cedar-design-web/packages/ui/src/ripple",
);
const maple = resolve(
  workspace,
  "maple-design-mobile/packages/ui/src/ripple",
);
const implementation = async (root) => {
  const source = readFileSync(resolve(root, "index.ts"), "utf8");
  const start = source.indexOf("const { n }");
  assert.ok(start >= 0, "Ripple implementation marker is missing");
  return normalizeTypeScript(source.slice(start));
};
assert.equal(
  await implementation(cedar),
  await implementation(maple),
  "Ripple directive behavior differs",
);

const normalizeStyle = (source) =>
  source
    .replaceAll("mp-ripple", "PREFIX-ripple")
    .replaceAll("c-ripple", "PREFIX-ripple")
    .replaceAll("--mp-ripple-", "--PREFIX-ripple-")
    .replaceAll("--c-ripple-", "--PREFIX-ripple-")
    .replace(/var\(~?['"]?(--PREFIX-ripple-[\w-]+)['"]?\)/g, "var($1)")
    .replace(/z-index:\s*[^;]+;/g, "")
    .replace(/\s+/g, "");
const cedarStyle = readFileSync(
  resolve(cedar, "style/index.less"),
  "utf8",
).replace(/@import[^;]+;/g, "");
const mapleStyle = readFileSync(resolve(maple, "style/ripple.less"), "utf8")
  .replace(/:root\s*\{[\s\S]*?\}/, "")
  .replace(/@import[^;]+;/g, "");
assert.equal(
  normalizeStyle(cedarStyle),
  normalizeStyle(mapleStyle),
  "Ripple style rules differ",
);
for (const [root, compiler, prefix] of [
  [cedar, "node_modules/less/package.json", "c"],
  [maple, "../cli/node_modules/less/package.json", "mp"],
]) {
  const less = createRequire(resolve(root, "../..", compiler))("./");
  const filename = resolve(root, "style/index.less");
  const { css } = await less.render(readFileSync(filename, "utf8"), {
    filename,
  });
  assert.ok(css.includes("." + prefix + "-ripple"));
  assert.ok(css.includes("--" + prefix + "-ripple-expand-duration:"));
  assert.ok(css.includes("var(--" + prefix + "-ripple-expand-duration)"));
}
console.log(
  "Ripple parity passed: shared directive behavior and visual rules; token defaults remain platform-specific.",
);
