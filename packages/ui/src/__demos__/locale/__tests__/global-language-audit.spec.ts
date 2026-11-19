// @vitest-environment node
import { globSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { parse, compileScript, compileTemplate } from "@vue/compiler-sfc";
import { parse as parseTemplate } from "@vue/compiler-dom";
import ts from "typescript";
import { describe, expect, it } from "vitest";
import normalizedDemos from "./normalized-demos.json";

const root = resolve(import.meta.dirname, "../../../..");
function bilingual(value: string) {
  const parts = value.trim().split(" / ");
  if (parts.length !== 2) return false;
  const chinese = /\p{Script=Han}/u;
  if (["Enter", "Space", "Tab", "Home", "End"].includes(parts[0])) return false;
  return (
    (chinese.test(parts[0]) &&
      !chinese.test(parts[1]) &&
      /[A-Za-z]/.test(parts[1])) ||
    (chinese.test(parts[1]) &&
      !chinese.test(parts[0]) &&
      /[A-Za-z]/.test(parts[0]))
  );
}
const languageName = /^(?:english|isEnglish|isEn|lang|language|locale)$/i;

const siteLanguages = new Set(["zh-CN", "en-US"]);
const equalityOperators = new Set<ts.SyntaxKind>([
  ts.SyntaxKind.EqualsEqualsToken,
  ts.SyntaxKind.EqualsEqualsEqualsToken,
  ts.SyntaxKind.ExclamationEqualsToken,
  ts.SyntaxKind.ExclamationEqualsEqualsToken,
]);

function inspectScript(code: string, report: (reason: string) => void) {
  const tree = ts.createSourceFile(
    "demo.tsx",
    code,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  function script(node: ts.Node) {
    if (
      (ts.isStringLiteral(node) ||
        ts.isNoSubstitutionTemplateLiteral(node)) &&
      bilingual(node.text)
    )
      report("mixed bilingual literal");
    if (ts.isIdentifier(node) && languageName.test(node.text))
      report(`local language identifier ${node.text}`);
    if (
      ts.isCallExpression(node) &&
      ts.isIdentifier(node.expression) &&
      ["useLocale", "addI18nMessages"].includes(node.expression.text)
    )
      report("local language mutation");
    if (
      ts.isBinaryExpression(node) &&
      equalityOperators.has(node.operatorToken.kind) &&
      [node.left, node.right].some(
        (operand) => ts.isStringLiteralLike(operand) && siteLanguages.has(operand.text),
      )
    )
      report("local language comparison: read demo copy through useDemoLocale(scope)");
    ts.forEachChild(node, script);
  }
  script(tree);
}

describe("all component demos follow the global language", () => {
  it.each([
    "english.value = language === 'en-US'",
    "watch(getLocale, (next) => { active.value = next === 'en-US' })",
    "'zh-CN' !== getLocale() ? first : second",
  ])("rejects a local language comparison in %s", (code) => {
    const reasons: string[] = [];
    inspectScript(code, (reason) => reasons.push(reason));
    expect(reasons).toContain("local language comparison: read demo copy through useDemoLocale(scope)");
  });

  it("contains no local language selectors, bilingual DOM, or browser-dependent formatting", () => {
    const violations: string[] = [];
    const files = globSync("src/**/__demos__/**/*.vue", { cwd: root });
    expect(files.length).toBeGreaterThan(1000);
    for (const file of files) {
      const source = readFileSync(resolve(root, file), "utf8");
      const { descriptor } = parse(source, { filename: file });
      function report(reason: string) {
        violations.push(`${file}: ${reason}`);
      }
      for (const style of descriptor.styles) {
        if (/\[lang\s*[=|]/.test(style.content)) report("CSS language branch");
      }
      function template(node: any) {
        if (node.type === 5) inspectScript(node.content.content, report);
        if (
          node.type === 2 &&
          (bilingual(node.content) ||
            /[。！？]\s*[A-Za-z][A-Za-z]+(?:\s+\w+){2}/.test(node.content))
        )
          report("mixed bilingual text");
        for (const prop of node.props ?? []) {
          if (prop.type === 7 && prop.exp) inspectScript(prop.exp.content, report);
          const name = prop.type === 6 ? prop.name : prop.arg?.content;
          if (prop.type === 6 && prop.value && bilingual(prop.value.content))
            report("mixed bilingual attribute");
          if (
            name === "lang" &&
            /^(?:zh-CN|en-US)$/.test(prop.value?.content ?? "")
          )
            report("bilingual DOM");
          if (languageName.test(name ?? "") && name !== "lang")
            report("language passed to a demo/component");
        }
        for (const child of node.children ?? []) template(child);
      }
      if (descriptor.template)
        template(parseTemplate(descriptor.template.content));
      for (const block of [descriptor.scriptSetup, descriptor.script])
        if (block) inspectScript(block.content, report);
      if (/\.toLocale(?:DateString|TimeString|String)\s*\(/.test(source))
        report("formatting bypasses the global locale");
    }
    expect(violations).toEqual([]);
  }, 120_000);

  it.each(normalizedDemos)("compiles the migrated example %s", (file) => {
    const { descriptor, errors } = parse(
      readFileSync(resolve(root, file), "utf8"),
      { filename: file },
    );
    expect(errors).toEqual([]);
    const script = compileScript(descriptor, { id: file });
    const template = compileTemplate({
      source: descriptor.template!.content,
      filename: file,
      id: file,
      compilerOptions: { bindingMetadata: script.bindings },
    });
    expect(template.errors).toEqual([]);
  });
});
