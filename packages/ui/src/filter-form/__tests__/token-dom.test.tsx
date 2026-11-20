import { defineComponent, h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import FilterForm from '../FilterForm.vue'

test.each([1, 3])('compiled token selectors have real FilterForm targets at %s columns', async (cols) => {
  const descriptor = Object.getOwnPropertyDescriptor(window, 'matchMedia')
  Object.defineProperty(window, 'matchMedia', {
    configurable: true, writable: true,
    value: () => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn(), addListener: vi.fn(), removeListener: vi.fn() }),
  })
  const Field = defineComponent({ setup: () => () => h('input') })
  const wrapper = mount(FilterForm, {
    props: { cols, collapsed: false, fields: [{ component: Field, field: 'name', label: 'Name' }] },
    slots: { actions: '<button type="button">Search</button>' },
  })
  try {
    await nextTick()
    await nextTick()
    expect(wrapper.element.matches('form.c-filter-form.c-form.c-form-layout-vertical')).toBe(true)
    expect(wrapper.classes().includes('c-filter-form--stacked')).toBe(cols === 1)
    expect(wrapper.get('.c-filter-form__action-item').element.matches('.c-filter-form .c-form-item')).toBe(true)
    expect(wrapper.get('.c-filter-form__actions').element.contains(wrapper.get('.c-filter-form__action-slot').element)).toBe(true)
    expect(wrapper.get('.c-filter-form__collapse').attributes('role')).toBe('button')
  } finally {
    wrapper.unmount()
    if (descriptor) Object.defineProperty(window, 'matchMedia', descriptor)
    else delete window.matchMedia
  }
})
