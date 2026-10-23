import { mount, flushPromises } from '@vue/test-utils'
import { expect, test } from 'vitest'
import DateRange from '..'
import EditorPanel from '../../_components/field-presentation/EditorPanel.vue'

const pc = true
async function fixture(initial = ['2026-10-19', '2026-10-22']) {
  const wrapper = mount(DateRange, { props: {
    modelValue: initial, presentation: 'dialog', valueFormat: 'YYYY-MM-DD',
    ...(!pc ? { panelType: 'calendar' } : {}),
  } })
  await wrapper.get('[aria-haspopup=dialog]').trigger('click')
  await flushPromises()
  const panel = wrapper.getComponent(EditorPanel)
  const cells = () => panel.findAll(pc ? '.c-picker-cell-in-view' : '.mp-day-picker__button--usable')
  const cell = (day, calendar = 0) => cells().filter(node => node.text() === String(day))[calendar]
  const filled = () => cells().filter(node => node.classes().includes(pc ? 'c-picker-cell-in-range' : 'mp-button--status-primary')).map(node => node.text())
  const confirm = async () => {
    await panel.findAll('button').find(node => ['确定', '确认'].includes(node.text())).trigger('click')
    await flushPromises()
  }
  return { wrapper, panel, cells, cell, filled, confirm }
}
for (const [start, end, expected] of [[26,28,['26','27','28']], [28,26,['26','27','28']], [26,26,['26']]]) {
  test(`current-month ${start} to ${end} only highlights its ordered candidate`, async () => {
    const f = await fixture()
    try {
      expect(f.filled()).toEqual(['19','20','21','22'])
      await f.cell(start).trigger('click')
      expect(f.filled().every(day => day === String(start))).toBe(true)
      await f.cell(end).trigger('click')
      expect(f.filled()).toEqual(expected)
      expect(f.wrapper.emitted('update:modelValue')).toBeUndefined()
      await f.confirm()
      expect(f.wrapper.emitted('update:modelValue')).toEqual([[[`2026-10-${Math.min(start,end)}`, `2026-10-${Math.max(start,end)}`]]])
    } finally { f.wrapper.unmount() }
  })
}
test('hover never changes the candidate or commits a value', async () => {
  const f = await fixture()
  try {
    await f.cell(26).trigger('click')
    const selected = f.wrapper.emitted('select')?.length
    await f.cell(28).trigger('mouseenter')
    expect(f.wrapper.emitted('select')?.length).toBe(selected)
    expect(f.wrapper.emitted('update:modelValue')).toBeUndefined()
    if (pc) {
      expect(f.panel.findAll('.c-picker-cell-hover-in-range').map(node => node.text())).toEqual(['26','27','28'])
      expect(f.filled()).toEqual([])
      await f.panel.get('.c-picker-range-wrapper').trigger('mouseleave')
      expect(f.filled()).toEqual([])
      expect(f.cell(26).classes()).toContain('c-picker-cell-range-start')
    } else {
      expect(f.filled()).toEqual(['26'])
    }
  } finally { f.wrapper.unmount() }
})

test('cross-month selection highlights only visible dates inside both endpoints', async () => {
  const f = await fixture()
  try {
    await f.cell(26).trigger('click')
    if (!pc) {
      await f.panel.findAll('button').find(node => node.attributes('aria-label') === '下一月').trigger('click')
      await flushPromises()
    }
    await f.cell(2, pc ? 1 : 0).trigger('click')
    expect(f.filled()).toEqual(pc ? ['26','27','28','29','30','31','1','2'] : ['1','2'])
    await f.confirm()
    expect(f.wrapper.emitted('update:modelValue')).toEqual([[['2026-10-26','2026-11-02']]])
  } finally { f.wrapper.unmount() }
})

test('an adjacent-month 28 is September 28, not October 28', async () => {
  const f = await fixture()
  try {
    await f.cell(26).trigger('click')
    const adjacent = f.panel.findAll('.c-picker-cell').find(node => node.text() === '28' && !node.classes().includes('c-picker-cell-in-view'))
    await adjacent.trigger('click')
    expect(f.filled()).toEqual(Array.from({ length: 26 }, (_, index) => String(index + 1)))
    await f.confirm()
    expect(f.wrapper.emitted('update:modelValue')).toEqual([[['2026-09-28', '2026-10-26']]])
  } finally { f.wrapper.unmount() }
})
