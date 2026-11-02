import { defineComponent, h, KeepAlive, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, test, vi } from 'vitest'
import NavMenuItem from '../item'

const ticks: (() => void)[] = []
vi.mock('vue', async () => {
  const actual = await vi.importActual<typeof import('vue')>('vue')
  return { ...actual, nextTick: (callback?: () => void) => { if (callback) ticks.push(callback); return Promise.resolve() } }
})
vi.mock('../../_utils/resize-observer', () => ({ useElementResize: () => undefined }))
const actualVue = await vi.importActual<typeof import('vue')>('vue')
const cleanups: (() => void)[] = []
afterEach(() => { cleanups.splice(0).reverse().forEach(cleanup => cleanup()); ticks.length = 0; vi.restoreAllMocks() })
async function create(initialOpen = true) {
  const active = ref(true), open = ref(initialOpen), menu = ref<any>()
  const updates = vi.fn(), selections = vi.fn()
  const entries = [{ key: 'a', label: 'Alpha' }]
  const owner = document.defaultView!
  const add = vi.spyOn(owner, 'addEventListener'), remove = vi.spyOn(owner, 'removeEventListener')
  const TriggerStub = defineComponent({ setup(_, { slots }) { return () => h('section', {}, [slots.default?.(), slots.content?.()]) } })
  const host = document.createElement('div'); document.body.append(host)
  const wrapper = mount(defineComponent({ setup: () => () => h(KeepAlive, {}, () => active.value
    ? h(NavMenuItem, { ref: menu, open: open.value, popupLayout: 'full-width', options: entries, 'onUpdate:open': updates, onSelect: selections }, { content: () => h('button', 'Content') }) : null) }),
  { attachTo: host, global: { stubs: { CTrigger: TriggerStub } } })
  cleanups.push(() => {
    wrapper.unmount()
    for (const [type, callback, options] of add.mock.calls) if (type === 'scroll' || type === 'resize') owner.removeEventListener(type, callback, options)
    host.remove()
  })
  await actualVue.nextTick()
  ticks.length = 0
  const reference = wrapper.find('[data-nav-item]').element as HTMLElement
  const panel = wrapper.find('.c-nav-menu__popup').element as HTMLElement
  const button = panel.querySelector('button')!
  const geometry = vi.spyOn(reference, 'getBoundingClientRect').mockReturnValue({ bottom: 40, left: 10, right: 70 } as DOMRect)
  const resize = add.mock.calls.find(([type]) => type === 'resize')?.[1] as (() => void) | undefined
  const focus = vi.spyOn(button, 'focus'), referenceFocus = vi.spyOn(reference, 'focus')
  const key = (target: HTMLElement, value: string) => { const event = new KeyboardEvent('keydown', { key: value, bubbles: true, cancelable: true }); target.dispatchEvent(event); return event }
  return { active, open, menu: menu.value, updates, selections, owner, add, remove, wrapper, reference, panel, geometry, resize, focus, referenceFocus, key }
}

describe('NavMenu.Item consumer lifetime', () => {
  test('active window resize measures the current reference', async () => {
    const fixture = await create()
    expect(typeof fixture.resize).toBe('function')
    fixture.resize!(); await actualVue.nextTick()
    expect(fixture.geometry).toHaveBeenCalledTimes(1)
    expect(fixture.panel.style.top).toBe('40px')
  })
  test('deactivation releases listeners even if controlled open rejects closing', async () => {
    const fixture = await create()
    const scroll = fixture.add.mock.calls.find(([type]) => type === 'scroll')![1]
    fixture.remove.mockClear()
    fixture.active.value = false; await actualVue.nextTick()
    expect(fixture.remove).toHaveBeenCalledWith('resize', fixture.resize)
    expect(fixture.remove).toHaveBeenCalledWith('scroll', scroll, true)
    expect(fixture.updates).toHaveBeenCalledWith(false)
  })
  test('old resize callback cannot cross suspension and activation', async () => {
    const fixture = await create()
    fixture.active.value = false; await actualVue.nextTick()
    fixture.active.value = true; await actualVue.nextTick()
    fixture.geometry.mockClear()
    fixture.resize!()
    expect(fixture.geometry).not.toHaveBeenCalled()
  })
  test('geometry getter disposal cannot register new window listeners', async () => {
    const fixture = await create()
    fixture.open.value = false; await actualVue.nextTick()
    fixture.geometry.mockImplementation(() => { fixture.wrapper.unmount(); return { bottom: 40, left: 10, right: 70 } as DOMRect })
    fixture.add.mockClear()
    fixture.open.value = true; await actualVue.nextTick()
    expect(fixture.add.mock.calls.filter(([type]) => type === 'scroll' || type === 'resize')).toHaveLength(0)
  })
  test('inactive retained close/select commands do not notify', async () => {
    const fixture = await create()
    fixture.active.value = false; await actualVue.nextTick()
    fixture.updates.mockClear(); fixture.selections.mockClear()
    fixture.menu.close(); fixture.menu.select('a')
    expect(fixture.updates).not.toHaveBeenCalled()
    expect(fixture.selections).not.toHaveBeenCalled()
  })
  test('queued panel focus cannot cross suspension and activation', async () => {
    const fixture = await create()
    fixture.key(fixture.reference, 'ArrowDown')
    const old = ticks.splice(0)
    fixture.active.value = false; await actualVue.nextTick()
    fixture.active.value = true; await actualVue.nextTick()
    old.forEach(callback => callback())
    expect(fixture.focus).not.toHaveBeenCalled()
  })
  test('close return-focus callback is consumed once', async () => {
    const fixture = await create()
    fixture.menu.close()
    fixture.open.value = false; await actualVue.nextTick()
    ticks.splice(0).forEach(callback => { callback(); callback() })
    expect(fixture.referenceFocus).toHaveBeenCalledTimes(1)
  })
  test('external focus takeover is preserved before panel focus', async () => {
    const fixture = await create()
    const external = document.createElement('button'); document.body.append(external)
    cleanups.push(() => external.remove())
    fixture.reference.focus(); fixture.key(fixture.reference, 'ArrowDown')
    external.focus()
    ticks.splice(0).forEach(callback => callback())
    expect(fixture.focus).not.toHaveBeenCalled()
    expect(document.activeElement).toBe(external)
  })
  test('unmount removes the original window listeners', async () => {
    const fixture = await create()
    fixture.remove.mockClear()
    fixture.wrapper.unmount()
    expect(fixture.remove).toHaveBeenCalledWith('resize', fixture.resize)
  })
  test('activation binds a fresh measuring handler', async () => {
    const fixture = await create()
    fixture.active.value = false; await actualVue.nextTick()
    fixture.active.value = true; await actualVue.nextTick()
    const handlers = fixture.add.mock.calls.filter(([type]) => type === 'resize')
    const current = handlers[handlers.length - 1][1] as () => void
    expect(current === fixture.resize).toBe(false)
    fixture.geometry.mockClear()
    current()
    expect(fixture.geometry).toHaveBeenCalledTimes(1)
  })
  test('panel focus callback is consumed once', async () => {
    const fixture = await create()
    fixture.key(fixture.reference, 'ArrowDown')
    ticks.splice(0).forEach(callback => { callback(); callback() })
    expect(fixture.focus).toHaveBeenCalledTimes(1)
  })
  test('inactive retained keyboard event is not consumed', async () => {
    const fixture = await create()
    fixture.active.value = false; await actualVue.nextTick()
    fixture.updates.mockClear()
    const event = fixture.key(fixture.reference, 'ArrowDown')
    expect(event.defaultPrevented).toBe(false)
    expect(fixture.updates).not.toHaveBeenCalled()
  })
  test('external focus takeover is preserved before close return', async () => {
    const fixture = await create()
    const external = document.createElement('button'); document.body.append(external)
    cleanups.push(() => external.remove())
    fixture.reference.focus(); fixture.menu.close()
    fixture.open.value = false; await actualVue.nextTick()
    external.focus(); fixture.referenceFocus.mockClear()
    ticks.splice(0).forEach(callback => callback())
    expect(fixture.referenceFocus).not.toHaveBeenCalled()
    expect(document.activeElement).toBe(external)
  })
})
