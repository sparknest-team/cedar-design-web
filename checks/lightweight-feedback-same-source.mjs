import { normalizeTypeScript } from "./normalize-source.mjs";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const workspace = fileURLToPath(new URL("../../", import.meta.url));
const cedar = resolve(workspace, "cedar-design-web/packages/cedar-ui/src");
const maple = resolve(workspace, "maple-design-mobile/packages/maple-ui/src");
const read = (root, file) => readFileSync(resolve(root, file), "utf8");
const normalize = (source) =>
  source
    .replaceAll("--c-", "--PREFIX-")
    .replaceAll("--mp-", "--PREFIX-")
    .replaceAll("c-", "PREFIX-")
    .replaceAll("mp-", "PREFIX-")
    .replaceAll("@cedarjs", "@platform")
    .replaceAll("@maplejs", "@platform")
    .replaceAll("../_utils/global-config", "../utils/components")
    .replaceAll("../_utils/maple/elements", "../utils/elements")
    .replaceAll("../_utils/popup-container", "../utils/popup-container")
    .replaceAll("./Message.vue", "./message.vue")
    .replace(/["';,]/g, "")
    .replace(/\s+/g, "");

for (const component of ["loading", "result"]) {
  const cedarSource = read(
    cedar,
    `${component}/${component === "loading" ? "Loading" : "Result"}.vue`,
  );
  const mapleSource = read(
    maple,
    `${component}/${component === "loading" ? "Loading" : "Result"}.vue`,
  );
  const template = (source) =>
    source.match(/<template>[\s\S]*<\/template>/)?.[0];
  assert.equal(
    normalize(template(cedarSource)),
    normalize(template(mapleSource)),
    `${component} template differs`,
  );
}

const normalizeMessageService = (source) =>
  normalize(source)
    .replace("import{getPrefixCls}from../utils/components", "")
    .replace(
      "[getPrefixCls(message-list)`${getPrefixCls(message-list)}-${position}`]",
      "[PREFIX-message-list`PREFIX-message-list-${position}`]",
    );

assert.equal(
  normalize(
    await normalizeTypeScript(read(cedar, "message/use-message-timer.ts")),
  ),
  normalize(
    await normalizeTypeScript(read(maple, "message/use-message-timer.ts")),
  ),
  "message timer differs",
);
for (const file of [
  "types.ts",
  "props.ts",
  "__tests__/timer-lifecycle.spec.ts",
  "__tests__/default-variant.spec.ts",
]) {
  assert.equal(
    normalize(read(cedar, `message/${file}`)),
    normalize(read(maple, `message/${file}`)),
    `message/${file} differs`,
  );
}
assert.equal(
  normalizeMessageService(read(cedar, "message/index.ts")),
  normalizeMessageService(read(maple, "message/index.ts")),
  "message service differs",
);

for (const root of [cedar, maple]) {
  const messageSource = [
    read(root, "message/props.ts"),
    read(root, "message/types.ts"),
    read(root, "message/index.ts"),
  ].join("\n");
  for (const name of [
    "action",
    "pauseOnHover",
    "resetOnUpdate",
    "closeButtonAriaLabel",
    "popupContainer",
    "setDefaultOptions",
    "resetDefaultOptions",
  ]) {
    assert.match(
      messageSource,
      new RegExp(`\\b${name}\\b`),
      `message.${name} is missing`,
    );
  }
  for (const name of [
    "normal",
    "resetOnHover",
    "lockScroll",
    "forbidClick",
    "contentClass",
    "vertical",
    "elevation",
    "_update",
  ]) {
    assert.doesNotMatch(
      messageSource,
      new RegExp(`\\b${name}\\b`),
      `removed message API ${name} remains`,
    );
  }
}

for (const file of [
  "403.tsx",
  "404.tsx",
  "500.tsx",
  "Danger.vue",
  "Empty.vue",
  "Info.vue",
  "Question.vue",
  "Success.vue",
  "Warning.vue",
]) {
  assert.equal(
    normalize(read(cedar, `result/${file}`)),
    normalize(read(maple, `result/${file}`)),
    `result/${file} differs`,
  );
}

const assertContract = (root, component, required, removed) => {
  const sources = [
    read(root, `${component}/props.ts`),
    read(
      root,
      `${component}/${component === "loading" ? "Loading" : "Result"}.vue`,
    ),
  ].join("\n");
  for (const name of required)
    assert.match(
      sources,
      new RegExp(`\\b${name}\\b`),
      `${component}.${name} is missing`,
    );
  for (const name of removed) {
    assert.doesNotMatch(
      sources,
      new RegExp(`\\n\\s*${name}\\s*:`),
      `${component}.${name} prop remains`,
    );
    assert.doesNotMatch(
      sources,
      new RegExp(`name=["']${name}["']`),
      `${component}.${name} slot remains`,
    );
  }
};

for (const root of [cedar, maple]) {
  assertContract(
    root,
    "loading",
    ["type", "size", "radius", "color", "loading", "tip", "hideIcon", "icon"],
    ["dot", "element"],
  );
  assertContract(
    root,
    "result",
    [
      "status",
      "title",
      "subtitle",
      "imageSize",
      "animation",
      "icon",
      "extra",
      "default",
    ],
    ["footer"],
  );
}

const tokenSuffixes = (root, component, prefix) =>
  [
    ...read(root, `${component}/style/token.less`).matchAll(
      new RegExp(`--${prefix}-${component}-([\\w-]+):`, "g"),
    ),
  ]
    .map((match) => match[1])
    .sort();
const requiredTokens = {
  loading: [
    "color",
    "directive-z-index",
    "indicator-size",
    "opacity",
    "overlay-background",
  ],
  result: [
    "background",
    "border-radius",
    "content-margin",
    "extra-margin",
    "image-size",
    "padding",
    "subtitle-color",
    "subtitle-font-size",
    "subtitle-line-height",
    "subtitle-margin",
    "title-color",
    "title-font-size",
    "title-font-weight",
    "title-margin",
  ],
};
for (const component of ["loading", "result"]) {
  for (const suffix of requiredTokens[component]) {
    assert(
      tokenSuffixes(cedar, component, "c").includes(suffix),
      `Cedar ${component} token ${suffix} is missing`,
    );
    assert(
      tokenSuffixes(maple, component, "mp").includes(suffix),
      `Maple ${component} token ${suffix} is missing`,
    );
  }
}

console.log(
  "Loading/Result and Message parity passed: feedback views, Message service/timer/contracts, graphics and tokens match.",
);
