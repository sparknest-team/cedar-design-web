import { describe, expect, it } from 'vitest'
import ResizeBox from '..'

describe('resize-box public contract', () => {
  it('exports a namespaced component', () => {
    expect(ResizeBox).toBeTruthy()
    expect(ResizeBox.name).toMatch(/^C/)
  })
})
