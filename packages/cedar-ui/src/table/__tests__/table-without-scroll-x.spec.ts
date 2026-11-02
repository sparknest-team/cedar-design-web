import { flushPromises, mount } from '@vue/test-utils'
import { afterAll, expect, test, vi } from 'vitest'
import Table from '..'
import StickyScrollbar from '../StickyScrollbar.vue'
import { tableProps } from '../props'

let containerWidth = 480
const callbacks: ((entries: unknown[]) => void)[] = []
vi.mock('resize-observer-polyfill', () => ({
  default: class {
    constructor(callback: (entries: unknown[]) => void) { callbacks.push(callback) }
    observe() {}
    unobserve() {}
    disconnect() {}
  },
}))
const original = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'clientWidth')
Object.defineProperty(HTMLElement.prototype, 'clientWidth', { configurable: true, get: () => containerWidth })
afterAll(() => {
  if (original) Object.defineProperty(HTMLElement.prototype, 'clientWidth', original)
  else delete (HTMLElement.prototype as any).clientWidth
})

test('CSS fixed/100% widths, mixed columns and fixed offsets recompute without scroll.x', async () => {
  expect(tableProps).not.toHaveProperty('scroll')
  const owner = mount(Table, {
    attrs: { style: { width: '480px' } },
    props: {
      columns: [
        { title: 'Name', dataIndex: 'name', width: 140, fixed: 'left' },
        { title: 'Owner', dataIndex: 'owner', minWidth: 160 },
        { title: 'Status', dataIndex: 'status', width: 120, fixed: 'right' },
      ],
      data: [{ name: 'Task', owner: 'Lee', status: 'Ready' }],
      stickyPagination: 0,
    },
    global: { provide: { [Symbol.for('v-scx')]: { modules: new Set() } } },
  })
  const resize = async (width: number) => {
    containerWidth = width
    callbacks.forEach(callback => callback([{}]))
    await new Promise<void>(resolve => requestAnimationFrame(() => resolve()))
    await flushPromises()
  }
  const widths = () => owner.findAll('colgroup col').map(col => col.attributes('width'))
  try {
    await resize(480)
    expect(owner.attributes('style')).toContain('width: 480px')
    expect(widths()).toEqual(['140', '220', '120'])
    await owner.setProps({ style: { width: '100%' } } as any)
    await resize(640)
    expect(owner.attributes('style')).toContain('width: 100%')
    expect(widths()).toEqual(['140', '380', '120'])
    await resize(360)
    expect(widths()).toEqual(['140', '160', '120'])
    expect(owner.get('table').attributes('style')).toContain('width: 420px')
    expect(owner.get('td[data-column-key="name"]').attributes('style')).toContain('left: 0px')
    expect(owner.get('td[data-column-key="status"]').attributes('style')).toContain('right: 0px')
    await owner.get('.c-table').trigger('mouseenter')
    expect(owner.getComponent(StickyScrollbar).props('active')).toBe(true)
    await owner.get('.c-table').trigger('mouseleave')
    expect(owner.getComponent(StickyScrollbar).props('active')).toBe(false)
    await resize(640)
    expect(widths()).toEqual(['140', '380', '120'])
  } finally { owner.unmount() }
})

test('height constraints split the header/body and disappear when constraints are removed', async () => {
  const owner = mount(Table, {
    props: {
      columns: [{ title: 'Name', dataIndex: 'name', width: 700 }],
      data: [{ name: 'Task' }],
      pagination: false,
      height: 120,
    },
    global: { provide: { [Symbol.for('v-scx')]: { modules: new Set() } } },
  })
  try {
    await flushPromises()
    expect(owner.find('.c-table-split').exists()).toBe(true)
    expect(owner.get('.c-table-body').attributes('style')).toContain('max-height: 120px')
    await owner.setProps({ height: undefined, maxHeight: 180 })
    await flushPromises()
    expect(owner.find('.c-table-split').exists()).toBe(true)
    expect(owner.get('.c-table-body').attributes('style')).toContain('max-height: 180px')
    await owner.setProps({ maxHeight: undefined })
    await flushPromises()
    expect(owner.find('.c-table-split').exists()).toBe(false)
  } finally { owner.unmount() }
})
