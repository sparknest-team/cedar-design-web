import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { describe, test, expect } from 'vitest'
import CedarVue from '../../cedar-vue'
import { Message, _MessageComponent, messageProps } from '../index'

describe('Message', () => {
  test('provides an accessible close control', async () => {
    const wrapper = mount(_MessageComponent, { props: { closable: true, duration: 0 } })
    await wrapper.get('button[aria-label="Close message"]').trigger('click')
    expect(_MessageComponent.name).toBe('CMessage')
    expect(messageProps.duration.validator(0)).toBe(true)
    expect(wrapper.emitted('close')).toHaveLength(1)
  })

  test('renders messages created by Message.info', async () => {
    Message.info({ content: 'Information', duration: 0 })

    await Promise.resolve()

    expect(document.body.querySelector('.c-message-info')?.textContent).toContain('Information')
    Message.clear()
  })

  test('is installed with the full CedarVue plugin', () => {
    const app = createApp({})
    app.use(CedarVue)

    expect(app.config.globalProperties.$message).toBeDefined()
  })
})
