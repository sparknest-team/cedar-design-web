import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import Sortable from 'sortablejs'
import Transfer from '..'

vi.mock('sortablejs', () => ({ default: { create: vi.fn(() => ({ destroy: vi.fn(), option: vi.fn() })) } }))

test('sortable follows an initially absent target container and cleans up on removal', async () => {
  vi.mocked(Sortable.create).mockClear()
  const w = mount(Transfer, { props: { data: [{ value: 'a', label: 'A' }], modelValue: [], targetDraggable: true } })
  try {
    await nextTick(); await nextTick()
    expect(Sortable.create).not.toHaveBeenCalled()
    await w.setProps({ modelValue: [{ value: 'a' }] }); await nextTick()
    expect(Sortable.create).toHaveBeenCalledTimes(1)
    const instance = vi.mocked(Sortable.create).mock.results[0].value
    await w.setProps({ disabled: true })
    expect(instance.option).toHaveBeenCalledWith('disabled', true)
    await w.setProps({ modelValue: [] }); await nextTick()
    expect(instance.destroy).toHaveBeenCalledTimes(1)
  } finally { w.unmount() }
})
