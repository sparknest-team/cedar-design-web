import { defineComponent, h, inject, ref } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Form, { FormItem } from '..'
import { formItemInjectionKey } from '../context'
test('queued validation from the previous field cannot start against the new identity', async () => {
  const field = ref('a')
  const tasks: (() => void)[] = []
  const rules = [{ validator: async () => { await new Promise<void>((resolve) => tasks.push(resolve)) } }]
  let change = () => {}
  const Control = defineComponent({ setup() {
    const context = inject(formItemInjectionKey) as any
    change = () => context.eventHandlers.onChange()
    return () => h('span', 'Control')
  } })
  const owner = mount({ setup: () => () => h(Form, { model: { a: 'A', b: 'B' } }, () => h(FormItem, { field: field.value, rules, validateTrigger: ['change'] }, () => h(Control))) })
  try {
    field.value = 'b'
    change()
    await flushPromises()
    expect(tasks).toHaveLength(0)
  } finally {
    owner.unmount()
    tasks.splice(0).forEach((finish) => finish())
    await flushPromises()
  }
})
