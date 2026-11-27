import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import test from 'node:test'

const root = new URL('../../', import.meta.url)
const require = createRequire(new URL('packages/ui/package.json', root))
const ts = require('typescript-js')
const reference = new URL('artifacts/table-layout-refactor/original-layout/', root)
const manifest = JSON.parse(readFileSync(new URL('manifest.json', reference), 'utf8'))
const historical = JSON.parse(readFileSync(new URL('artifacts/table-layout-refactor/before/report.json', root), 'utf8'))
const keyOf = (column) => column.key ?? column.dataIndex
const isNumber = (value) => Object.prototype.toString.call(value) === '[object Number]' && value === value
const isExtra = (column) => Boolean(column.extra)

function original(file) {
  const source = readFileSync(new URL(`${file}.txt`, reference), 'utf8')
  assert.equal(
    createHash('sha256').update(source).digest('hex'),
    manifest[file],
    'Never regenerate the original algorithm from the new implementation',
  )
  assert.equal(
    manifest[file],
    historical.sources[`table/${file}`],
    'Original algorithm must match the first pre-refactor production capture',
  )
  return source
}

function load(source, names) {
  const tree = ts.createSourceFile('layout.ts', source, ts.ScriptTarget.Latest, true)
  const statements = tree.statements.filter(
    (node) =>
      !ts.isImportDeclaration(node) &&
      (!names || (ts.isVariableStatement(node) && names.has(node.declarationList.declarations[0].name.getText()))),
  )
  const code = ts.transpileModule(statements.map((node) => node.getText(tree)).join('\n'), {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS },
  }).outputText
  const exports = {}
  // Evaluate only the locally captured arithmetic, with explicit identity/predicate
  // adapters. No UI module or browser is loaded by this differential oracle.
  const declaresNumber = statements.some(
    (node) =>
      ts.isVariableStatement(node) &&
      node.declarationList.declarations.some((item) => item.name.getText() === 'isNumber'),
  )
  new Function(
    'exports',
    'helpers',
    `const { getColumnLayoutKey, isTableExtraColumn } = helpers;\n${declaresNumber ? '' : 'const isNumber = helpers.isNumber;'}\n${code}`,
  )(exports, { getColumnLayoutKey: keyOf, isTableExtraColumn: isExtra, isNumber })
  return exports
}

const oldWidths = load(original('hooks/use-columns-layout.ts'))
const oldFrozen = load(
  original('utils.ts'),
  new Set([
    'getOperationColumnIndex',
    'getFirstDataColumn',
    'getLastDataColumn',
    'getOperationFixedNumber',
    'getFixedNumber',
    'getOperationStyle',
  ]),
)
const widths = load(readFileSync(new URL('packages/ui/src/table/kernel/column-widths.ts', root), 'utf8'))
const frozen = load(readFileSync(new URL('packages/ui/src/table/kernel/frozen-columns.ts', root), 'utf8'))

const random = () => {
  let seed = 241119
  return (items) => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0
    return items[seed % items.length]
  }
}

test('800 width scenarios match the immutable original algorithm including column mutations', () => {
  const pick = random()
  for (let trial = 0; trial < 800; trial++) {
    const dataColumns = Array.from({ length: pick([0, 1, 2, 3, 5]) }, (_, index) => {
      const field = pick([`c${index}`, 'duplicate', '', undefined])
      const extra = index === 2
      return {
        dataIndex: field,
        key: extra ? `@extra:${field}` : field,
        extra,
        width: pick([undefined, 0, 40, 81, 160, 1.5]),
        minWidth: pick([undefined, 0, 50, 83]),
        _resizeWidth: pick([undefined, 0, 110, NaN]),
        _realWidth: 999,
      }
    })
    const input = {
      containerWidth: pick([0, 100, 300, 601, 1000]),
      dataColumns,
      operations: pick([[], [{}], [{ width: 0 }, { width: 43 }]]),
      fit: pick([true, false]),
      exactDataIndexes: pick([undefined, ['duplicate'], ['c2']]),
    }
    const expectedInput = structuredClone(input)
    const expected = oldWidths.updateColumnsWidth(expectedInput)
    const actual = widths.calculateColumnWidths({
      ...input,
      dataColumns: dataColumns.map((column) => ({
        ...column,
        exact:
          column.extra ||
          Boolean(
            input.exactDataIndexes?.includes(column.dataIndex) &&
            !dataColumns.some((other) => other.extra && other.dataIndex === column.dataIndex),
          ),
      })),
    })
    const { widthUpdates, ...result } = actual
    const updated = structuredClone(dataColumns)
    for (const { index, width } of widthUpdates) updated[index]._realWidth = width
    assert.deepEqual(result, expected, `width result, case ${trial}`)
    assert.deepEqual(updated, expectedInput.dataColumns, `column writes, case ${trial}`)
    assert.ok(
      dataColumns.every((column) => column._realWidth === 999),
      'Pure kernel mutated its input',
    )
  }
})

test('frozen arithmetic matches the original independently of later header projection fixes', () => {
  const pick = random()
  for (let trial = 0; trial < 600; trial++) {
    const dataColumns = Array.from({ length: 5 }, (_, index) => ({
      dataIndex: `c${index}`,
      key: index === 4 ? '@extra:c0' : `c${index}`,
      fixed: pick(['left', 'right', undefined]),
      width: pick([undefined, 0, 81, 140]),
      _realWidth: pick([undefined, 0, 91, 151]),
      _resizeWidth: pick([undefined, 0, 131]),
    }))
    const operations = [
      { name: 'expand', width: 40, _realWidth: 53, fixed: true },
      { name: 'selection', width: 0, fixed: true },
      { name: 'expand', width: 31 },
    ]
    const column = pick([
      ...dataColumns,
      { fixed: 'left', children: dataColumns.slice(0, 2) },
      { fixed: 'right', children: [{ children: dataColumns.slice(3) }] },
      { dataIndex: 'missing', fixed: 'left' },
    ])
    const mode = pick([undefined, 'auto', 'fixed'])
    const direction = pick(['ltr', 'rtl'])
    assert.equal(
      frozen.frozenColumnOffset(column, { dataColumns, operations, keyOf }, mode, direction),
      oldFrozen.getFixedNumber(column, { dataColumns, operations }, mode, direction),
      `frozen column, case ${trial}`,
    )
    for (const operation of [...operations, { name: 'expand', fixed: true }]) {
      assert.equal(
        frozen.operationFixedOffset(operation, operations),
        oldFrozen.getOperationFixedNumber(operation, operations),
      )
      const style = operation.fixed
        ? { left: `${frozen.operationStickyOffset(operation, operations, direction, dataColumns, mode)}px` }
        : {}
      assert.deepEqual(
        style,
        oldFrozen.getOperationStyle(operation, operations, direction, dataColumns, mode),
        `frozen operation, case ${trial}`,
      )
    }
  }
})
