// @vitest-environment node
import { readFileSync } from 'node:fs'
import { readdir, readFile } from 'node:fs/promises'
import { dirname, extname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, test } from 'vitest'

const sourceRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const sourceExtensions = new Set(['.less', '.css', '.vue', '.ts', '.tsx'])
const removedFieldVariables = [
  '--c-field-padding-x',
  '--c-field-color-text',
  '--c-field-color-addon-bg',
  '--c-field-color-addon-border',
  '--c-field-size-xs-padding-y',
  '--c-field-size-sm-padding-y',
  '--c-field-size-md-padding-y',
  '--c-field-size-lg-padding-y',
]

describe('CSS variable migration contract', () => {
  test('removed Field variables cannot be reintroduced by a merge', async () => {
    const entries = await readdir(sourceRoot, { recursive: true, withFileTypes: true })
    const files = entries.filter(entry => entry.isFile() && sourceExtensions.has(extname(entry.name)))
    const violations = []
    // Bound open files while allowing independent filesystem reads to overlap.
    // Serial reads make this repository-wide guard sensitive to concurrent builds.
    for (let offset = 0; offset < files.length; offset += 64) {
      const matches = await Promise.all(files.slice(offset, offset + 64).map(async entry => {
        const path = resolve(entry.parentPath, entry.name)
        const source = await readFile(path, 'utf8')
        return removedFieldVariables
          .filter(variable => source.includes(variable))
          .map(variable => `${path.slice(sourceRoot.length + 1)}: ${variable}`)
      }))
      violations.push(...matches.flat())
    }
    expect(violations.sort()).toEqual([])
  }, 150_000)

  test('filled field interaction surfaces increase from fill 1 through fill 3', () => {
    const fieldTokens = readFileSync(resolve(sourceRoot, 'field-decorator/style/token.less'), 'utf8')
    const fieldStyles = readFileSync(
      resolve(sourceRoot, 'field-decorator/style/field-decorator.less'),
      'utf8',
    )

    expect(fieldTokens).toContain('--c-field-variant-filled-background: var(--c-sys-color-surface-muted);')
    expect(fieldTokens).toContain('--c-field-variant-filled-background-hover: var(--c-sys-color-state-hover);')
    expect(fieldTokens).toContain("--c-field-variant-filled-background-focus: var(~'--c-color-fill-3');")
    expect(fieldStyles).toContain('&--variant-filled:where(:hover):not(&--disabled)')
  })

  test('field color roles consume system semantics', () => {
    const fieldTokens = readFileSync(resolve(sourceRoot, 'field-decorator/style/token.less'), 'utf8')

    expect(fieldTokens).toContain('--c-field-control-text-color: var(--c-sys-color-content-primary);')
    expect(fieldTokens).toContain('--c-field-focus-color: var(--c-sys-color-action-primary);')
    expect(fieldTokens).toContain('--c-field-error-color: var(--c-sys-color-status-danger);')
    expect(fieldTokens).toContain('--c-field-variant-outline-border-color: var(--c-sys-color-border-default);')
    expect(fieldTokens).toContain(
      '--c-field-variant-outline-border-color-focus: var(--c-sys-color-action-primary);',
    )
  })
})
