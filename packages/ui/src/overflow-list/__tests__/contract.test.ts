import { describe, expect, it } from 'vitest'
import OverflowList from '..'

describe('overflow-list public contract', () => {
  it('exports a namespaced component', () => {
    expect(OverflowList).toBeTruthy()
    expect(OverflowList.name).toMatch(/^C/)
  })
})
