import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import Transfer from '../index'
import Search from '../../search'

const callbacks: Array<{ onEnd: (event: { oldIndex: number; newIndex: number }) => void }> = []
vi.mock('sortablejs', () => ({ default: { create: vi.fn((_element, options) => {
  callbacks.push(options)
  return { destroy: vi.fn() }
}) } }))

test('reordering filtered target rows retains hidden required rows and target metadata', async () => {
  callbacks.length = 0
  const model = [{ value: 'a', label: 'Custom A' }, { value: 'b', label: 'Required B' }, { value: 'unknown', label: 'Remote selection' }, { value: 'c', label: 'Custom C' }]
  const wrapper = mount(Transfer, { props: {
    data: [{ value: 'a', label: 'A' }, { value: 'b', label: 'B', required: true }, { value: 'c', label: 'C' }],
    modelValue: model, targetDraggable: true, targetFilterable: true,
    filter: (_query, item) => item.value !== 'b' && item.value !== 'unknown',
  } })
  try {
    const target = wrapper.get('.c-transfer-view-target')
    target.findComponent(Search).vm.$emit('update:modelValue', 'visible')
    await nextTick(); await nextTick()
    expect(callbacks).toHaveLength(1)
    expect(callbacks[0]).toMatchObject({ handle: '.c-transfer-list-item-drag-handle' })
    callbacks[0].onEnd({ oldIndex: 0, newIndex: 1 })
    const updated = wrapper.emitted('update:modelValue')?.at(-1)?.[0]
    expect(updated).toEqual([model[3], model[1], model[2], model[0]])
    expect(model.map(item => item.value)).toEqual(['a', 'b', 'unknown', 'c'])
    callbacks[0].onEnd({ oldIndex: -1, newIndex: 99 })
    expect(wrapper.emitted('update:modelValue')).toHaveLength(1)
  } finally { wrapper.unmount() }
})
