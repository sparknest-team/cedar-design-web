import assert from 'node:assert/strict'
import { createRequire } from 'node:module'

const require = createRequire(new URL('../../packages/ui/package.json', import.meta.url))
const ts = require('typescript-js')

// TS inference can reorder properties of default-prop type literals when code
// moves between files. Only normalize unordered property signatures: overloads,
// tuples, unions, optionality, readonly flags and every type remain untouched.
export function canonicalTableDeclaration(source) {
  const tree = ts.createSourceFile('table.d.ts', source, ts.ScriptTarget.Latest, true)
  const result = ts.transform(tree, [
    (context) => (root) => {
      const visit = (node) => {
        node = ts.visitEachChild(node, visit, context)
        if (
          ts.isTypeLiteralNode(node) &&
          node.members.every((member) => ts.isPropertySignature(member) && !ts.isComputedPropertyName(member.name))
        ) {
          const names = node.members.map((member) => member.name.getText(tree))
          if (new Set(names).size === names.length) {
            return ts.factory.updateTypeLiteralNode(
              node,
              [...node.members].sort((a, b) => a.name.getText(tree).localeCompare(b.name.getText(tree))),
            )
          }
        }
        return node
      }
      return ts.visitNode(root, visit)
    },
  ])
  try {
    return ts.createPrinter({ removeComments: true }).printFile(result.transformed[0])
  } finally {
    result.dispose()
  }
}

/** Compare captured release consumers, never silently refresh the reference. */
export function assertTableLayoutContract(current, previous) {
  assert.equal(
    current.report.compatibilityScope ?? 'layout',
    previous.report.compatibilityScope ?? 'layout',
    'Compatibility comparison scopes must match',
  )
  assert.deepEqual(
    current.report.environment,
    previous.report.environment,
    'Baseline comparisons require identical tools and lockfile',
  )
  assert.equal(
    current.report.contextSha256,
    previous.report.contextSha256,
    'Non-layout source context changed; rebuild the original layout in the same context before comparing',
  )
  assert.deepEqual(current.runtime, previous.runtime, 'Existing runtime API or SSR markup changed')
  for (const [file, value] of Object.entries(previous.declarations)) {
    const next = current.declarations[file]
    assert.ok(next, `Existing declaration changed: ${file}`)
    if (next.sha256 !== value.sha256) {
      assert.ok(
        typeof next.text === 'string' && typeof value.text === 'string',
        `Existing declaration changed: ${file}`,
      )
      assert.equal(
        canonicalTableDeclaration(next.text),
        canonicalTableDeclaration(value.text),
        `Existing declaration changed: ${file}`,
      )
    }
  }
  for (const [name, old] of Object.entries(previous.report.bundles)) {
    for (const kind of ['js', 'css']) {
      // A measured refactor budget, not a target reduction for the full entry.
      const limit = kind === 'css' ? old[kind].gzip : Math.ceil(old[kind].gzip * 1.01)
      assert.ok(
        current.report.bundles[name][kind].gzip <= limit,
        `${name} ${kind} exceeds measured baseline budget: ${current.report.bundles[name][kind].gzip} > ${limit}`,
      )
      if (kind === 'css') assert.deepEqual(current.report.bundles[name].css, old.css, `${name} CSS changed`)
    }
  }
}
