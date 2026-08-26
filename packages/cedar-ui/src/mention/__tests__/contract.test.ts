import { describe, expect, it } from 'vitest'
import Mention from '..'

describe('mention public contract', () => {
  it('exports a namespaced component', () => {
    expect(Mention).toBeTruthy()
    expect(Mention.name).toMatch(/^C/)
  })
})
