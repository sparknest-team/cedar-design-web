import { mount } from '@vue/test-utils'
import { h, nextTick } from 'vue'
import { afterEach, describe, expect, test } from 'vitest'
import NavMenu, { NavMenuItem } from '..'
const wrappers: ReturnType<typeof mount>[] = []
afterEach(() => wrappers.splice(0).forEach(w => w.unmount()))
const options = [{ key: 0, label: '全部' }, { key: 'a', label: '分类 A' }, { key: 'off', label: '不可选', disabled: true }]
const settle = async () => { await nextTick(); await new Promise(r => setTimeout(r, 40)); await nextTick() }
async function create(props = {}, slots = {}) {
  const w = mount(NavMenuItem, { attachTo: document.body, props: { label: '分类', options, popupContainer: false, ...props }, slots })
  wrappers.push(w); await settle(); return w
}
const label = (w: any) => w.find('[data-nav-item] > .c-nav-menu__label').text()
describe('independent NavMenuItem', () => {
  test('click opens options and accepted selection updates the label by default', async () => {
    const w = await create(); await w.find('[data-nav-item]').trigger('click'); await settle()
    await w.find('[data-nav-key="a"]').trigger('click'); await settle()
    expect(label(w)).toBe('分类 A'); expect(w.emitted('update:modelValue')).toEqual([['a']])
    expect(w.find('[data-nav-item]').attributes('aria-expanded')).toBe('false')
  })
  test('fixed title, independent active and persistent popup', async () => {
    const w = await create({ defaultOpen: true, hideOnSelect: false, active: false }, { label: () => '分类' })
    await w.find('[data-nav-key="a"]').trigger('click'); await settle()
    expect(label(w)).toBe('分类'); expect(w.find('[data-nav-item]').classes()).not.toContain('c-nav-menu--active')
    expect(w.find('[data-nav-item]').attributes('aria-expanded')).toBe('true')
  })
  test('controlled rejection preserves value and title, then accepts zero', async () => {
    const w = await create({ modelValue: 0, defaultOpen: true, hideOnSelect: false })
    await w.find('[data-nav-key="a"]').trigger('click'); await settle(); expect(label(w)).toBe('全部')
    await w.setProps({ modelValue: 'a' }); expect(label(w)).toBe('分类 A')
  })
  test('custom content selects arbitrary value and closes explicitly', async () => {
    const w = await create({ options: [], defaultOpen: true, hideOnSelect: false }, {
      content: ({ select, close }: any) => [h('button', { onClick: () => select('custom') }, 'Apply'), h('button', { onClick: close }, 'Close')],
      label: ({ modelValue }: any) => modelValue ?? '高级筛选',
    })
    await w.find('button').trigger('click'); expect(label(w)).toBe('custom')
    await w.findAll('button')[1].trigger('click'); await settle(); expect(w.find('[data-nav-item]').attributes('aria-expanded')).toBe('false')
  })
  test('disabled options cannot be selected through slot API', async () => {
    const w = await create({ defaultOpen: true }, { content: ({ select }: any) => h('button', { onClick: () => select('off') }, 'Apply') })
    await w.find('button').trigger('click'); expect(w.emitted('select')).toBeUndefined()
  })
  test('keyboard toggles, controlled open rejection remains closed', async () => {
    const w = await create({ open: false }); await w.find('[data-nav-item]').trigger('keydown', { key: 'Enter' }); await settle()
    expect(w.emitted('update:open')).toEqual([[true]]); expect(w.find('[data-nav-key="a"]').exists()).toBe(false)
  })
  test('root slot entries keep their own selection', async () => {
    const w = mount(NavMenu, { props: { mode: 'horizontal', modelValue: 'home' }, slots: { default: () => h(NavMenuItem, { label: '分类', options, defaultValue: 0 }) } })
    wrappers.push(w); await settle(); expect(w.text()).toContain('全部'); expect(w.find('.c-nav-menu__measure').exists()).toBe(false)
    expect(w.emitted('update:modelValue')).toBeUndefined()
  })
  test('named entries share one uncontrolled active item without clearing panel values', async () => {
    const w = mount(NavMenu, {
      props: { mode: 'horizontal', defaultActiveItem: 'first', popupContainer: false },
      slots: { default: () => [
        h(NavMenuItem, { name: 'first', label: 'First', options, defaultValue: 0 }),
        h(NavMenuItem, { name: 'second', label: 'Second', options, defaultValue: 'a', active: true }),
      ] },
    })
    wrappers.push(w); await settle()
    const items = w.findAllComponents(NavMenuItem)
    expect(items[0].find('[data-nav-item]').classes()).toContain('c-nav-menu--active')
    expect(items[1].find('[data-nav-item]').classes()).not.toContain('c-nav-menu--active')
    await items[1].find('[data-nav-item]').trigger('click'); await settle()
    expect(items[0].find('[data-nav-item]').classes()).toContain('c-nav-menu--active')
    expect(items[1].find('[data-nav-item]').classes()).not.toContain('c-nav-menu--active')
    expect(w.emitted('update:activeItem')).toBeUndefined()
    await items[1].find('[data-nav-key="a"]').trigger('click'); await settle()
    expect(items[0].find('[data-nav-item]').classes()).not.toContain('c-nav-menu--active')
    expect(items[1].find('[data-nav-item]').classes()).toContain('c-nav-menu--active')
    expect(items[0].find('[data-nav-item] > .c-nav-menu__label').text()).toBe('全部')
    expect(items[1].find('[data-nav-item] > .c-nav-menu__label').text()).toBe('分类 A')
    expect(w.emitted('update:activeItem')).toEqual([['second']])
  })
  test('named popup entry activates only after selecting a leaf', async () => {
    const w = mount(NavMenu, {
      props: { mode: 'horizontal', popupContainer: false },
      slots: { default: () => h(NavMenuItem, { name: 'filter', label: 'Filter', options }) },
    })
    wrappers.push(w); await settle()
    const item = w.findComponent(NavMenuItem)
    await item.find('[data-nav-item]').trigger('click'); await settle()
    expect(item.find('[data-nav-item]').classes()).not.toContain('c-nav-menu--active')
    expect(w.emitted('update:activeItem')).toBeUndefined()
    await item.find('[data-nav-key="a"]').trigger('click'); await settle()
    expect(item.find('[data-nav-item]').classes()).toContain('c-nav-menu--active')
    expect(w.emitted('update:activeItem')).toEqual([['filter']])
  })
  test('controlled active item changes only after the parent accepts the request', async () => {
    const w = mount(NavMenu, {
      props: { mode: 'horizontal', activeItem: 'first' },
      slots: { default: () => [
        h(NavMenuItem, { name: 'first', label: 'First' }),
        h(NavMenuItem, { name: 'second', label: 'Second' }),
      ] },
    })
    wrappers.push(w); await settle()
    const items = w.findAllComponents(NavMenuItem)
    await items[1].find('[data-nav-item]').trigger('click')
    expect(w.emitted('update:activeItem')).toEqual([['second']])
    expect(items[0].find('[data-nav-item]').classes()).toContain('c-nav-menu--active')
    expect(items[1].find('[data-nav-item]').classes()).not.toContain('c-nav-menu--active')
    await w.setProps({ activeItem: 'second' })
    expect(items[0].find('[data-nav-item]').classes()).not.toContain('c-nav-menu--active')
    expect(items[1].find('[data-nav-item]').classes()).toContain('c-nav-menu--active')
  })
  test('viewport layouts and custom dimensions apply to panel', async () => {
    const w = await create({ defaultOpen: true, popupLayout: 'full-width' })
    expect(w.find('.c-nav-menu__panel--full-width').attributes('style')).toContain('position: fixed')
    await w.setProps({ popupLayout: 'full-height', popupStyle: { width: '600px' } })
    expect(w.find('.c-nav-menu__panel--full-height').attributes('style')).toContain('width: 600px')
  })
})

for (const mode of ['horizontal', 'vertical'] as const) {
  test(`${mode}: sibling panels close on keyboard open and plain entry click`, async () => {
    const w = mount(NavMenu, { attachTo: document.body, props: { mode, popupContainer: false }, slots: { default: () => [
      h(NavMenuItem, { label: 'First', options }),
      h(NavMenuItem, { label: 'Second', options }),
      h(NavMenuItem, { label: 'Page' }),
    ] } })
    wrappers.push(w); await settle()
    const items = w.findAllComponents(NavMenuItem)
    const entry = (i: number) => items[i].find('[data-nav-item]')
    await entry(0).trigger('keydown', { key: 'Enter' }); await settle()
    expect(entry(0).attributes('aria-expanded')).toBe('true')
    await entry(1).trigger('keydown', { key: 'Enter' }); await settle()
    expect(entry(0).attributes('aria-expanded')).toBe('false')
    expect(entry(1).attributes('aria-expanded')).toBe('true')
    await entry(2).trigger('click'); await settle()
    expect(entry(1).attributes('aria-expanded')).toBe('false')
  })
}

test('full-height side placement stays attached to reference after resize', async () => {
  const w = await create({ popupLayout: 'full-height', placement: 'right-start' })
  const entry = w.find('[data-nav-item]').element as HTMLElement
  let right = 320
  entry.getBoundingClientRect = () => ({ left: right - 200, right, top: 120, bottom: 160, width: 200, height: 40, x: right - 200, y: 120, toJSON: () => ({}) })
  await w.find('[data-nav-item]').trigger('click'); await settle()
  const panel = () => w.find('.c-nav-menu__panel--full-height').element as HTMLElement
  expect(panel().style.left).toBe('320px')
  expect(panel().style.right).toBe('auto')
  expect(panel().style.top).toBe('0px')
  expect(panel().style.bottom).toBe('0px')
  right = 460; window.dispatchEvent(new Event('resize')); await settle()
  expect(panel().style.left).toBe('460px')
})

test('independent side panel arrow reverses on open and restores on close', async () => {
  const w = await create({ placement: 'right-start' })
  const arrow = () => w.find('[data-nav-item] > .c-nav-menu__arrow')
  expect(arrow().classes()).toContain('c-nav-menu--arrow-right')
  await w.find('[data-nav-item]').trigger('keydown', { key: 'Enter' }); await settle()
  expect(arrow().classes()).toContain('c-nav-menu--arrow-left')
  await w.find('[data-nav-item]').trigger('keydown', { key: 'Enter' }); await settle()
  expect(arrow().classes()).toContain('c-nav-menu--arrow-right')
})

test('v-model alone updates title, resets fallback and follows option replacement', async () => {
  const w = await create({ modelValue: 0 })
  expect(label(w)).toBe('全部')
  await w.setProps({ modelValue: 'a' }); expect(label(w)).toBe('分类 A')
  await w.setProps({ options: [{ key: 'a', label: '新名称' }] }); expect(label(w)).toBe('新名称')
  await w.setProps({ modelValue: null }); expect(label(w)).toBe('分类')
  await w.setProps({ modelValue: 'custom' }); expect(label(w)).toBe('分类')
})
