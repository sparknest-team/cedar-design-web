import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const root = new URL('../../', import.meta.url)
const workflow = readFileSync(new URL('.github/workflows/quality.yml', root), 'utf8')
const { scripts } = JSON.parse(readFileSync(new URL('package.json', root), 'utf8'))

function assertMergeGate(workflow, scripts) {
  // Keep the existing required-check context, and run on every PR/merge queue entry.
  assert.match(workflow, /^  pull_request:\s*$/m)
  assert.match(workflow, /^  merge_group:\s*$/m)
  assert.match(workflow, /^  quality:\s*$/m)
  assert.doesNotMatch(workflow, /^\s*(?:paths(?:-ignore)?|branches-ignore|continue-on-error|needs):/m)
  assert.doesNotMatch(workflow.split('  push:')[0], /^\s*branches:/m, 'PRs cannot be branch-filtered')
  const quality = workflow.split(/^  quality:\s*$/m)[1]?.split(/^  [\w-]+:\s*$/m)[0]
  assert.ok(quality, 'quality job must exist')
  assert.doesNotMatch(quality, /^    (?:if|name):/m, 'required job cannot be skipped or renamed')
  const steps = quality.split(/^      - /m).slice(1)
  for (const command of ['pnpm quality', 'node --test scripts/quality/demo-i18n-ci.test.mjs']) {
    const gateSteps = steps.filter(step => step.split('\n')[0] === `run: ${command}`)
    assert.equal(gateSteps.length, 1, `${command} must run once as a mandatory step`)
    assert.doesNotMatch(gateSteps[0], /^\s*if:/m)
  }
  assert.equal(scripts.quality.split(' && ')[0], 'pnpm check:demo-i18n')
  const commands = scripts['check:demo-i18n'].split(' && ')
  assert.deepEqual(commands, [
    'node --test scripts/quality/demo-i18n-ci.test.mjs',
    'pnpm check:test-environment',
    'node --test ../design-ui/bin/compose-demo-comparison.test.mjs ../design-ui/bin/demo-config-comparison.test.mjs',
    'pnpm --dir packages/ui exec vitest run src/__demos__/locale --maxWorkers=1 --no-file-parallelism',
  ], 'gate must run CI wiring, loader regressions, generators and all locale tests without filtering or allowing failures')
  assert.equal(scripts['check:test-environment'], 'node --test scripts/quality/test-environment.test.mjs packages/ui/scripts/testing/source-dependencies.test.mjs')
  assert.ok(scripts.quality.split(' && ').includes('pnpm check:doc-pipeline'))
  for (const file of ['compose-demo-comparison.test.mjs', 'demo-config-comparison.test.mjs', 'demo-content-parity.test.mjs', 'api-documentation-locales.test.mjs']) {
    assert.ok(scripts['check:doc-pipeline'].includes(`../design-ui/bin/${file}`), `${file} must remain in the documentation gate`)
  }
}

test('Demo i18n checks are mandatory in PR and merge queue quality runs', () => {
  assertMergeGate(workflow, scripts)
})

for (const [name, mutate] of [
  ['PR path filter', value => value.replace('  pull_request:', '  pull_request:\n    paths: ["packages/ui/**"]')],
  ['PR branch filter', value => value.replace('  pull_request:', '  pull_request:\n    branches: [main]')],
  ['merge queue removed', value => value.replace('  merge_group:\n', '')],
  ['renamed required check', value => value.replace('  quality:', '  quality:\n    name: other-quality')],
  ['conditional quality job', value => value.replace('  quality:', '  quality:\n    if: false')],
  ['conditional quality step', value => value.replace('- run: pnpm quality', '- if: false\n        run: pnpm quality')],
  ['allowed failure', value => value.replace('- run: pnpm quality', '- continue-on-error: true\n        run: pnpm quality')],
  ['removed quality command', value => value.replace('pnpm quality', 'pnpm test')],
  ['removed independent wiring check', value => value.replace('- run: node --test scripts/quality/demo-i18n-ci.test.mjs', '- run: node --version')],
]) {
  test(`rejects ${name}`, () => assert.throws(() => assertMergeGate(mutate(workflow), scripts)))
}

test('rejects missing, filtered or failure-tolerant locale checks', () => {
  for (const command of scripts['check:demo-i18n'].split(' && ')) {
    assert.throws(() => assertMergeGate(workflow, {
      ...scripts, 'check:demo-i18n': scripts['check:demo-i18n'].replace(command, 'true'),
    }))
  }
  for (const suffix of [' --passWithNoTests', ' -t render', ' || true']) {
    assert.throws(() => assertMergeGate(workflow, {
      ...scripts, 'check:demo-i18n': scripts['check:demo-i18n'] + suffix,
    }))
  }
  assert.throws(() => assertMergeGate(workflow, { ...scripts, quality: 'pnpm test' }))
  assert.throws(() => assertMergeGate(workflow, {
    ...scripts, quality: scripts.quality.replace('pnpm check:doc-pipeline', 'true'),
  }))
  assert.throws(() => assertMergeGate(workflow, {
    ...scripts, 'check:doc-pipeline': scripts['check:doc-pipeline'].replace('../design-ui/bin/api-documentation-locales.test.mjs', ''),
  }))
})
