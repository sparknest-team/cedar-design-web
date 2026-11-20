import assert from 'node:assert/strict'
import { cp, mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { tmpdir } from 'node:os'
import { dirname, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'
import { assertTableLayoutContract } from './table-layout-contract.mjs'

// Both releases consume one source snapshot. Concurrent non-Table work cannot
// make their inputs diverge, and the immutable original Table is never refreshed.
const root = fileURLToPath(new URL('../../', import.meta.url))
const ui = resolve(root, 'packages/ui')
const args = process.argv.slice(2)
const requestedOutput = args.includes('--out') ? args[args.indexOf('--out') + 1] : undefined
const scratch = await mkdtemp(resolve(tmpdir(), 'cedar-table-orchestration-'))
const context = resolve(scratch, 'context-ui')
const output = requestedOutput ? resolve(requestedOutput) : resolve(scratch, 'reports')
const reference = resolve(root, 'artifacts/table-orchestration-refactor/original-table')
let succeeded = false
try {
  await mkdir(dirname(output), { recursive: true })
  await mkdir(output, { recursive: false })
  await mkdir(context)
  await cp(resolve(ui, 'src'), resolve(context, 'src'), {
    recursive: true,
    filter: file => !/(?:^|\/)(?:__tests__|__demos__|docs|example)(?:\/|$)/.test(relative(ui, file)),
  })
  for (const file of ['package.json', 'tsconfig.json', 'tsconfig.unified-build.json']) await cp(resolve(ui, file), resolve(context, file))
  await cp(resolve(ui, 'reset'), resolve(context, 'reset'), { recursive: true })
  const common = ['--table-scope', '--orchestration-contract', '--source-context-ui', context, ...(args.includes('--browser-fixture') ? ['--orchestration-browser'] : [])]
  for (const [stage, flags] of [
    ['before', ['--table-reference', reference]],
    ['after', ['--compare', resolve(output, 'before')]],
  ]) {
    console.info(`Building ${stage} Table in the shared source context`)
    const child = spawnSync(process.execPath, [resolve(root, 'scripts/quality/table-layout-baseline.mjs'), ...common, ...flags, '--out', resolve(output, stage)], {
      cwd: root, env: { ...process.env, NODE_ENV: 'production' }, stdio: 'inherit',
    })
    if (child.error) throw child.error
    assert.equal(child.status, 0, `${stage} release comparison failed`)
  }
  const readCapture = async stage => Object.fromEntries(await Promise.all(['report', 'runtime', 'declarations'].map(async name =>
    [name, JSON.parse(await readFile(resolve(output, stage, `${name}.json`), 'utf8'))],
  )))
  const [before, after] = await Promise.all([readCapture('before'), readCapture('after')])
  assertTableLayoutContract(after, before)
  const result = {
    originalManifestSha256: createHash('sha256').update(await readFile(resolve(reference, 'manifest.json'))).digest('hex'),
    contextSha256: after.report.contextSha256,
    comparison: 'passed', summaryAndVirtualSsrCasesPerFormat: Object.keys(after.runtime.esm.orchestration).length,
    bundles: Object.fromEntries(Object.entries(after.report.bundles).map(([name, bundle]) => [name, { before: before.report.bundles[name].js.gzip, after: bundle.js.gzip, css: bundle.css.gzip }])),
  }
  await writeFile(resolve(output, 'comparison.json'), JSON.stringify(result, null, 2) + '\n')
  succeeded = true
  console.info(`Table orchestration contract and size comparison passed: ${output}`)
} finally {
  if (succeeded) await rm(context, { recursive: true, force: true })
  else console.error(`Incomplete paired capture retained: ${scratch}`)
}
