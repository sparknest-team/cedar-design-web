import { describe, expect, it } from 'vitest'
import Tree from '..'

describe('tree public contract', () => {
  it('exports a namespaced component', () => {
    expect(Tree).toBeTruthy()
    expect(Tree.name).toMatch(/^C/)
  })
})
