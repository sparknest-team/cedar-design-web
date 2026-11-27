import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import ts from 'typescript-js'
import type { Plugin, ViteDevServer } from 'vite'

/** Inline import-only style facades; CSS still uses Vite's normal pipeline. */
export function flattenStyleImports(sourceDir: string): Plugin {
  let server: ViteDevServer
  // Dependency edges, not source contents. Expansion snapshots live for one
  // transform only, so subsequent transforms always read current files.
  const importers = new Map<string, Set<string>>()
  const dependencies = new Map<string, Set<string>>()
  const isFacade = (id: string) => id.startsWith(`${resolve(sourceDir)}/`)
    && /\/style\/index\.[jt]s$/.test(id)
  return {
    name: 'cedar:style-import-facades', apply: 'serve', enforce: 'post',
    configureServer(value) { server = value },
    async transform(code, id) {
      if (!/\.(?:[cm]?[jt]sx?|vue)(?:\?|$)/.test(id)) return
      for (const file of dependencies.get(id) ?? []) importers.get(file)?.delete(id)
      dependencies.delete(id)
      if (!code.includes('/style')) return
      const source = ts.createSourceFile(id, code, ts.ScriptTarget.Latest, false)
      const edges = new Set<string>()
      dependencies.set(id, edges)
      const memo = new Map<string, string[] | undefined>()
      const cycle = Symbol('style facade cycle')
      const expand = async (file: string, stack = new Set<string>()): Promise<string[] | undefined> => {
        if (stack.has(file)) throw cycle
        if (memo.has(file)) return memo.get(file)
        edges.add(file)
        let users = importers.get(file)
        if (!users) importers.set(file, users = new Set())
        users.add(id) // Track before reading, including edits during a transform.
        this.addWatchFile(file)
        const text = await readFile(file, 'utf8')
        const parsed = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, false)
        if (parsed.statements.some(statement => !ts.isImportDeclaration(statement)
          || statement.importClause || statement.attributes || !ts.isStringLiteral(statement.moduleSpecifier))) {
          memo.set(file, undefined)
          return
        }
        const next = new Set([...stack, file])
        const imports: string[] = []
        for (const statement of parsed.statements) {
          const value = (statement as ts.ImportDeclaration).moduleSpecifier as ts.StringLiteral
          const target = await this.resolve(value.text, file, { skipSelf: true })
          if (!target) return
          const nested = !target.external && isFacade(target.id) ? await expand(target.id, next) : undefined
          imports.push(...(nested ?? [target.id]))
        }
        // Native ESM evaluates a repeated import once, at its first occurrence.
        const result = [...new Set(imports)]
        memo.set(file, result)
        return result
      }
      const edits: Array<{ start: number; end: number; value: string }> = []
      for (const statement of source.statements) {
        if (!ts.isImportDeclaration(statement) || statement.importClause || statement.attributes || !ts.isStringLiteral(statement.moduleSpecifier)) continue
        const found = await this.resolve(statement.moduleSpecifier.text, id, { skipSelf: true })
        if (!found || found.external || !isFacade(found.id)) continue
        let imports: string[] | undefined
        try { imports = await expand(found.id) }
        catch (error) { if (error === cycle) continue; throw error }
        if (imports) edits.push({ start: statement.getStart(source), end: statement.end,
          value: imports.map(file => `import ${JSON.stringify(file)};`).join('\n') })
      }
      if (!edits.length) return
      let result = code
      for (const edit of edits.reverse()) result = result.slice(0, edit.start) + edit.value + result.slice(edit.end)
      return { code: result, map: null }
    },
    handleHotUpdate(context) {
      const users = importers.get(context.file)
      if (!users) return
      return [...new Set([...context.modules, ...[...users].map(id => server.moduleGraph.getModuleById(id)).filter(Boolean)])] as any
    },
  }
}
