import { defineComponent, h, inject, KeepAlive, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, test, vi } from 'vitest'
import NavMenu from '../menu'
import { navMenuKey, type NavMenuContext } from '../context'
import type { NavMenuNode } from '../types'

const ticks: (() => void)[] = []
vi.mock('vue', async () => {
  const actual = await vi.importActual<typeof import('vue')>('vue')
  return { ...actual, nextTick: (callback?: () => void) => { if (callback) ticks.push(callback); return Promise.resolve() } }
})
vi.mock('../../_utils/resize-observer', () => ({ useElementResize: () => undefined }))
const actualVue = await vi.importActual<typeof import('vue')>('vue')
const cleanups: (() => void)[] = []
afterEach(() => { cleanups.splice(0).reverse().forEach(cleanup => cleanup()); ticks.length = 0; vi.restoreAllMocks() })
async function create() {
  const active = ref(true), size = ref<'md' | 'lg'>('md')
  const menu = ref<any>()
  let context: NavMenuContext
  const nodes = new Map<string, NavMenuNode>()
  const NodeStub = defineComponent({
    props: ['node'],
    setup(props) {
      context = inject(navMenuKey)!
      return () => {
        const node = props.node as NavMenuNode
        nodes.set(String(node.key), node)
        return h('button', { 'data-nav-item': '', 'data-nav-key': node.key, ref: (element: any) => context.register(node, element) }, node.option.label as string)
      }
    },
  })
  const host = document.createElement('div')
  document.body.append(host)
  const wrapper = mount(defineComponent({ setup: () => () => h(KeepAlive, {}, () => active.value
    ? h(NavMenu, { ref: menu, mode: 'horizontal', size: size.value, options: [{ key: 'a', label: 'Alpha' }, { key: 'b', label: 'Beta' }] }) : null) }),
  { attachTo: host, global: { stubs: { CNavMenuNode: NodeStub } } })
  cleanups.push(() => { wrapper.unmount(); host.remove() })
  await actualVue.nextTick()
  ticks.splice(0).forEach(callback => callback())
  await actualVue.nextTick()
  ticks.length = 0
  const root = wrapper.find('nav').element as HTMLElement
  const geometry = vi.fn(() => 80)
  Object.defineProperty(root, 'clientWidth', { configurable: true, get: geometry })
  const measure = root.querySelector('.c-nav-menu__measure')!
  for (const child of Array.from(measure.children)) vi.spyOn(child, 'getBoundingClientRect').mockReturnValue({ width: 60 } as DOMRect)
  return { active, size, menu: menu.value, wrapper, root, geometry, context: context!, nodes }
}

describe('NavMenu measurement and focus scheduling', () => {
  test('active resize reads geometry and folds overflowing roots', async () => {
    const fixture = await create()
    fixture.menu.resize()
    await actualVue.nextTick()
    expect(fixture.geometry).toHaveBeenCalledTimes(1)
    expect(fixture.wrapper.find('[data-nav-key="__nav_more"]').exists()).toBe(true)
  })
  test('inactive retained resize does not read geometry', async () => {
    const fixture = await create()
    fixture.active.value = false
    await actualVue.nextTick()
    fixture.geometry.mockClear()
    fixture.menu.resize()
    expect(fixture.geometry).not.toHaveBeenCalled()
  })
  test('queued configuration resize cannot cross deactivation and reactivation', async () => {
    const fixture = await create()
    fixture.size.value = 'lg'
    await actualVue.nextTick()
    const old = ticks.splice(0)
    fixture.active.value = false
    await actualVue.nextTick()
    fixture.active.value = true
    await actualVue.nextTick()
    fixture.geometry.mockClear()
    old.forEach(callback => callback())
    expect(fixture.geometry).not.toHaveBeenCalled()
  })
  test('geometry getter disposal stops the remaining measurement', async () => {
    const fixture = await create()
    fixture.geometry.mockImplementation(() => { fixture.wrapper.unmount(); return 80 })
    expect(() => fixture.menu.resize()).not.toThrow()
    expect(ticks).toHaveLength(0)
  })
  test('inactive retained context focus does not call a detached element', async () => {
    const fixture = await create()
    const element = fixture.wrapper.find('[data-nav-key="a"]').element as HTMLElement
    const focus = vi.spyOn(element, 'focus')
    fixture.active.value = false
    await actualVue.nextTick()
    fixture.context.focus('a')
    expect(focus).not.toHaveBeenCalled()
  })
  test('selection focus continuation cannot cross suspension', async () => {
    const fixture = await create()
    const element = fixture.wrapper.find('[data-nav-key="a"]').element as HTMLElement
    const focus = vi.spyOn(element, 'focus')
    fixture.context.select(fixture.nodes.get('a')!, new Event('click'))
    const old = ticks.splice(0)
    fixture.active.value = false
    await actualVue.nextTick()
    fixture.active.value = true
    await actualVue.nextTick()
    old.forEach(callback => callback())
    expect(focus).not.toHaveBeenCalled()
  })
  test('a newer selection replaces the old return-focus continuation', async () => {
    const fixture = await create()
    const first = vi.spyOn(fixture.wrapper.find('[data-nav-key="a"]').element as HTMLElement, 'focus')
    const second = vi.spyOn(fixture.wrapper.find('[data-nav-key="b"]').element as HTMLElement, 'focus')
    fixture.context.select(fixture.nodes.get('a')!, new Event('click'))
    fixture.context.select(fixture.nodes.get('b')!, new Event('click'))
    ticks.splice(0).forEach(callback => callback())
    expect(first).not.toHaveBeenCalled()
    expect(second).toHaveBeenCalledTimes(1)
  })
  test('unmount suppresses pending selection focus', async () => {
    const fixture = await create()
    const focus = vi.spyOn(fixture.wrapper.find('[data-nav-key="a"]').element as HTMLElement, 'focus')
    fixture.context.select(fixture.nodes.get('a')!, new Event('click'))
    const old = ticks.splice(0)
    fixture.wrapper.unmount()
    old.forEach(callback => callback())
    expect(focus).not.toHaveBeenCalled()
  })
  test('reactivation accepts a fresh measurement', async () => {
    const fixture = await create()
    fixture.active.value = false
    await actualVue.nextTick()
    fixture.active.value = true
    await actualVue.nextTick()
    fixture.geometry.mockClear()
    fixture.menu.resize()
    expect(fixture.geometry).toHaveBeenCalledTimes(1)
  })
  test('a queued measurement is consumed once', async () => {
    const fixture = await create()
    fixture.size.value = 'lg'
    await actualVue.nextTick()
    const callbacks = ticks.splice(0)
    callbacks.forEach(callback => { callback(); callback() })
    expect(fixture.geometry).toHaveBeenCalledTimes(1)
  })
  test('a selection focus continuation is consumed once', async () => {
    const fixture = await create()
    const focus = vi.spyOn(fixture.wrapper.find('[data-nav-key="a"]').element as HTMLElement, 'focus')
    fixture.context.select(fixture.nodes.get('a')!, new Event('click'))
    ticks.splice(0).forEach(callback => { callback(); callback() })
    expect(focus).toHaveBeenCalledTimes(1)
  })
  test('explicit context focus replaces a queued selection focus', async () => {
    const fixture = await create()
    const first = vi.spyOn(fixture.wrapper.find('[data-nav-key="a"]').element as HTMLElement, 'focus')
    const second = vi.spyOn(fixture.wrapper.find('[data-nav-key="b"]').element as HTMLElement, 'focus')
    fixture.context.select(fixture.nodes.get('a')!, new Event('click'))
    fixture.context.focus('b')
    ticks.splice(0).forEach(callback => callback())
    expect(first).not.toHaveBeenCalled()
    expect(second).toHaveBeenCalledTimes(1)
  })
  test('child geometry disposal stops without scheduling focus', async () => {
    const fixture = await create()
    const child = fixture.root.querySelector('.c-nav-menu__measure')!.firstElementChild!
    vi.spyOn(child, 'getBoundingClientRect').mockImplementation(() => { fixture.wrapper.unmount(); return { width: 60 } as DOMRect })
    expect(() => fixture.menu.resize()).not.toThrow()
    expect(ticks).toHaveLength(0)
  })
  test('selection return does not steal an external control focus', async () => {
    const fixture = await create()
    const external = document.createElement('button')
    document.body.append(external)
    cleanups.push(() => external.remove())
    fixture.context.select(fixture.nodes.get('a')!, new Event('click'))
    external.focus()
    ticks.splice(0).forEach(callback => callback())
    expect(document.activeElement === external).toBe(true)
  })
  test('folding return does not steal focus after the original row is removed', async () => {
    const fixture = await create()
    const external = document.createElement('button')
    document.body.append(external)
    cleanups.push(() => external.remove())
    ;(fixture.wrapper.find('[data-nav-key="b"]').element as HTMLElement).focus()
    fixture.menu.resize()
    await actualVue.nextTick()
    external.focus()
    ticks.splice(0).forEach(callback => callback())
    expect(document.activeElement === external).toBe(true)
  })
  test('folding restores a removed row focus when nobody else took it', async () => {
    const fixture = await create()
    ;(fixture.wrapper.find('[data-nav-key="b"]').element as HTMLElement).focus()
    fixture.menu.resize()
    await actualVue.nextTick()
    ticks.splice(0).forEach(callback => callback())
    expect((document.activeElement as HTMLElement).dataset.navKey).toBe('__nav_more')
  })
})
