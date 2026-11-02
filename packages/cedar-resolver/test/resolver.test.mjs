import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import test from "node:test";
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";
import ts from "typescript";
import { CedarResolver, resolveCedarComponent } from "../lib/index.js";

const [components, directives] = CedarResolver();

test('standalone icons include motion styles unless disabled', () => {
  const [unstyled] = CedarResolver({ importStyle: false })
  assert.deepEqual(components.resolve('CIconCheck').sideEffects, ['@cedar-design/icons-vue/style.css'])
  assert.equal(unstyled.resolve('CIconCheck').sideEffects, undefined)
})

test("resolves Menu and MenuOption through the menu style entry", () => {
  for (const name of ["Menu", "MenuOption"]) {
    assert.deepEqual(components.resolve(`C${name}`), {
      from: "@cedar-design/ui",
      name: `_${name}Component`,
      sideEffects: ["@cedar-design/ui/menu/style"],
    });
  }
  assert.equal(components.resolve("CDropdownMenu"), undefined);
});

test("ignores browser globals and unknown C-prefixed components", () => {
  for (const name of ["CSS", "CSSStyleSheet", "CSSStyleDeclaration", "CustomEvent", "Cache", "Crypto", "CompressionStream", "CNotARealComponent", "CButtonUnknown"]) {
    assert.equal(components.resolve(name), undefined, name);
  }
  assert.equal(resolveCedarComponent("SS"), undefined);
  assert.equal(resolveCedarComponent("NotARealComponent"), undefined);
  assert.equal(resolveCedarComponent("NotARealFunction", {}, true), undefined);
});

test("the shipped component registry matches actual UI root exports", () => {
  const entry = fileURLToPath(new URL("../../cedar-ui/src/index.ts", import.meta.url));
  const program = ts.createProgram([entry], {
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.NodeJs,
    jsx: ts.JsxEmit.Preserve,
    skipLibCheck: true,
  });
  const checker = program.getTypeChecker();
  const root = checker.getSymbolAtLocation(program.getSourceFile(entry));
  const names = checker.getExportsOfModule(root).map(symbol => symbol.name)
    .filter(name => /^_[A-Z].*Component$/.test(name))
    .map(name => name.slice(1, -9)).sort();
  const registry = JSON.parse(readFileSync(new URL("../src/component-names.json", import.meta.url), "utf8"));
  assert.deepEqual(registry, names, "Update component-names.json when public components change");
});

test("the docs auto-import transform leaves CSS globals untouched", async () => {
  // Use the exact plugin installed by the docs workspace, not a resolver-only mock.
  const requireFromUI = createRequire(new URL("../../cedar-ui/package.json", import.meta.url));
  // require.resolve selects the CJS condition even when passed to import(). Use
  // the package's declared ESM entry so Node 20 does not require ESM-only unimport.
  const manifestPath = requireFromUI.resolve("unplugin-auto-import/package.json");
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
  const { default: AutoImport } = await import(new URL(manifest.exports["./vite"].import, pathToFileURL(manifestPath)).href);
  const plugin = AutoImport({ resolvers: [CedarResolver()], dts: false, eslintrc: { enabled: false } });
  const transform = typeof plugin.transform === "function" ? plugin.transform : plugin.transform.handler;
  const helper = new URL("../../cedar-ui/src/_utils/size-length.ts", import.meta.url);
  const source = readFileSync(helper, "utf8");
  const result = await transform.call({}, source, fileURLToPath(helper));
  assert.equal(result?.code ?? source, source);

  const mixed = "export const check = () => [CSS.supports('width', '1px'), new CSSStyleSheet(), CButton, Message];";
  const transformed = await transform.call({}, mixed, "/src/resolver-regression.ts");
  assert.ok(transformed?.code, "Known components and function APIs must still auto-import");
  assert.match(transformed.code, /_ButtonComponent/);
  assert.match(transformed.code, /@cedar-design\/ui\/button\/style/);
  assert.match(transformed.code, /@cedar-design\/ui\/message\/style/);
  assert.doesNotMatch(transformed.code, /_SS(?:StyleSheet)?Component|\/s-s(?:\/|-style-sheet)/);
});

test("resolves UI components with their styles", () => {
  assert.deepEqual(components.resolve("CProgressGroup"), {
    from: "@cedar-design/ui",
    name: "_ProgressGroupComponent",
    sideEffects: ["@cedar-design/ui/progress-group/style"],
  });

  assert.deepEqual(components.resolve("CButton"), {
    from: "@cedar-design/ui",
    name: "_ButtonComponent",
    sideEffects: ["@cedar-design/ui/button/style"],
  });

  assert.deepEqual(components.resolve("CIcon"), {
    from: "@cedar-design/ui",
    name: "_IconComponent",
    sideEffects: ["@cedar-design/ui/icon/style"],
  });

  assert.deepEqual(components.resolve("CDatePicker"), {
    from: "@cedar-design/ui",
    name: "_DatePickerComponent",
    sideEffects: ["@cedar-design/ui/date/picker/style"],
  });

  assert.deepEqual(components.resolve("CButtonGroup"), {
    from: "@cedar-design/ui",
    name: "_ButtonGroupComponent",
    sideEffects: ["@cedar-design/ui/button/style"],
  });

  assert.deepEqual(components.resolve("CCountdown"), {
    from: "@cedar-design/ui",
    name: "_CountdownComponent",
    sideEffects: ["@cedar-design/ui/countdown/style"],
  });
});

test("maps sub-components to their parent style directory", () => {
  for (const [name, dir] of [
    ["COption", "select"],
    ["CMenuOption", "menu"],
    ["CTypographyText", "typography"],
    ["CStep", "steps"],
    ["CAnchorLink", "anchor"],
    ["CTableColumn", "table"],
    ["CLayoutHeader", "layout"],
    ["CInputGroup", "input"],
    ["CSkeletonLine", "skeleton"],
    ["CImagePreview", "image"],
    ["CCascaderPanel", "cascader"],
  ]) {
    assert.deepEqual(components.resolve(name), {
      from: "@cedar-design/ui",
      name: `_${name.slice(1)}Component`,
      sideEffects: [`@cedar-design/ui/${dir}/style`],
    });
  }
});

test("resolves every public component to an existing style entry", () => {
  const uiRoot = new URL("../../cedar-ui/src/", import.meta.url);
  const componentNames = new Set();

  for (const entry of readdirSync(uiRoot, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    for (const file of ["index.ts", "index.tsx"]) {
      const indexUrl = new URL(`${entry.name}/${file}`, uiRoot);
      if (!existsSync(indexUrl)) continue;
      const source = readFileSync(indexUrl, "utf8");
      for (const match of source.matchAll(
        /\b_([A-Z][A-Za-z0-9]*)Component\b/g,
      )) {
        componentNames.add(match[1]);
      }
    }
  }

  for (const name of componentNames) {
    const result = components.resolve(`C${name}`);
    assert.ok(result, `C${name} should resolve`);
    assert.equal(result.name, `_${name}Component`);
    for (const sideEffect of result.sideEffects ?? []) {
      const stylePath = sideEffect.replace("@cedar-design/ui/", "");
      assert.ok(
        existsSync(new URL(`${stylePath}/index.ts`, uiRoot)),
        `${sideEffect} should exist`,
      );
    }
  }
});

test("every component exposed by CedarVue has a resolver alias", () => {
  const uiRoot = new URL("../../cedar-ui/src/", import.meta.url);
  const cedarVueSource = readFileSync(new URL("cedar-vue.ts", uiRoot), "utf8");
  const publicComponents = new Set();
  const resolverAliases = new Set();

  for (const match of cedarVueSource.matchAll(
    /^import\s+([A-Z][A-Za-z0-9]*)(?:,\s*\{([^}]+)\})?\s+from\s+'\.\/[^']+'/gm,
  )) {
    publicComponents.add(match[1]);
    for (const name of (match[2] ?? "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)) {
      publicComponents.add(name);
    }
  }

  for (const entry of readdirSync(uiRoot, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    for (const file of ["index.ts", "index.tsx"]) {
      const indexUrl = new URL(`${entry.name}/${file}`, uiRoot);
      if (!existsSync(indexUrl)) continue;
      const source = readFileSync(indexUrl, "utf8");
      for (const match of source.matchAll(
        /\b_([A-Z][A-Za-z0-9]*)Component\b/g,
      )) {
        resolverAliases.add(match[1]);
      }
    }
  }

  // Function API exported by cedar-vue, not a component used as <c-image-preview-fn>.
  publicComponents.delete("ImagePreviewFn");

  assert.deepEqual(
    [...publicComponents].filter((name) => !resolverAliases.has(name)).sort(),
    [],
  );
});

test("resolves components without styles with no side effects", () => {
  for (const name of ["CContext", "CStyleProvider"]) {
    assert.deepEqual(components.resolve(name), {
      from: "@cedar-design/ui",
      name: `_${name.slice(1)}Component`,
      sideEffects: undefined,
    });
  }
});

test("resolves SVG icons from the standalone icon package", () => {
  assert.deepEqual(components.resolve("CIconCheckCircleFill"), {
    from: "@cedar-design/icons-vue/icon-check-circle-fill",
    name: "IconCheckCircleFill",
    sideEffects: ['@cedar-design/icons-vue/style.css'],
  });

  assert.deepEqual(components.resolve("CIconFacebookCircleFill"), {
    from: "@cedar-design/icons-vue/icon-facebook-circle-fill",
    name: "IconFacebookCircleFill",
    sideEffects: ['@cedar-design/icons-vue/style.css'],
  });
});

test("resolves programmatic APIs and directives", () => {
  const [autoImports] = CedarResolver();
  for (const [name, style] of [
    ["Dialog", "dialog"],
    ["Drawer", "drawer"],
    ["ImagePreviewFn", "image"],
    ["Message", "message"],
    ["Notification", "notification"],
    ["previewImage", "image"],
  ]) {
    assert.equal(autoImports.resolve(name)?.name, name);
    assert.deepEqual(autoImports.resolve(name)?.sideEffects, [
      `@cedar-design/ui/${style}/style`,
    ]);
  }
  assert.deepEqual(autoImports.resolve("StyleProvider"), {
    from: "@cedar-design/ui",
    name: "StyleProvider",
    sideEffects: undefined,
  });
  assert.deepEqual(directives.resolve("CLoading"), {
    from: "@cedar-design/ui",
    name: "vLoading",
    sideEffects: ["@cedar-design/ui/loading/style"],
  });
  assert.equal(directives.resolve("Loading"), undefined);
  assert.equal(directives.resolve("Tooltip")?.name, "vTooltip");
});

test("can disable styles and directives", () => {
  const [noStyleComponents, noDirectives] = CedarResolver({
    importStyle: false,
    directives: false,
  });
  assert.equal(noStyleComponents.resolve("CButton")?.sideEffects, undefined);
  assert.equal(noDirectives.resolve("CLoading"), undefined);
});

test("can disable programmatic API resolution", () => {
  const [components] = CedarResolver({ autoImport: false });
  assert.equal(components.resolve("Message"), undefined);
});


test('Row and Col resolve independent styles', () => {
  for (const name of ['Row', 'Col']) {
    const resolved = components.resolve('C' + name)
    assert.equal(resolved.name, '_' + name + 'Component')
    assert.deepEqual(resolved.sideEffects, ['@cedar-design/ui/' + name.toLowerCase() + '/style'])
  }
})

test("Color imports its ColorPicker style dependency", () => {
  const [components] = CedarResolver();
  assert.deepEqual(components.resolve("CColor")?.sideEffects, ["@cedar-design/ui/color/style"]);
  const entry = readFileSync(new URL("../../cedar-ui/src/color/style/index.ts", import.meta.url), "utf8");
  assert.match(entry, /import ['"]\.\.\/\.\.\/color-picker\/style['"]/);
});
