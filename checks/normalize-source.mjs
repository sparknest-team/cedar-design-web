import { createRequire } from "node:module";
import { normalizeBoundImports } from "./normalize-bound-imports.mjs";

const require = createRequire(
  new URL("../packages/ui/package.json", import.meta.url),
);
const ts = require("typescript");
const prettier = require("prettier");

/** Map only the known platform-specific empty-value import, never literals. */
export function normalizeSelectionEmptyValueImports(source, vue = false) {
  if (vue) {
    return source.replace(/(<script\b[^>]*>)([\s\S]*?)(<\/script>)/g,
      (_, start, script, end) => start + normalizeSelectionEmptyValueImports(script) + end)
  }
  const file = ts.createSourceFile('source.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
  const replacements = []
  for (const node of file.statements) {
    if (!ts.isImportDeclaration(node) || !ts.isStringLiteral(node.moduleSpecifier)) continue
    const specifier = node.moduleSpecifier
    const mapped = specifier.text.replace(/^((?:\.\.\/)+)_utils\/empty-value$/, '$1utils/empty-value')
    if (mapped !== specifier.text) replacements.push({ start: specifier.getStart(file) + 1, end: specifier.end - 1, mapped })
  }
  for (const { start, end, mapped } of replacements.reverse()) source = source.slice(0, start) + mapped + source.slice(end)
  return source
}

/** Canonicalize formatter-only differences; retain literals, operators and control flow. */
export async function normalizeTypeScript(source, { sortBoundImports = true } = {}) {
  let file = ts.createSourceFile(
    "source.tsx",
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  let tsx = true
  if (file.parseDiagnostics.length) {
    const plain = ts.createSourceFile('source.ts', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
    if (!plain.parseDiagnostics.length) {
      file = plain
      tsx = false
    }
  }
  if (file.parseDiagnostics.length) {
    throw new Error("Cannot compare invalid TypeScript source");
  }
  const result = ts.transform(file, [
    (context) => {
      const block = (statement) =>
        ts.isBlock(statement)
          ? statement
          : ts.factory.createBlock([statement], true);
      const visit = (node) => {
        node = ts.visitEachChild(node, visit, context);
        if (ts.isIfStatement(node)) {
          return ts.factory.updateIfStatement(
            node,
            node.expression,
            block(node.thenStatement),
            node.elseStatement ? block(node.elseStatement) : undefined,
          );
        }
        return node;
      };
      return (node) => ts.visitNode(node, visit);
    },
  ]);
  try {
    const printed = ts
      .createPrinter({ removeComments: true })
      .printFile(result.transformed[0]);
    const formatted = await prettier.format(printed, {
      parser: "typescript",
      filepath: tsx ? "source.tsx" : "source.ts",
      singleQuote: true,
      semi: false,
      printWidth: 100,
      objectWrap: "collapse",
    });
    return sortBoundImports ? normalizeBoundImports(formatted) : formatted;
  } finally {
    result.dispose();
  }
}

/** Canonicalize Less formatting while preserving selectors, values and quoted content. */
export async function normalizeLessSource(source) {
  return await prettier.format(source, { parser: 'less', singleQuote: true, printWidth: 100 })
}

export async function normalizeVueSource(source) {
  return normalizeBoundImports(await prettier.format(source, { parser: 'vue', singleQuote: true, semi: false, printWidth: 100, objectWrap: 'collapse' }))
}

/** Canonicalize SFC script syntax while retaining the formatted template. */
export async function normalizeVueSyntaxSource(source, options = {}) {
  const formatted = await prettier.format(source, { parser: 'vue', singleQuote: true, semi: false, printWidth: 100, objectWrap: 'collapse' })
  const pattern = /(<script\b[^>]*>)([\s\S]*?)(<\/script>)/g
  const matches = [...formatted.matchAll(pattern)]
  let result = formatted
  for (const match of matches.reverse()) {
    const script = await normalizeTypeScript(match[2], options)
    result = result.slice(0, match.index) + match[1] + script + match[3] + result.slice(match.index + match[0].length)
  }
  return result
}
