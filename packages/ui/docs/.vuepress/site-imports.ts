import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import ts from 'typescript-js'
import type { Plugin } from 'vite'
import { CedarResolver } from '@cedar-design/resolver-vue'

/** Resolve docs imports through the public component entries, avoiding the runtime barrel. */
export function readSiteExports(sourceDir: string) {
  const modules = new Map<string, string>()
  function read(filename: string, target?: string) {
    const source = ts.createSourceFile(filename, readFileSync(filename, 'utf8'), ts.ScriptTarget.Latest, true)
    for (const statement of source.statements) {
      if (ts.isExportDeclaration(statement) && !statement.isTypeOnly) {
        if (statement.exportClause && ts.isNamedExports(statement.exportClause)) {
          for (const item of statement.exportClause.elements) {
            if (!item.isTypeOnly && item.name.text !== 'default') {
              const from = target ?? (statement.moduleSpecifier && ts.isStringLiteral(statement.moduleSpecifier)
                ? resolve(sourceDir, statement.moduleSpecifier.text) : undefined)
              if (from) modules.set(item.name.text, from)
            }
          }
        } else if (!target && statement.moduleSpecifier && ts.isStringLiteral(statement.moduleSpecifier)) {
          const from = resolve(sourceDir, statement.moduleSpecifier.text)
          const entry = ['index.ts', 'index.tsx', 'index.js'].map(file => resolve(from, file)).find(existsSync)
          if (!entry) throw new Error(`[Cedar docs] Missing component entry: ${from}`)
          read(entry, from)
        }
      } else if (target && ts.canHaveModifiers(statement) && ts.getModifiers(statement)?.some(item => item.kind === ts.SyntaxKind.ExportKeyword)) {
        if (ts.isVariableStatement(statement)) {
          for (const declaration of statement.declarationList.declarations) {
            if (ts.isIdentifier(declaration.name)) modules.set(declaration.name.text, target)
          }
        } else if (ts.isFunctionDeclaration(statement) && statement.name) {
          modules.set(statement.name.text, target)
        }
      }
    }
  }
  read(resolve(sourceDir, 'index.ts'))
  return modules
}

export function createSiteResolver(sourceDir: string, modules = readSiteExports(sourceDir)) {
  return CedarResolver().map(resolver => ({
    ...resolver,
    resolve(name: string) {
      const result = resolver.resolve(name)
      // A running docs server may still have the pre-build resolver registry.
      // Public source exports are authoritative for newly added components.
      if (!result && resolver.type === 'component' && /^C[A-Z]/.test(name)) {
        const exported = `_${name.slice(1)}Component`
        if (!modules.has(exported)) {
          for (const [key, from] of readSiteExports(sourceDir)) modules.set(key, from)
        }
        const from = modules.get(exported)
        if (from && existsSync(resolve(from, 'style/index.ts'))) {
          return { from, name: exported, sideEffects: [`${from}/style`] }
        }
      }
      if (result?.from !== '@cedar-design/ui-vue') return result
      const from = modules.get(result.name)
      if (!from) throw new Error(`[Cedar docs] Missing public export: ${result.name}`)
      return { ...result, from }
    },
  }))
}

export function getSiteComponentExcludes(sourceDir: string) {
  const source = sourceDir.replace(/\\/g, '/').replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return [/node_modules/, new RegExp(`^(?:/@fs)?${source}/(?!(?:[^/]+/)*(?:example|examples|__demos__|docs)/).*\\.(?:vue|[cm]?[jt]sx?)(?:\\?|$)`)]
}

function readSiteIconExports(sourceDir: string) {
  const filename = resolve(sourceDir, '../../icons/src/index.ts')
  const source = ts.createSourceFile(filename, readFileSync(filename, 'utf8'), ts.ScriptTarget.Latest, true)
  const icons = new Map<string, string>()
  for (const statement of source.statements) {
    if (!ts.isExportDeclaration(statement) || !statement.moduleSpecifier || !ts.isStringLiteral(statement.moduleSpecifier)
      || !statement.moduleSpecifier.text.startsWith('./icon-') || !statement.exportClause || !ts.isNamedExports(statement.exportClause)) continue
    for (const item of statement.exportClause.elements) {
      icons.set(item.name.text, `@cedar-design/icons-vue/${statement.moduleSpecifier.text.slice(2)}`)
    }
  }
  return icons
}

export function createSiteImportPlugin(sourceDir: string, modules = readSiteExports(sourceDir)): Plugin {
  const icons = readSiteIconExports(sourceDir)
  return {
    name: 'cedar:site-source-imports',
    enforce: 'post',
    transform(code, id) {
      if (!/\.(?:[cm]?[jt]sx?|vue|md)(?:\?|$)/.test(id) || (!code.includes('@cedar-design/ui-vue') && !code.includes('@cedar-design/icons-vue'))) return
      const source = ts.createSourceFile(id, code, ts.ScriptTarget.Latest, true)
      const edits: Array<{start: number; end: number; value: string}> = []
      for (const statement of source.statements) {
        if (!ts.isImportDeclaration(statement) || !ts.isStringLiteral(statement.moduleSpecifier) || !statement.importClause || statement.importClause.isTypeOnly || statement.importClause.name || !statement.importClause.namedBindings || !ts.isNamedImports(statement.importClause.namedBindings)) continue
        const targets = statement.moduleSpecifier.text === '@cedar-design/ui-vue' ? modules
          : statement.moduleSpecifier.text === '@cedar-design/icons-vue' ? icons : undefined
        if (!targets) continue
        const items = statement.importClause.namedBindings.elements
        if (!items.length || items.some(item => !targets.has((item.propertyName ?? item.name).text))) continue
        edits.push({start: statement.getStart(source), end: statement.end, value: items.map(item => `import { ${item.getText(source)} } from ${JSON.stringify(targets.get((item.propertyName ?? item.name).text))};`).join('\n')})
      }
      if (!edits.length) return
      let result = code
      for (const edit of edits.reverse()) result = result.slice(0, edit.start) + edit.value + result.slice(edit.end)
      return {code: result, map: null}
    },
  }
}
