import { normalizeTypeScript } from "./normalize-source.mjs";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const workspace = fileURLToPath(new URL("../../", import.meta.url));
const cedar = resolve(workspace, "cedar-design-web/packages/cedar-ui/src/rate");
const maple = resolve(
  workspace,
  "maple-design-mobile/packages/maple-ui/src/rate",
);

for (const file of ["props.ts", "__tests__/same-source.spec.ts"]) {
  assert.equal(
    readFileSync(resolve(cedar, file), "utf8"),
    readFileSync(resolve(maple, file), "utf8"),
    `${file} differs`,
  );
}

const behavior = async (root) => {
  const source = readFileSync(resolve(root, "rate-core.tsx"), "utf8");
  const start = source.search(
    /const\s+\{[^}]+\}\s*=\s*createNamespace\(['"]rate['"]\)/,
  );
  assert.ok(
    start >= 0,
    "Rate implementation marker is missing; never compare an empty slice",
  );
  return normalizeTypeScript(source.slice(start));
};
assert.equal(
  await behavior(cedar),
  await behavior(maple),
  "rate-core.tsx behavior differs",
);

console.log(
  "Rate parity passed: shared behavior, props and precedence; only package imports differ.",
);
