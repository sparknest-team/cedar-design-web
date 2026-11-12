import { mount } from '@vue/test-utils'
import { nextTick, reactive } from 'vue'
import { expect, test, vi } from 'vitest'
import { TreeSelect } from '../index'

test.each([true, false])('reactive fallback updates missing node without changing its value, controlled=%s', async (controlled) => {
  const names = reactive<Record<string, string>>({})
  const update = vi.fn()
  const wrapper = mount(TreeSelect, { props: {
    ...(controlled ? { modelValue: 'id' } : { defaultValue: 'id' }),
    data: [], fallbackOption: (value: string | number) => ({ value, label: names[String(value)] ?? String(value) }),
    'onUpdate:modelValue': update,
  } })
  expect(wrapper.text()).toContain('id')
  names.id = 'Name'
  await nextTick()
  expect(wrapper.text()).toContain('Name')
  expect(update).not.toHaveBeenCalled()
  wrapper.unmount()
})
