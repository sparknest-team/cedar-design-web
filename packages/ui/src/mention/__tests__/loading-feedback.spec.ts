import { flushPromises, mount } from '@vue/test-utils'
import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import Mention from '..'
const owners: ReturnType<typeof mount>[] = []
const originalScrollTo = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollTo')
beforeEach(() => { Object.defineProperty(HTMLElement.prototype, 'scrollTo', { configurable: true, value: vi.fn() }) })
afterEach(() => {
  owners.splice(0).forEach(owner => owner.unmount())
  if (originalScrollTo) Object.defineProperty(HTMLElement.prototype, 'scrollTo', originalScrollTo)
  else Reflect.deleteProperty(HTMLElement.prototype, 'scrollTo')
})
for (const type of ['input', 'textarea'] as const) {
  const indicator = (owner: ReturnType<typeof mount>) => owner.find('.c-field-decorator__loading-icon').exists()
  test(`${type} shares manual loading without implicitly disabling editing`, async () => {
    const owner = mount(Mention, { props: { type, editMode: 'direct', data: ['alice'], loading: true } }); owners.push(owner)
    expect(indicator(owner)).toBe(true)
    expect(owner.get(type).attributes('aria-busy')).toBe('true')
    expect(owner.get(type).attributes('disabled')).toBeUndefined()
    expect(owner.get(type).attributes('readonly')).toBeUndefined()
    await owner.setProps({ loading: false })
    expect(indicator(owner)).toBe(false)
    expect(owner.get(type).attributes('aria-busy')).toBeUndefined()
  })
  test(`${type} follows current remote loading while old work cannot clear its feedback`, async () => {
    const old: ((value: string[]) => void)[] = [], latest: ((value: string[]) => void)[] = []
    const owner = mount(Mention, { props: { type, editMode: 'direct', data: () => new Promise<string[]>(resolve => old.push(resolve)) } }); owners.push(owner)
    await flushPromises(); expect(old.length).toBeGreaterThan(0)
    expect(indicator(owner)).toBe(true)
    await owner.setProps({ data: () => new Promise<string[]>(resolve => latest.push(resolve)) }); await flushPromises()
    old.forEach(done => done(['old'])); await flushPromises()
    expect(indicator(owner)).toBe(true)
    expect(owner.get(type).attributes('aria-busy')).toBe('true')
    latest.forEach(done => done(['new'])); await flushPromises()
    expect(indicator(owner)).toBe(false)
    expect(owner.get(type).attributes('aria-busy')).toBeUndefined()
    expect(owner.get(type).attributes('disabled')).toBeUndefined()
  })
  test(`${type} releases remote loading and publishes the original load error`, async () => {
    let reject!: (error: Error) => void
    const owner = mount(Mention, { props: { type, editMode: 'direct', data: () => new Promise<string[]>((_, fail) => { reject = fail }) } }); owners.push(owner)
    await flushPromises(); expect(indicator(owner)).toBe(true)
    const cause = new Error('remote data failed'); reject(cause); await flushPromises()
    expect(indicator(owner)).toBe(false)
    expect(owner.emitted('load-error')?.[0][0]).toBe(cause)
  })
  test(`${type} does not treat a search notification Promise as a loading task`, async () => {
    let finish!: () => void
    const promise = new Promise<void>(resolve => { finish = resolve }), search = vi.fn(() => promise)
    const owner = mount(Mention, { props: { type, editMode: 'direct', data: ['alice'], onSearch: search } }); owners.push(owner)
    await owner.get(type).setValue('@a'); await flushPromises()
    expect(search).toHaveBeenCalled()
    expect(indicator(owner)).toBe(false)
    expect(owner.get(type).attributes('aria-busy')).toBeUndefined()
    finish()
  })
}
