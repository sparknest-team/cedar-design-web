import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import { describe, expect, test } from 'vitest'
import { Form, FormItem } from '../../form'
import Input from '../../input'
import Textarea from '../../textarea'

describe('form control inheritance', () => {
  test('inherits size and readonly and permits explicit local overrides', () => {
    const App = defineComponent(() => () => h(Form, { size: 'xl', readonly: true, disabled: true }, {
      default: () => h(FormItem, { disabled: false }, {
        default: () => h(Input, { readonly: false }),
      }),
    }))
    const wrapper = mount(App)
    const input = wrapper.get('input')
    expect(wrapper.get('.c-field-decorator').classes()).toContain('c-field-decorator--size-xl')
    expect(input.attributes('disabled')).toBeUndefined()
    expect(input.attributes('readonly')).toBeUndefined()
    wrapper.unmount()
  })

  test('inherits disabled and readonly when controls omit them', () => {
    const App = defineComponent(() => () => h(Form, { disabled: true, readonly: true }, {
      default: () => h(FormItem, null, { default: () => h(Input) }),
    }))
    const wrapper = mount(App)
    const input = wrapper.get('input')
    expect(input.attributes('disabled')).toBeDefined()
    expect(input.attributes('readonly')).toBeDefined()
    wrapper.unmount()
  })

  test('Textarea inherits form state and accepts explicit local overrides', () => {
    const App = defineComponent(() => () => h(Form, { size: 'xl', readonly: true, disabled: true }, {
      default: () => h(FormItem, null, {
        default: () => h(Textarea, { readonly: false, disabled: false }),
      }),
    }))
    const wrapper = mount(App)
    expect(wrapper.get('.c-field-decorator').classes()).toContain('c-field-decorator--size-xl')
    expect(wrapper.get('textarea').attributes('readonly')).toBeUndefined()
    expect(wrapper.get('textarea').attributes('disabled')).toBeUndefined()
    wrapper.unmount()

    const inherited = mount(defineComponent(() => () => h(Form, { readonly: true, disabled: true }, {
      default: () => h(FormItem, null, { default: () => h(Textarea) }),
    })))
    expect(inherited.get('textarea').attributes('readonly')).toBeDefined()
    expect(inherited.get('textarea').attributes('disabled')).toBeDefined()
    inherited.unmount()
  })
})
