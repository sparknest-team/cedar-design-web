import { describe, expect, it } from 'vitest'
import Split from '..'

describe('split public contract', () => {
  it('exports a namespaced component', () => {
    expect(Split).toBeTruthy()
    expect(Split.name).toMatch(/^C/)
  })
})
