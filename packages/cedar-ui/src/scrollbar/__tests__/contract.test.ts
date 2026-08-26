import { describe, expect, it } from 'vitest'
import Scrollbar from '..'

describe('scrollbar public contract', () => {
  it('exports a namespaced component', () => {
    expect(Scrollbar).toBeTruthy()
    expect(Scrollbar.name).toMatch(/^C/)
  })
})
