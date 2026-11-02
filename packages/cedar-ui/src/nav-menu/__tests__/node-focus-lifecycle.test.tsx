import { computed, defineComponent, h, KeepAlive, provide, reactive, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, test, vi } from 'vitest'
import NavNode from '../node'
import { navMenuKey, type NavMenuContext } from '../context'
import { createNavMenuTree } from '../tree'
import type { NavMenuKey } from '../types'

const waits: (() => void)[] = [], ticks: (() => void)[] = []
vi.mock('vue', async () => {
  const actual = await vi.importActual<typeof import('vue')>('vue')
  return { ...actual, nextTick: (callback?: () => void) => callback
    ? (ticks.push(callback), Promise.resolve()) : new Promise<void>(resolve => waits.push(resolve)) }
})
const actualVue = await vi.importActual<typeof import('vue')>('vue')
const cleanups: (() => void)[] = []
afterEach(() => { cleanups.splice(0).reverse().forEach(cleanup => cleanup()); waits.splice(0).forEach(resolve => resolve()); ticks.length = 0; vi.restoreAllMocks() })
const settle = async () => { await Promise.resolve(); await actualVue.nextTick(); await Promise.resolve() }
async function create() {
  const active = ref(true), expanded = ref<NavMenuKey[]>(['p'])
  const props = reactive({ disabled: false, mode: 'horizontal', rootIndent: 12, size: 'md' })
  const node = createNavMenuTree([{ key: 'p', label: 'Parent', children: [{ key: 'a', label: 'Alpha' }] }]).roots[0]
  const focusReference = vi.fn()
  const expand = vi.fn((entry, open) => { expanded.value = open ? [entry.key] : [] })
  const api = {
    dir: computed(() => 'ltr'), props, expanded, collapsed: computed(() => false), theme: computed(() => 'light'), selected: computed(() => null),
    activePath: computed(() => new Set()), focusKey: ref(), labelField: computed(() => 'label'), slots: {},
    context: (entry: any) => ({ option: entry.option }), expand, register: vi.fn(), select: vi.fn(),
  } as unknown as NavMenuContext
  const TriggerStub = defineComponent({ setup(_, { slots, expose }) { expose({ focusReference }); return () => h('section', {}, [slots.default?.(), slots.content?.()]) } })
  const host = document.createElement('div'); document.body.append(host)
  const wrapper = mount(defineComponent({ setup() { provide(navMenuKey, api); return () => h(KeepAlive, {}, () => active.value ? h(NavNode, { node }) : null) } }),
    { attachTo: host, global: { stubs: { CTrigger: TriggerStub } } })
  cleanups.push(() => { wrapper.unmount(); host.remove() })
  await actualVue.nextTick()
  const parent = wrapper.find('[data-nav-key="p"]').element as HTMLElement
  const child = wrapper.find('[data-nav-key="a"]').element as HTMLElement
  const panel = wrapper.find('[data-nav-panel]').element as HTMLElement
  const focus = vi.spyOn(child, 'focus')
  const key = (target: HTMLElement, value: string) => { const event = new KeyboardEvent('keydown', { key: value, bubbles: true, cancelable: true }); target.dispatchEvent(event); return event }
  const deliverEnter = async () => { waits.splice(0).forEach(resolve => resolve()); await settle() }
  return { active, expanded, props, node, api, wrapper, parent, child, panel, focus, focusReference, expand, key, deliverEnter }
}

describe('NavNode focus continuation lifecycle', () => {
  test('normal enter focuses the first enabled child', async () => {
    const fixture = await create()
    fixture.key(fixture.parent, 'ArrowDown')
    await fixture.deliverEnter()
    expect(fixture.focus).toHaveBeenCalledTimes(1)
  })
  test('disablement invalidates pending enter', async () => {
    const fixture = await create()
    fixture.key(fixture.parent, 'ArrowDown')
    fixture.props.disabled = true
    await settle(); await fixture.deliverEnter()
    expect(fixture.focus).not.toHaveBeenCalled()
  })
  test('close and reopen do not revive an old enter', async () => {
    const fixture = await create()
    fixture.key(fixture.parent, 'ArrowDown')
    fixture.expanded.value = []; fixture.expanded.value = ['p']
    await settle(); await fixture.deliverEnter()
    expect(fixture.focus).not.toHaveBeenCalled()
  })
  test('enter cannot cross suspension and activation', async () => {
    const fixture = await create()
    fixture.key(fixture.parent, 'ArrowDown')
    fixture.active.value = false; await settle()
    fixture.active.value = true; await settle()
    await fixture.deliverEnter()
    expect(fixture.focus).not.toHaveBeenCalled()
  })
  test('only the newest enter continuation focuses', async () => {
    const fixture = await create()
    fixture.key(fixture.parent, 'ArrowDown'); fixture.key(fixture.parent, 'ArrowDown')
    await fixture.deliverEnter()
    expect(fixture.focus).toHaveBeenCalledTimes(1)
  })
  test('Escape return focus cannot cross suspension', async () => {
    const fixture = await create()
    fixture.key(fixture.panel, 'Escape')
    const old = ticks.splice(0)
    fixture.active.value = false; await settle()
    fixture.active.value = true; await settle()
    old.forEach(callback => callback())
    expect(fixture.focusReference).not.toHaveBeenCalled()
  })
  test('inactive retained key handler neither expands nor prevents default', async () => {
    const fixture = await create()
    fixture.active.value = false; await settle()
    fixture.expand.mockClear()
    const event = fixture.key(fixture.parent, 'ArrowDown')
    await fixture.deliverEnter()
    expect(fixture.expand).not.toHaveBeenCalled()
    expect(event.defaultPrevented).toBe(false)
  })
  test('unmount clears pending enter via lost panel refs', async () => {
    const fixture = await create()
    fixture.key(fixture.parent, 'ArrowDown')
    fixture.wrapper.unmount()
    await fixture.deliverEnter()
    expect(fixture.focus).not.toHaveBeenCalled()
  })
  test('external focus takeover cancels pending enter focus', async () => {
    const fixture = await create()
    const external = document.createElement('button'); document.body.append(external)
    cleanups.push(() => external.remove())
    fixture.parent.focus()
    fixture.key(fixture.parent, 'ArrowDown')
    external.focus()
    await fixture.deliverEnter()
    expect(fixture.focus).not.toHaveBeenCalled()
    expect(document.activeElement).toBe(external)
  })
  test('external focus takeover cancels pending Escape return', async () => {
    const fixture = await create()
    const external = document.createElement('button'); document.body.append(external)
    cleanups.push(() => external.remove())
    fixture.child.focus(); fixture.focus.mockClear()
    fixture.key(fixture.panel, 'Escape')
    external.focus()
    ticks.splice(0).forEach(callback => callback())
    expect(fixture.focusReference).not.toHaveBeenCalled()
  })
  test('Escape callback is consumed once', async () => {
    const fixture = await create()
    fixture.key(fixture.panel, 'Escape')
    ticks.splice(0).forEach(callback => { callback(); callback() })
    expect(fixture.focusReference).toHaveBeenCalledTimes(1)
  })
  test('reactivation accepts a fresh enter command', async () => {
    const fixture = await create()
    fixture.active.value = false; await settle()
    fixture.active.value = true; await settle()
    fixture.key(fixture.parent, 'ArrowDown')
    await fixture.deliverEnter()
    expect(fixture.focus).toHaveBeenCalledTimes(1)
  })
})
