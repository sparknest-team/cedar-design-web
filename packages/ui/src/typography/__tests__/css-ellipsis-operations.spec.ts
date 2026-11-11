import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import Base from '../base'
import { clipboard } from '../../_utils/clipboard'

vi.mock('../../_utils/clipboard', () => ({ clipboard: vi.fn().mockResolvedValue(true) }))

test('CSS ellipsis keeps independent copy and edit controls outside the clipped content', async () => {
  const wrapper = mount(Base, {
    props: { component: 'div', editable: true, editText: 'editable', copyable: true, copyText: 'complete', ellipsis: { css: true, rows: 1, expandable: true } },
    slots: { default: () => h('span', 'Long text') },
    attachTo: document.body,
  })
  const copy = wrapper.get('.c-typography-operation-copy')
  const edit = wrapper.get('.c-typography-operation-edit')
  expect(copy.element.closest('[style*="-webkit-line-clamp"]')).toBeNull()
  expect(edit.element.closest('[style*="-webkit-line-clamp"]')).toBeNull()
  expect(wrapper.find('.c-typography-operation-expand').exists()).toBe(false)
  await copy.trigger('click')
  await Promise.resolve(); await nextTick()
  expect(clipboard).toHaveBeenCalledWith('complete', expect.any(Function))
  expect(wrapper.emitted('copy')?.[0]).toEqual(['complete'])
  await wrapper.setProps({ disabled: true })
  expect((copy.element as HTMLButtonElement).disabled).toBe(true)
  expect((edit.element as HTMLButtonElement).disabled).toBe(true)
  await wrapper.setProps({ disabled: false })
  await edit.trigger('click')
  expect(wrapper.find('input').exists()).toBe(true)
  wrapper.unmount()
})
