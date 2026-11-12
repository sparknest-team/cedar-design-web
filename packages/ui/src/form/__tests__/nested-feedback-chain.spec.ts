import { h, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Form from '../Form.vue'
import FormItem from '../FormItem.vue'
import Input from '../../input'

test('nested no-style feedback reaches its ancestor and disappears when the source unmounts', async () => {
  const showLeaf = ref(true)
  const wrapper = mount(Form, {
    props: { editMode: 'direct', model: { value: '' } },
    slots: { default: () => h(FormItem, { label: 'Outer' }, () =>
      h(FormItem, { noStyle: true, label: 'Middle' }, () =>
        showLeaf.value ? h(FormItem, { field: 'value', noStyle: true }, () => h(Input)) : null)) },
  })
  try {
    ;(wrapper.vm as any).setFields({ value: { message: 'Leaf error' } })
    await nextTick()
    const outerId = wrapper.get('input').attributes('aria-describedby')!
    expect(wrapper.get(`[id="${outerId}"]`).text()).toContain('Leaf error')
    expect(wrapper.findAll('[data-form-errors]')).toHaveLength(1)
    showLeaf.value = false
    await nextTick()
    expect(wrapper.find('[data-form-errors]').exists()).toBe(false)
  } finally { wrapper.unmount() }
})
