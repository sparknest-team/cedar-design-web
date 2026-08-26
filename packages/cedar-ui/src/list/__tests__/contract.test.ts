import { describe, expect, it } from 'vitest'
import List from '..'

describe('list public contract', () => {
  it('exports a namespaced component', () => {
    expect(List).toBeTruthy()
    expect(List.name).toMatch(/^C/)
  })
})
