import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import ts from 'typescript'
import type { Plugin } from 'vite'
import { CedarResolver } from '@cedarjs/resolver'

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

export function createSiteResolver(sourceDir: string) {
  const modules = readSiteExports(sourceDir)
  return CedarResolver().map(resolver => ({
    ...resolver,
    resolve(name: string) {
      const result = resolver.resolve(name)
      if (result?.from !== '@cedarjs/ui') return result
      const from = modules.get(result.name)
      if (!from) throw new Error(`[Cedar docs] Missing public export: ${result.name}`)
      return { ...result, from }
    },
  }))
}

export function createSiteImportPlugin(sourceDir: string): Plugin {
  const modules = readSiteExports(sourceDir)
  return {
    name: 'cedar:site-source-imports',
    enforce: 'post',
    transform(code, id) {
      if (!/\.(?:[cm]?[jt]sx?|vue|md)(?:\?|$)/.test(id) || !code.includes('@cedarjs/ui')) return
      const source = ts.createSourceFile(id, code, ts.ScriptTarget.Latest, true)
      const edits: Array<{start: number; end: number; value: string}> = []
      for (const statement of source.statements) {
        if (!ts.isImportDeclaration(statement) || !ts.isStringLiteral(statement.moduleSpecifier) || statement.moduleSpecifier.text !== '@cedarjs/ui' || !statement.importClause || statement.importClause.isTypeOnly || statement.importClause.name || !statement.importClause.namedBindings || !ts.isNamedImports(statement.importClause.namedBindings)) continue
        const items = statement.importClause.namedBindings.elements
        if (!items.length || items.some(item => !modules.has((item.propertyName ?? item.name).text))) continue
        edits.push({start: statement.getStart(source), end: statement.end, value: items.map(item => `import { ${item.getText(source)} } from ${JSON.stringify(modules.get((item.propertyName ?? item.name).text))};`).join('\n')})
      }
      if (!edits.length) return
      let result = code
      for (const edit of edits.reverse()) result = result.slice(0, edit.start) + edit.value + result.slice(edit.end)
      return {code: result, map: null}
    },
  }
}
