import { describe, expect, it } from 'vitest'
import Watermark from '..'

describe('watermark public contract', () => {
  it('exports a namespaced component', () => {
    expect(Watermark).toBeTruthy()
    expect(Watermark.name).toMatch(/^C/)
  })
})
