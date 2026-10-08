import { readdirSync, readFileSync } from 'node:fs'
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

function sourceFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(directory, entry.name)
    if (entry.isDirectory()) return sourceFiles(path)
    return sourceExtensions.has(extname(entry.name)) ? [path] : []
  })
}

describe('CSS variable migration contract', () => {
  test('removed Field variables cannot be reintroduced by a merge', () => {
    const violations = sourceFiles(sourceRoot).flatMap((path) => {
      const source = readFileSync(path, 'utf8')
      return removedFieldVariables
        .filter((variable) => source.includes(variable))
        .map((variable) => `${path.slice(sourceRoot.length + 1)}: ${variable}`)
    })

    expect(violations).toEqual([])
  })

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
