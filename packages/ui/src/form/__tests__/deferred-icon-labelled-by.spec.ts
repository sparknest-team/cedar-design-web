import { createSSRApp, h, nextTick, ref } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import DateField from '../../date'
import Select from '../../select'
import FieldReference from '../../_components/field-presentation/FieldReference.vue'
import Form from '../Form.vue'
import FormItem from '../FormItem.vue'

const cases = [['date', DateField], ['select', Select]] as const

test.each(cases)('%s associates an external name with the icon-only editor trigger', async (_name, component) => {
  const name = ref('external-name')
  const wrapper = mount(Form, {
    props: { model: { value: null } },
    slots: { default: () => h(FormItem, { field: 'value', label: 'Form label' }, () => h(component as any, { editMode: 'click', openTriggerTarget: 'icon', 'aria-labelledby': name.value })) },
  })
  try {
    const button = () => wrapper.get('button.c-field-presentation__edit')
    expect(button().attributes('aria-labelledby')?.split(/\s+/) ?? []).toContain('external-name')
    const actionId = button().attributes('aria-labelledby')!.split(/\s+/)[0]
    expect(button().get(`[id="${actionId}"]`).text()).toBe('编辑')
    name.value = 'changed-name'
    await nextTick()
    expect(button().attributes('aria-labelledby')?.split(/\s+/) ?? []).toContain('changed-name')
    name.value = ''
    await nextTick()
    expect(button().attributes('aria-labelledby')).toBeUndefined()
  } finally { wrapper.unmount() }
})


test('icon editor keeps its label association through SSR and hydration', async () => {
  const App = { render: () => h(FieldReference, { editMode: 'click', label: 'Form label', openTriggerTarget: 'icon', 'aria-labelledby': 'external-name' }) }
  const html = await renderToString(createSSRApp(App))
  const container = document.createElement('div')
  container.innerHTML = html
  document.body.appendChild(container)
  const selector = 'button.c-field-presentation__'+"edit"
  const before = container.querySelector(selector)!
  expect(before.getAttribute('aria-labelledby')?.split(/\s+/)).toContain('external-name')
  const app = createSSRApp(App)
  try {
    app.mount(container)
    await nextTick()
    expect(container.querySelector(selector)).toBe(before)
    expect(before.getAttribute('aria-labelledby')?.split(/\s+/)).toContain('external-name')
  } finally { app.unmount(); container.remove() }
})
