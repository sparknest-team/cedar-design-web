import { describe, expect, it } from 'vitest'
import Calendar from '..'

describe('calendar public contract', () => {
  it('exports a namespaced component', () => {
    expect(Calendar).toBeTruthy()
    expect(Calendar.name).toMatch(/^C/)
  })
})
