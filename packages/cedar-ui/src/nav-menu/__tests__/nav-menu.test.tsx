import { createApp, createSSRApp, h, nextTick } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { mount } from '@vue/test-utils'
import { describe, test, expect, afterEach, vi } from 'vitest'
import NavMenu from '..'
import { createNavMenuTree } from '../tree'
import SizeDemo from '../__demos__/size.vue'
const cleanups: (() => void)[] = []
afterEach(() => cleanups.splice(0).reverse().forEach(fn => fn()))
const settle = async () => { await nextTick(); await new Promise(resolve => setTimeout(resolve, 40)); await nextTick() }
async function create(props: Record<string, any> = {}, slots = {}) {
  const host = document.createElement('div'); document.body.append(host)
  const wrapper = mount(NavMenu, { attachTo: host, props: { popupContainer: false, ...props }, slots })
  cleanups.push(() => { wrapper.unmount(); host.remove() }); await settle(); return wrapper
}
const options = [
  { key: 0, label: 'Home' },
  { key: 'parent', label: 'Products', children: [{ key: 'a', label: 'Alpha' }, { key: 'off', label: 'Disabled', disabled: true }, { key: 'b', label: 'Beta' }] },
  { key: 'second', label: 'Other', children: [{ key: 'c', label: 'Gamma' }] },
]
const row = (wrapper: any, key: string | number) => wrapper.find(`[data-nav-key="${key}"]`)
async function press(element: HTMLElement, key: string) { element.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true })); await settle() }

describe('NavMenu options API', () => {
  test('render', async () => { const w = await create(); expect(w.html()).toMatchSnapshot() })
  test('installs the root and independent Item', () => { const app = createApp({}); app.use(NavMenu); expect(app.component('CNavMenu')).toBe(NavMenu); expect(app.component('CNavMenuItem')).toBe(NavMenu.Item) })
  test('zero key, uncontrolled selection and original payload', async () => {
    const w = await create({ options }); await row(w, 0).trigger('click')
    expect(w.emitted('update:modelValue')).toEqual([[0]])
    expect(w.emitted('select')![0][0]).toBe(0)
    expect(w.emitted('select')![0][1]).toEqual(options[0])
    expect(row(w, 0).attributes('aria-current')).toBe('page')
  })
  test('controlled selection rejection retains the current item', async () => {
    const w = await create({ options, modelValue: 'a' }); await row(w, 0).trigger('click')
    expect(row(w, 'a').attributes('aria-current')).toBe('page')
    expect(row(w, 0).attributes('aria-current')).toBeUndefined()
    await w.setProps({ modelValue: 0 }); expect(row(w, 0).attributes('aria-current')).toBe('page')
  })
  test('controlled expanded rejection never reveals children', async () => {
    const w = await create({ options, expandedKeys: [] }); await row(w, 'parent').trigger('click')
    expect(w.emitted('update:expandedKeys')).toEqual([[['parent']]])
    expect(row(w, 'a').exists()).toBe(false)
    await w.setProps({ expandedKeys: ['parent'] }); expect(row(w, 'a').exists()).toBe(true)
  })
  test('accordion closes siblings and keeps the selected ancestor highlighted', async () => {
    const w = await create({ options, defaultValue: 'a', accordion: true })
    expect(row(w, 'parent').classes()).toContain('c-nav-menu--active')
    await row(w, 'second').trigger('click')
    expect(row(w, 'a').exists()).toBe(false); expect(row(w, 'c').exists()).toBe(true)
  })
  test('group, divider, hidden nodes and disabled links', async () => {
    const w = await create({ options: [{ type: 'group', label: 'Group', children: [{ key: 'a', label: 'Alpha' }] }, { type: 'divider' }, { key: 'hidden', show: false }, { key: 'off', disabled: true, label: h('a', { href: '#blocked' }, 'Disabled') }] })
    expect(w.find('[role="group"]').exists()).toBe(true); expect(w.find('[role="separator"]').exists()).toBe(true)
    expect(row(w, 'hidden').exists()).toBe(false)
    const event = new MouseEvent('click', { bubbles: true, cancelable: true }); row(w, 'off').find('a').element.dispatchEvent(event)
    expect(event.defaultPrevented).toBe(true); expect(w.emitted('select')).toBeUndefined()
  })
  test('field mapping and dynamic options update paths', async () => {
    const w = await create({ options: [{ id: 0, text: 'Zero', nodes: [{ id: 1, text: 'One' }] }], fieldNames: { key: 'id', label: 'text', children: 'nodes' }, modelValue: 1 })
    expect(row(w, 1).text()).toContain('One')
    await w.setProps({ options: [{ id: 0, text: 'Changed' }] }); await settle()
    expect(row(w, 1).exists()).toBe(false); expect(row(w, 0).text()).toContain('Changed')
  })
  test('VNode, render functions, scoped slots and node props compose', async () => {
    const click = vi.fn(); const render = vi.fn(context => context.selected ? 'Selected' : 'Unselected')
    const w = await create({ options: [{ key: 'x', label: render, icon: h('i', 'icon'), extra: h('b', 'extra') }], nodeProps: () => ({ 'data-custom': 'yes', onClick: click }) })
    expect(w.text()).toContain('Unselected'); expect(w.find('i').text()).toBe('icon')
    await row(w, 'x').trigger('click'); expect(click).toHaveBeenCalledTimes(1); expect(w.text()).toContain('Selected')
    expect(row(w, 'x').attributes('data-custom')).toBe('yes')
    const slotted = await create({ options: [{ key: 'x', label: 'Base' }] }, { label: ({ option }: any) => h('strong', option.label + ' slot') })
    expect(slotted.find('strong').text()).toBe('Base slot')
  })
  test('keyboard roves, skips disabled, opens/closes branches and selects once', async () => {
    const w = await create({ options }); const home = row(w, 0).element as HTMLElement; home.focus()
    await press(home, 'ArrowDown'); expect(document.activeElement).toBe(row(w, 'parent').element)
    await press(document.activeElement as HTMLElement, 'ArrowRight'); expect(document.activeElement).toBe(row(w, 'a').element)
    await press(document.activeElement as HTMLElement, 'ArrowDown'); expect(document.activeElement).toBe(row(w, 'b').element)
    await press(document.activeElement as HTMLElement, ' '); expect(w.emitted('select')).toHaveLength(1)
    await press(document.activeElement as HTMLElement, 'ArrowLeft'); expect(document.activeElement).toBe(row(w, 'parent').element)
    expect(w.findAll('[data-nav-item][tabindex="0"]')).toHaveLength(1)
  })
  test('ArrowLeft crosses a non-selectable group to its parent branch', async () => {
    const w = await create({ options: [{ key: 'p', label: 'Parent', children: [{ type: 'group', label: 'Group', children: [{ key: 'child', label: 'Child' }] }] }], defaultExpandedKeys: ['p'] })
    const child = row(w, 'child').element as HTMLElement; child.focus(); await press(child, 'ArrowLeft')
    expect(document.activeElement).toBe(row(w, 'p').element)
    expect(row(w, 'child').exists()).toBe(false)
  })
  test('horizontal arrows and Trigger popup Escape restore focus', async () => {
    const w = await create({ options, mode: 'horizontal', responsive: false })
    const home = row(w, 0).element as HTMLElement; home.focus(); await press(home, 'ArrowRight')
    const parent = row(w, 'parent').element as HTMLElement
    expect(document.activeElement).toBe(parent); await press(parent, 'ArrowDown')
    expect(document.activeElement?.textContent).toContain('Alpha')
    await press(document.activeElement as HTMLElement, 'Escape'); expect(document.activeElement).toBe(parent)
  })
  test('showOption expands a path without selecting', async () => {
    const w = await create({ options }); w.vm.showOption('b'); await settle()
    expect(row(w, 'b').exists()).toBe(true); expect(w.emitted('select')).toBeUndefined()
  })
  test('collapsed mode keeps accessible labels and opens a popup', async () => {
    const w = await create({ options, collapsed: true })
    expect(row(w, 0).attributes('aria-label')).toBe('Home')
    const parent = row(w, 'parent').element as HTMLElement; parent.focus(); await press(parent, 'ArrowRight')
    expect(document.activeElement?.textContent).toContain('Alpha')
  })
  test('collapsed VNode labels render in Tooltip content without string coercion', async () => {
    const w = await create({ collapsed: true, options: [{ key: 'vnode', label: h('strong', 'Rich label') }] })
    await row(w, 'vnode').trigger('mouseenter')
    await new Promise(resolve => setTimeout(resolve, 180)); await settle()
    expect(w.find('[role="tooltip"] strong').text()).toBe('Rich label')
  })
  test('global disabled prevents selection and expansion', async () => {
    const w = await create({ options, disabled: true }); await row(w, 0).trigger('click'); await row(w, 'parent').trigger('click')
    expect(w.emitted('select')).toBeUndefined(); expect(w.emitted('update:expandedKeys')).toBeUndefined()
  })
  test('all size demos use the options root', async () => {
    const w = mount(SizeDemo, { global: { components: { CNavMenu: NavMenu } } }); cleanups.push(() => w.unmount())
    expect(w.findAllComponents(NavMenu)).toHaveLength(5)
  })
  test('SSR is deterministic and renders selected ancestry', async () => {
    const render = () => renderToString(createSSRApp({ render: () => h(NavMenu, { options, defaultValue: 'a' }) }))
    const a = await render(); expect(a).toBe(await render()); expect(a).toContain('Alpha'); expect(a).toContain('aria-current="page"')
  })
  test('tree rejects duplicate and missing item keys', () => {
    expect(() => createNavMenuTree([{ label: 'Missing' }])).toThrow('require')
    expect(() => createNavMenuTree([{ key: 0 }, { key: 0 }])).toThrow('duplicate')
    const tree = createNavMenuTree(options); expect(tree.ancestors('a').map(node => node.key)).toEqual(['parent'])
  })
})

test('horizontal and inline arrows follow accepted expansion state', async () => {
  const horizontal = await create({ options, mode: 'horizontal', expandedKeys: [] })
  const arrow = () => row(horizontal, 'parent').find('.c-nav-menu__arrow')
  expect(arrow().classes()).toContain('c-nav-menu--arrow-down')
  await row(horizontal, 'parent').trigger('click')
  expect(arrow().classes()).toContain('c-nav-menu--arrow-down')
  await horizontal.setProps({ expandedKeys: ['parent'] })
  expect(arrow().classes()).toContain('c-nav-menu--arrow-up')
  await horizontal.setProps({ expandedKeys: [] })
  expect(arrow().classes()).toContain('c-nav-menu--arrow-down')
  const vertical = await create({ options })
  expect(row(vertical, 'parent').find('.c-nav-menu__arrow').classes()).toContain('c-nav-menu--arrow-right')
  await row(vertical, 'parent').trigger('click')
  expect(row(vertical, 'parent').find('.c-nav-menu__arrow').classes()).toContain('c-nav-menu--arrow-down')
})

test('hovering branches moved into More preserves the overflow ancestor', async () => {
  const w = await create({ options, mode: 'horizontal' })
  const root = w.find('nav').element
  Object.defineProperty(root, 'clientWidth', { configurable: true, value: 100 })
  for (const el of Array.from(w.find('.c-nav-menu__measure').element.children)) {
    el.getBoundingClientRect = () => ({ width: 90 } as DOMRect)
  }
  ;(w.vm as any).resize(); await settle()
  const more = () => row(w, '__nav_more')
  await more().trigger('mouseenter'); await new Promise(resolve => setTimeout(resolve, 150)); await settle()
  expect(more().attributes('aria-expanded')).toBe('true')
  await row(w, 'parent').trigger('mouseenter'); await new Promise(resolve => setTimeout(resolve, 150)); await settle()
  expect(more().attributes('aria-expanded')).toBe('true')
  expect(row(w, 'parent').attributes('aria-expanded')).toBe('true')
  expect(row(w, 'a').exists()).toBe(true)
  await row(w, 'second').trigger('mouseenter'); await new Promise(resolve => setTimeout(resolve, 150)); await settle()
  expect(more().attributes('aria-expanded')).toBe('true')
  expect(row(w, 'parent').attributes('aria-expanded')).toBe('false')
  expect(row(w, 'second').attributes('aria-expanded')).toBe('true')
})
