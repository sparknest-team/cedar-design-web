import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { mount } from '@vue/test-utils'
import { expect, it, vi } from 'vitest'
import Input from '../../input'
import Form from '../Form.vue'
import FormItem from '../FormItem.vue'
import FormItemMessage from '../FormItemMessage.vue'

it('updates repeated validation messages without duplicate keys', async () => {
  const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const wrapper = mount(FormItemMessage, { props: { error: ['Same', 'Other'] }, global: { stubs: { transition: false } } })
  try {
    const [same, other] = wrapper.findAll('[role="alert"]').map(node => node.element)
    await wrapper.setProps({ error: ['Other', 'Same', 'Same'] })
    expect(wrapper.findAll('[role="alert"]').map(node => node.text())).toEqual(['Other', 'Same', 'Same'])
    expect(wrapper.findAll('[role="alert"]')[0].element).toBe(other)
    expect(wrapper.findAll('[role="alert"]')[1].element).toBe(same)
    expect(warn.mock.calls.flat().join(' ')).not.toMatch(/Duplicate keys/i)
    await wrapper.setProps({ error: ['Same', 'Other'] })
    expect(wrapper.findAll('[role="alert"]').map(node => node.text())).toEqual(['Same', 'Other'])
    expect(warn.mock.calls.flat().join(' ')).not.toMatch(/Duplicate keys/i)
  } finally { wrapper.unmount(); warn.mockRestore() }
})


it('renders both repeated messages in server HTML', async () => {
  const html = await renderToString(createSSRApp({ render: () => h(FormItemMessage, { error: ['Same', 'Same'] }) }))
  const container = document.createElement('div')
  container.innerHTML = html
  expect([...container.querySelectorAll('[role="alert"]')].map(node => node.textContent?.trim())).toEqual(['Same', 'Same'])
})

it('keeps both nested field errors and their descriptions through duplicate updates', async () => {
  const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const wrapper = mount(Form, {
    props: { editMode: 'direct', model: { first: '', second: '' } },
    slots: { default: () => h(FormItem, { label: 'Parent' }, () => [
      h(FormItem, { field: 'first', noStyle: true }, () => h(Input, { 'aria-label': 'First' })),
      h(FormItem, { field: 'second', noStyle: true }, () => h(Input, { 'aria-label': 'Second' })),
    ]) },
  })
  try {
    const form = wrapper.vm as any
    form.setFields({ first: { message: 'Same' }, second: { message: 'Other' } })
    await wrapper.vm.$nextTick()
    form.setFields({ second: { message: 'Same' } })
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('[role="alert"]').map(node => node.text())).toEqual(['Same', 'Same'])
    const errorId = wrapper.get('[data-form-errors]').attributes('id')
    expect(errorId).toBeTruthy()
    expect(wrapper.findAll('input').map(input => input.attributes('aria-describedby'))).toEqual([errorId, errorId])
    expect(warn.mock.calls.flat().join(' ')).not.toMatch(/Duplicate keys/i)
    form.clearValidate()
    await wrapper.vm.$nextTick()
    expect(wrapper.find('[data-form-errors]').exists()).toBe(false)
    expect(wrapper.findAll('input').every(input => !input.attributes('aria-describedby'))).toBe(true)
  } finally { wrapper.unmount(); warn.mockRestore() }
})
