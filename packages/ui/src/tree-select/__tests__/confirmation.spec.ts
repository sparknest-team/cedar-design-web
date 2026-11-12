import { afterEach, expect, test } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import TreeSelect from '..'
import FieldPresentation from '../../_components/field-presentation/FieldPresentation.vue'

const wrappers: ReturnType<typeof mount>[] = []
afterEach(() => wrappers.splice(0).forEach(wrapper => wrapper.unmount()))
for (const needConfirm of [false, true]) {
  test(`TreeSelect single overlay selection needConfirm=${needConfirm}`, async () => {
    const wrapper = mount(TreeSelect, {
      attachTo: document.body,
      props: { editMode: 'click', defaultOpen: true, popupContainer: false, modelValue: 'a', needConfirm,
        data: [{ value: 'a', label: 'Alpha' }, { value: 'b', label: 'Beta' }] },
    })
    wrappers.push(wrapper)
    await flushPromises()
    const input = wrapper.find('[role="combobox"]')
    if (input.exists()) { await input.trigger('click'); await flushPromises() }
    const row = wrapper.findAll('.c-tree-select-option').find(row => row.text() === 'Beta')
    expect(row).toBeDefined()
    await row!.trigger('click')
    await flushPromises()
    if (needConfirm) {
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      wrapper.findComponent(FieldPresentation).vm.$emit('confirm')
      await flushPromises()
    }
    expect(wrapper.emitted('update:modelValue')).toEqual([['b']])
  })
}
