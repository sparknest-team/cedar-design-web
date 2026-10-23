import { defineComponent, h, KeepAlive, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, test, vi } from 'vitest'
import NavMenu from '../menu'

const cleanups: (() => void)[] = []
afterEach(() => { cleanups.splice(0).reverse().forEach(cleanup => cleanup()); vi.restoreAllMocks() })
const options = [{ key: 'a', label: 'Alpha' }, { key: 'b', label: 'Beta' }]
async function create() {
  const active = ref(true)
  const disabled = ref(false)
  const entries = ref(options)
  const menu = ref<any>()
  const host = document.createElement('div')
  document.body.append(host)
  const wrapper = mount(defineComponent({
    setup: () => () => h(KeepAlive, {}, () => active.value
      ? h(NavMenu, { ref: menu, options: entries.value, disabled: disabled.value }) : null),
  }), { attachTo: host })
  cleanups.push(() => { wrapper.unmount(); host.remove() })
  await nextTick()
  const command = menu.value.scrollTo as (key: string) => Promise<void>
  const a = wrapper.find('[data-nav-key="a"]').element as HTMLElement
  const b = wrapper.find('[data-nav-key="b"]').element as HTMLElement
  const scrollA = vi.fn(), scrollB = vi.fn()
  Object.defineProperty(a, 'scrollIntoView', { configurable: true, value: scrollA })
  Object.defineProperty(b, 'scrollIntoView', { configurable: true, value: scrollB })
  return { active, disabled, entries, wrapper, command, scrollA, scrollB }
}

describe('NavMenu scroll continuation ownership', () => {
  test('normal command scrolls once with nearest alignment', async () => {
    const fixture = await create()
    await fixture.command('a')
    expect(fixture.scrollA).toHaveBeenCalledTimes(1)
    expect(fixture.scrollA).toHaveBeenCalledWith({ block: 'nearest', inline: 'nearest' })
  })
  test('a newer command replaces the pending command', async () => {
    const fixture = await create()
    await Promise.all([fixture.command('a'), fixture.command('b')])
    expect(fixture.scrollA).not.toHaveBeenCalled()
    expect(fixture.scrollB).toHaveBeenCalledTimes(1)
  })
  test('disabled retained command does not scroll', async () => {
    const fixture = await create()
    fixture.disabled.value = true
    await nextTick()
    await fixture.command('a')
    expect(fixture.scrollA).not.toHaveBeenCalled()
  })
  test('disablement cancels pending work; re-enabling accepts a fresh command', async () => {
    const fixture = await create()
    fixture.disabled.value = true
    const pending = fixture.command('a')
    await nextTick(); await pending
    fixture.disabled.value = false
    await nextTick()
    await fixture.command('b')
    expect(fixture.scrollA).not.toHaveBeenCalled()
    expect(fixture.scrollB).toHaveBeenCalledTimes(1)
  })
  test('options replacement invalidates the previous render continuation', async () => {
    const fixture = await create()
    fixture.entries.value = options.map(option => ({ ...option, label: `${option.label}!` }))
    await fixture.command('a')
    expect(fixture.scrollA).not.toHaveBeenCalled()
    await fixture.command('b')
    expect(fixture.scrollB).toHaveBeenCalledTimes(1)
  })
  test('deactivation invalidates pending work and retained commands', async () => {
    const fixture = await create()
    fixture.active.value = false
    const pending = fixture.command('a')
    await nextTick(); await pending
    await fixture.command('b')
    expect(fixture.scrollA).not.toHaveBeenCalled()
    expect(fixture.scrollB).not.toHaveBeenCalled()
  })
  test('reactivation accepts a fresh command, not the old continuation', async () => {
    const fixture = await create()
    fixture.active.value = false
    const pending = fixture.command('a')
    await nextTick(); await pending
    fixture.active.value = true
    await nextTick()
    await fixture.command('b')
    expect(fixture.scrollA).not.toHaveBeenCalled()
    expect(fixture.scrollB).toHaveBeenCalledTimes(1)
  })
  test('unmount invalidates an already queued command', async () => {
    const fixture = await create()
    const pending = fixture.command('a')
    fixture.wrapper.unmount()
    await pending
    expect(fixture.scrollA).not.toHaveBeenCalled()
    await fixture.command('b')
    expect(fixture.scrollB).not.toHaveBeenCalled()
  })
})
