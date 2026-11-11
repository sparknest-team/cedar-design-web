import { describe, expect, it } from 'vitest'
import Upload from '..'

describe('upload public contract', () => {
  it('exports a namespaced component', () => {
    expect(Upload).toBeTruthy()
    expect(Upload.name).toMatch(/^C/)
  })
})
