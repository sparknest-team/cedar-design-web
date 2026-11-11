import { createApp } from 'vue'
import { describe, expect, test } from 'vitest'
import FieldDecorator from '..'
import CedarVue from '../../cedar-vue'

describe('FieldDecorator registration', () => {
  test('supports standalone installation without duplicating the component prefix', () => {
    const app = createApp({ render: () => null })
    app.use(FieldDecorator)
    expect(app.component('CFieldDecorator')).toBe(FieldDecorator)
    expect(app.component('CCFieldDecorator')).toBeUndefined()
  })

  test('honors the configured component prefix', () => {
    const app = createApp({ render: () => null })
    app.use(FieldDecorator, { componentPrefix: 'Demo' })
    expect(app.component('DemoFieldDecorator')).toBe(FieldDecorator)
  })

  test('is available through the complete library installer', () => {
    const app = createApp({ render: () => null })
    app.use(CedarVue)
    expect(CedarVue.FieldDecorator).toBe(FieldDecorator)
    expect(app.component('CFieldDecorator')).toBe(FieldDecorator)
  })
})
