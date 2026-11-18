// @vitest-environment node
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, relative, resolve } from "node:path";
import { beforeAll, expect, it } from "vitest";
import ts from "typescript";
import Themes from "../../themes";

const root = resolve(process.cwd(), "src");
const less = createRequire(resolve(process.cwd(), "package.json"))("less");
const walk = (directory: string): string[] =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filename = resolve(directory, entry.name);
    return entry.isDirectory() ? walk(filename) : [filename];
  });
const files = walk(root).filter(
  (file) => !/\/(example|docs|__tests__|__demos__|themes)\//.test(file),
);
const references = (value: string) =>
  [...value.matchAll(/var\(\s*(--[\w-]+)\s*([,)])/g)].map(
    ([, name, delimiter]) => ({
      name,
      fallback: delimiter === ",",
    }),
  );

const withoutScriptComments = (source: string) => {
  const strip = (script: string) => {
    const scanner = ts.createScanner(
      ts.ScriptTarget.Latest,
      false,
      ts.LanguageVariant.JSX,
      script,
    );
    const comments: [number, number][] = [];
    for (
      let kind = scanner.scan();
      kind !== ts.SyntaxKind.EndOfFileToken;
      kind = scanner.scan()
    ) {
      if (
        kind === ts.SyntaxKind.SingleLineCommentTrivia ||
        kind === ts.SyntaxKind.MultiLineCommentTrivia
      ) {
        comments.push([scanner.getTokenPos(), scanner.getTextPos()]);
      }
    }
    for (const [start, end] of comments.reverse()) {
      script =
        script.slice(0, start) + " ".repeat(end - start) + script.slice(end);
    }
    return script;
  };
  return source.includes("<template") || source.includes("<script")
    ? source
        .replace(/<!--[\s\S]*?-->/g, "")
        .replace(
          /(<script\b[^>]*>)([\s\S]*?)(<\/script>)/g,
          (_, open, script, close) => open + strip(script) + close,
        )
    : strip(source);
};

// These values are assigned per instance, rather than by a theme stylesheet.
const runtimeVariables = new Set([
  "--c-progress-group-percent",
  "--c-col-order",
  ...["xs", "sm", "md", "lg", "xl", "xxl"].map(
    (point) => `--c-col-order-${point}`,
  ),
  // Scheduler.vue and SchedulerTimeGrid.vue bind these to the rendered layout.
  ...["columns", "stack-order", "stack-count", "lanes", "lane"].map(
    (name) => `--c-scheduler-${name}`,
  ),
]);
const declarations = new Map<string, Set<string>>();
const consumers: { file: string; references: ReturnType<typeof references> }[] =
  [];
const entries = files.filter(
  (file) => file.endsWith("/style/index.ts") && !file.includes("/_components/"),
);

beforeAll(async () => {
  const visited = new Set();
  const visit = async (file: string): Promise<void> => {
    if (visited.has(file)) {
      return;
    }
    visited.add(file);
    const source = readFileSync(file, "utf8");
    if (file.endsWith(".less")) {
      const { css } = await less.render(source, {
        filename: file,
        javascriptEnabled: true,
      });
      for (const [, name, value] of css.matchAll(
        /(--c-[\w-]+)\s*:\s*([^;{}]+);/g,
      )) {
        const values = declarations.get(name) ?? new Set<string>();
        values.add(value);
        declarations.set(name, values);
      }
      consumers.push({
        file: relative(root, file),
        references: references(css),
      });
      return;
    }
    const module = ts.createSourceFile(
      file,
      source,
      ts.ScriptTarget.Latest,
      true,
    );
    for (const statement of module.statements) {
      if (
        !ts.isImportDeclaration(statement) ||
        statement.importClause?.isTypeOnly ||
        !ts.isStringLiteral(statement.moduleSpecifier)
      ) {
        continue;
      }
      const specifier = statement.moduleSpecifier.text;
      if (!specifier.startsWith(".")) {
        continue;
      }
      const base = resolve(dirname(file), specifier);
      const target = [base, `${base}.ts`, resolve(base, "index.ts")].find(
        (candidate) => existsSync(candidate) && statSync(candidate).isFile(),
      );
      if (target) {
        await visit(target);
      }
    }
  };
  for (const entry of entries) {
    await visit(entry);
  }
}, 120000);

it("resolves required variables in every public component stylesheet", () => {
  expect(entries.length).toBeGreaterThan(90);
  const missing = consumers.flatMap(({ file, references: refs }) =>
    refs
      .filter(
        ({ name, fallback }) =>
          !fallback && !declarations.has(name) && !runtimeVariables.has(name),
      )
      .map(({ name }) => `${file}: ${name}`),
  );
  expect([...new Set(missing)]).toEqual([]);
});

it("resolves literal variables used by component scripts and templates", () => {
  const missing = files
    .filter((file) => /\.(vue|tsx?)$/.test(file))
    .flatMap((file) =>
      references(withoutScriptComments(readFileSync(file, "utf8")))
        .filter(
          ({ name, fallback }) =>
            !fallback && !declarations.has(name) && !runtimeVariables.has(name),
        )
        .map(({ name }) => `${relative(root, file)}: ${name}`),
    );
  expect([...new Set(missing)]).toEqual([]);
});

for (const brand of ["default", "maple"] as const) {
  for (const mode of ["light", "dark"] as const) {
    it(`resolves ${brand} ${mode} theme aliases without dependency cycles`, () => {
      const definitions = new Map(declarations);
      for (const [name, value] of Object.entries(Themes[brand][mode])) {
        definitions.set(name, new Set([String(value)]));
      }
      const errors = new Set<string>();
      const checked = new Set<string>();
      const visit = (name: string, chain: string[] = []) => {
        if (chain.includes(name)) {
          errors.add(`Cycle: ${[...chain, name].join(" -> ")}`);
          return;
        }
        if (checked.has(name) || runtimeVariables.has(name)) {
          return;
        }
        for (const value of definitions.get(name) ?? []) {
          for (const dependency of references(value)) {
            if (
              !definitions.has(dependency.name) &&
              !runtimeVariables.has(dependency.name)
            ) {
              if (!dependency.fallback) {
                errors.add(`${name}: ${dependency.name}`);
              }
            } else {
              visit(dependency.name, [...chain, name]);
            }
          }
        }
        checked.add(name);
      };
      for (const name of definitions.keys()) {
        visit(name);
      }
      expect([...errors]).toEqual([]);
    });
  }
}
