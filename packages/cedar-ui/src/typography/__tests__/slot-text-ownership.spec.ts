import { defineComponent, h, inject, nextTick, onUnmounted, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import Base from '../base'
import { clipboard } from '../../_utils/clipboard'

vi.mock('../../_utils/clipboard', () => ({ clipboard: vi.fn().mockResolvedValue(true) }))
vi.mock('../utils/measure', () => ({ default: vi.fn(() => ({ ellipsis: true, text: 'Visible…' })) }))

test('copies live slot content with its original injection and keeps the instance while truncated', async () => {
  const text = ref('first')
  let mounts = 0, unmounts = 0
  const Child = defineComponent({
    setup() {
      mounts++
      const scope = inject('scope')
      onUnmounted(() => { unmounts++ })
      return () => h('span', `${scope} ${text.value}`)
    },
  })
  const wrapper = mount(Base, {
    props: { component: 'div', copyable: true, ellipsis: { rows: 1 } },
    slots: { default: () => h(Child) },
    global: { provide: { scope: 'provided' } },
    attachTo: document.body,
  })
  await new Promise((resolve) => setTimeout(resolve, 80))
  expect(mounts).toBe(1)
  expect(unmounts).toBe(0)
  expect(wrapper.get('[inert]').text()).toBe('provided first')
  await wrapper.get('.c-typography-operation-copy').trigger('click')
  await Promise.resolve(); await nextTick()
  expect(clipboard).toHaveBeenLastCalledWith('provided first', expect.any(Function))
  text.value = 'second'
  await nextTick(); await Promise.resolve(); await nextTick()
  await wrapper.get('.c-typography-operation-copied').trigger('click')
  await Promise.resolve(); await nextTick()
  expect(clipboard).toHaveBeenLastCalledWith('provided second', expect.any(Function))
  expect(mounts).toBe(1)
  expect(unmounts).toBe(0)
  wrapper.unmount()
  expect(unmounts).toBe(1)
})

test('default editing can derive its initial value from the actual slot', async () => {
  const wrapper = mount(Base, {
    props: { component: 'div', editable: true, defaultEditing: true },
    slots: { default: 'initial text' },
    attachTo: document.body,
  })
  await nextTick(); await nextTick()
  expect((wrapper.get('input').element as HTMLInputElement).value).toBe('initial text')
  wrapper.unmount()
})
