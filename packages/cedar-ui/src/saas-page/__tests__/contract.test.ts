import { describe, expect, it } from 'vitest'
import SaasPage from '..'

describe('saas-page public contract', () => {
  it('exports a namespaced component', () => {
    expect(SaasPage).toBeTruthy()
    expect(SaasPage.name).toMatch(/^C/)
  })
})
