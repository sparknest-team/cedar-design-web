import { defineComponent, h, inject, KeepAlive, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, test, vi } from 'vitest'
import NavMenu from '../menu'
import { navMenuKey, type NavMenuContext } from '../context'
import type { NavMenuNode } from '../types'

vi.mock('../../_utils/resize-observer', () => ({ useElementResize: () => undefined }))
const cleanups: (() => void)[] = []
afterEach(() => { cleanups.splice(0).reverse().forEach(cleanup => cleanup()); vi.restoreAllMocks() })
async function create(onUpdate?: (key: string | number | null) => void) {
  const active = ref(true), menu = ref<any>()
  const options = [{ key: 'p', label: 'Parent', children: [{ key: 'a', label: 'Alpha' }] }, { key: 'b', label: 'Beta' }]
  let context: NavMenuContext
  const nodes = new Map<string, NavMenuNode>()
  const NodeStub = defineComponent({
    props: ['node'],
    setup(props) {
      context = inject(navMenuKey)!
      return () => {
        const node = props.node as NavMenuNode
        nodes.set(String(node.key), node)
        return h('button', { 'data-nav-item': '', 'data-nav-key': node.key, ref: (element: any) => context.register(node, element) }, String(node.option.label))
      }
    },
  })
  const host = document.createElement('div')
  document.body.append(host)
  const wrapper = mount(defineComponent({ setup: () => () => h(KeepAlive, {}, () => active.value
    ? h(NavMenu, { ref: menu, options, 'onUpdate:modelValue': onUpdate }) : null) }), { attachTo: host, global: { stubs: { CNavMenuNode: NodeStub } } })
  cleanups.push(() => { wrapper.unmount(); host.remove() })
  await nextTick()
  return { active, menu: menu.value, component: wrapper.findComponent(NavMenu), wrapper, context: context!, nodes }
}

describe('NavMenu retained root commands and registration', () => {
  for (const command of ['showOption', 'setCollapsed', 'setActiveItem', 'select', 'expand', 'activateItem'] as const) {
    test(`inactive retained ${command} is inert`, async () => {
      const fixture = await create()
      const close = vi.fn()
      fixture.context.registerItem(Symbol('independent'), close)
      fixture.active.value = false
      await nextTick()
      const before = fixture.component.emitted()
      const counts = Object.fromEntries(Object.entries(before).map(([name, events]) => [name, events.length]))
      if (command === 'showOption') fixture.menu.showOption('a')
      else if (command === 'setCollapsed') fixture.menu.setCollapsed(true)
      else if (command === 'setActiveItem') fixture.menu.setActiveItem('b')
      else if (command === 'select') fixture.context.select(fixture.nodes.get('b')!, new Event('click'))
      else if (command === 'expand') fixture.context.expand(fixture.nodes.get('p')!, true)
      else fixture.context.activateItem()
      await nextTick()
      const after = fixture.component.emitted()
      expect(Object.fromEntries(Object.entries(after).map(([name, events]) => [name, events.length]))).toEqual(counts)
      expect(close).not.toHaveBeenCalled()
    })
  }
  test('disposed retained state commands do not change exposed context', async () => {
    const fixture = await create()
    fixture.wrapper.unmount()
    fixture.menu.showOption('a')
    fixture.menu.setCollapsed(true)
    fixture.menu.setActiveItem('b')
    fixture.context.select(fixture.nodes.get('b')!, new Event('click'))
    expect(fixture.context.expanded.value).toEqual([])
    expect(fixture.context.collapsed.value).toBe(false)
    expect(fixture.context.activeItem.value).toBeNull()
    expect(fixture.context.selected.value).toBeNull()
  })
  test('old node unregister cannot delete the replacement registration', async () => {
    const fixture = await create()
    const node = fixture.nodes.get('b')!
    const replacement = { ...node }
    const element = document.createElement('button')
    const focus = vi.spyOn(element, 'focus')
    fixture.context.register(replacement, element)
    fixture.context.register(node, null)
    fixture.context.focus('b')
    expect(focus).toHaveBeenCalledTimes(1)
  })
  test('current node unregister removes its own registration', async () => {
    const fixture = await create()
    const node = fixture.nodes.get('b')!
    const element = document.createElement('button')
    const focus = vi.spyOn(element, 'focus')
    fixture.context.register(node, element)
    fixture.context.register(node, null)
    fixture.context.focus('b')
    expect(focus).not.toHaveBeenCalled()
  })
  test('active public commands and reactivation still work', async () => {
    const fixture = await create()
    fixture.menu.showOption('a')
    expect(fixture.context.expanded.value).toEqual(['p'])
    fixture.active.value = false
    await nextTick()
    fixture.active.value = true
    await nextTick()
    fixture.menu.setCollapsed(true)
    fixture.menu.setActiveItem('b')
    expect(fixture.context.collapsed.value).toBe(true)
    expect(fixture.context.activeItem.value).toBe('b')
  })
  test('close callback disposal stops remaining closers and selection writes', async () => {
    const fixture = await create()
    const second = vi.fn()
    fixture.context.registerItem(Symbol('dispose'), () => fixture.wrapper.unmount())
    fixture.context.registerItem(Symbol('later'), second)
    fixture.context.select(fixture.nodes.get('b')!, new Event('click'))
    expect(second).not.toHaveBeenCalled()
    expect(fixture.context.selected.value).toBeNull()
  })
  test('close callback disposal stops expansion writes', async () => {
    const fixture = await create()
    fixture.context.registerItem(Symbol('dispose'), () => fixture.wrapper.unmount())
    fixture.context.expand(fixture.nodes.get('p')!, true)
    expect(fixture.context.expanded.value).toEqual([])
  })
  test('inactive keyboard does not inspect or prevent the retained event', async () => {
    const fixture = await create()
    const handler = (fixture.component.vm.$.subTree.props as any).onKeydown
    const element = fixture.wrapper.find('button').element as HTMLElement
    const closest = vi.spyOn(element, 'closest')
    fixture.active.value = false
    await nextTick()
    const preventDefault = vi.fn()
    handler({ key: 'Home', target: element, preventDefault })
    expect(closest).not.toHaveBeenCalled()
    expect(preventDefault).not.toHaveBeenCalled()
  })
  test('newly registered closer is not consumed by the old activation', async () => {
    const fixture = await create()
    const added = vi.fn()
    fixture.context.registerItem(Symbol('first'), () => fixture.context.registerItem(Symbol('added'), added))
    fixture.context.activateItem()
    expect(added).not.toHaveBeenCalled()
  })
  test('nested activation supersedes the outer closer iteration', async () => {
    const fixture = await create()
    const first = Symbol('first'), second = vi.fn()
    fixture.context.registerItem(first, () => fixture.context.activateItem(first))
    fixture.context.registerItem(Symbol('second'), second)
    fixture.context.activateItem()
    expect(second).toHaveBeenCalledTimes(1)
  })
  test('a newer selection in update callback replaces the old select notification', async () => {
    let fixture: Awaited<ReturnType<typeof create>>
    fixture = await create(key => {
      if (key === 'b') fixture.context.select(fixture.nodes.get('p')!.children[0], new Event('click'))
    })
    fixture.context.select(fixture.nodes.get('b')!, new Event('click'))
    expect(fixture.context.selected.value).toBe('a')
    expect(fixture.component.emitted('select')?.map(event => event[0])).toEqual(['a'])
  })
  test('disposed registrations cannot retain new elements or callbacks', async () => {
    const fixture = await create()
    const node = fixture.nodes.get('b')!, element = document.createElement('button')
    const focus = vi.spyOn(element, 'focus'), close = vi.fn()
    fixture.wrapper.unmount()
    fixture.context.register(node, element)
    const unregister = fixture.context.registerItem(Symbol('late'), close, 'b')
    expect(() => unregister()).not.toThrow()
    fixture.context.activateItem()
    fixture.context.focus('b')
    expect(close).not.toHaveBeenCalled()
    expect(focus).not.toHaveBeenCalled()
  })
})
