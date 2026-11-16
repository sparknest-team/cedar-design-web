import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { mkdirSync, mkdtempSync, realpathSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { tmpdir } from 'node:os'
import { dirname, resolve } from 'node:path'
import test from 'node:test'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = fileURLToPath(new URL('../../', import.meta.url))
const require = createRequire(resolve(root, 'packages/ui/package.json'))
const vitestBin = resolve(dirname(require.resolve('vitest/package.json')), 'vitest.mjs')

test('Vue DOM nodes and Test Utils selectors retain the current jsdom realm across files', { timeout: 600_000 }, async (t) => {
  for (const variant of [
    { pool: 'forks', isolate: true },
    { pool: 'threads', isolate: false },
    { pool: 'forks', isolate: false },
  ]) {
    await t.test(`pool=${variant.pool} isolate=${variant.isolate}`, () => {
      const directory = realpathSync(mkdtempSync(resolve(tmpdir(), 'cedar-test-realm-')))
      try {
        symlinkSync(resolve(root, 'packages/ui/node_modules'), resolve(directory, 'node_modules'), process.platform === 'win32' ? 'junction' : 'dir')
        mkdirSync(resolve(directory, 'src'))
        writeFileSync(resolve(directory, 'src/factory.ts'), `
import { defineComponent, h, ref } from 'vue'
import { mount } from '@vue/test-utils'
export function fixture() {
  return mount(defineComponent({
    setup() {
      const count = ref(0)
      return () => h('button', { onClick: () => count.value++ }, String(count.value))
    },
  }))
}
`)
        for (const name of ['first', 'second', 'third']) {
          writeFileSync(resolve(directory, `src/${name}.spec.ts`), `
import { expect, test } from 'vitest'
import { fixture } from './factory'
test('${name}: Vue nodes match the current jsdom realm', async () => {
  const wrapper = fixture()
  try {
    expect(wrapper.element.ownerDocument).toBe(document)
    expect(wrapper.element).toBeInstanceOf(HTMLElement)
    const button = wrapper.get('button')
    await button.trigger('click')
    expect(button.text()).toBe('1')
  } finally { wrapper.unmount() }
})
`)
        }
        const result = spawnSync(process.execPath, [
          vitestBin, 'run', '--root', directory,
          '--config', resolve(root, 'packages/ui/vitest.config.mts'),
          `--pool=${variant.pool}`, `--isolate=${variant.isolate}`, '--no-color', `--maxWorkers=${variant.isolate ? 2 : 1}`,
          ...(!variant.isolate ? ['--no-file-parallelism'] : []),
        ], {
          cwd: resolve(root, 'packages/ui'),
          env: process.env,
          encoding: 'utf8', timeout: 90_000, maxBuffer: 2 * 1024 * 1024,
        })
        assert.equal(result.status, 0, `${result.error ?? ''}\n${result.stdout}\n${result.stderr}`)
        assert.match(result.stdout, /3 passed/)
        if (!variant.isolate) {
          const rerun = spawnSync(process.execPath, ['--input-type=module', '-e', `
import assert from 'node:assert/strict'
import { createVitest } from ${JSON.stringify(pathToFileURL(require.resolve('vitest/node')).href)}
const ctx = await createVitest({
  root: ${JSON.stringify(directory)},
  config: ${JSON.stringify(resolve(root, 'packages/ui/vitest.config.mts'))},
  pool: '${variant.pool}', isolate: false, watch: false, maxWorkers: 1, fileParallelism: false,
})
try {
  assert.equal(ctx.config.isolate, false)
  assert.equal(ctx.config.pool, '${variant.pool}')
  assert.equal(ctx.config.fsModuleCachePath, ${JSON.stringify(resolve(directory, '.cache/vitest/modules'))})
  await ctx.start()
  const modules = ctx.state.getTestModules()
  const specifications = modules.map(module => module.toTestSpecification())
  assert.equal(modules.length, 3)
  assert.ok(ctx.state.getTestModules().every(module => module.state() === 'passed'))
  for (let round = 0; round < 2; round++) {
    await ctx.rerunTestSpecifications(specifications)
    assert.ok(ctx.state.getTestModules().every(module => module.state() === 'passed'), 'DOM realm changed on rerun')
  }
} finally { await ctx.close() }
`], {
            cwd: resolve(root, 'packages/ui'), encoding: 'utf8', timeout: 90_000, maxBuffer: 2 * 1024 * 1024,
          })
          assert.equal(rerun.status, 0, `${rerun.error ?? ''}\n${rerun.stdout}\n${rerun.stderr}`)
        }
      } finally {
        rmSync(directory, { recursive: true, force: true })
      }
    })
  }
})
