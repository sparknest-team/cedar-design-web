import { describe, expect, it } from 'vitest'
import Anchor from '..'

describe('anchor public contract', () => {
  it('exports a namespaced component', () => {
    expect(Anchor).toBeTruthy()
    expect(Anchor.name).toMatch(/^C/)
  })
})
