import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

const source = directory => fileURLToPath(new URL(`../../../${directory}/src/`, import.meta.url))
const iconSource = source('icons')

/** Unit tests run against workspace source, independently of package builds. */
export const testSourceAliases = [
  // 示例文件按真实消费方写法 import 包名；测试里要落到源码，
  // 否则 check:demo-i18n（quality 第一步，早于 build:lib）解析不到构建产物。
  { find: /^@cedar-design\/ui-vue$/, replacement: source('ui') + 'index.ts' },
  { find: /^@cedar-design\/use-vue$/, replacement: source('use') + 'index.ts' },
  { find: /^@cedar-design\/shared-vue$/, replacement: source('shared') + 'index.ts' },
  { find: /^@cedar-design\/icons-vue\/(icon-[\w-]+)$/, replacement: iconSource + '$1/index.ts' },
  { find: /^@cedar-design\/icons-vue$/, replacement: iconSource + 'index.ts' },
]

/** @returns {import("vite").Plugin} */
export function createTestIconSourceImports() {
  const entry = ts.createSourceFile('icons.ts', readFileSync(iconSource + 'index.ts', 'utf8'), ts.ScriptTarget.Latest, true)
  const icons = new Map()
  for (const statement of entry.statements) {
    if (!ts.isExportDeclaration(statement) || !statement.moduleSpecifier || !ts.isStringLiteral(statement.moduleSpecifier)
      || !statement.moduleSpecifier.text.startsWith('./icon-') || !statement.exportClause || !ts.isNamedExports(statement.exportClause)) continue
    for (const item of statement.exportClause.elements) icons.set(item.name.text, '@cedar-design/icons-vue/' + statement.moduleSpecifier.text.slice(2))
  }
  return {
    name: 'cedar:test-icon-source-imports',
    enforce: 'post',
    transform(code, id) {
      if (!/\.(?:[cm]?[jt]sx?|vue)(?:\?|$)/.test(id) || !code.includes('@cedar-design/icons-vue')) return
      const tree = ts.createSourceFile(id, code, ts.ScriptTarget.Latest, true)
      const edits = []
      for (const statement of tree.statements) {
        if (!ts.isImportDeclaration(statement) || !ts.isStringLiteral(statement.moduleSpecifier)
          || statement.moduleSpecifier.text !== '@cedar-design/icons-vue' || statement.importClause?.isTypeOnly) continue
        const clause = statement.importClause
        if (!clause?.namedBindings || !ts.isNamedImports(clause.namedBindings)) continue
        if (!clause.namedBindings.elements.some(item => !item.isTypeOnly && icons.has((item.propertyName ?? item.name).text))) continue
        const imports = []
        if (clause.name) imports.push(`import ${clause.name.text} from '@cedar-design/icons-vue';`)
        for (const item of clause.namedBindings.elements) {
          const name = (item.propertyName ?? item.name).text
          const from = item.isTypeOnly ? '@cedar-design/icons-vue' : icons.get(name) ?? '@cedar-design/icons-vue'
          imports.push(`import { ${item.getText(tree)} } from '${from}';`)
        }
        edits.push({ start: statement.getStart(tree), end: statement.end, code: imports.join('\n') })
      }
      if (!edits.length) return
      for (const edit of edits.reverse()) code = code.slice(0, edit.start) + edit.code + code.slice(edit.end)
      return { code, map: null }
    },
  }
}
