import { describe, expect, it } from 'vitest'
import Timeline from '..'

describe('timeline public contract', () => {
  it('exports a namespaced component', () => {
    expect(Timeline).toBeTruthy()
    expect(Timeline.name).toMatch(/^C/)
  })
})
