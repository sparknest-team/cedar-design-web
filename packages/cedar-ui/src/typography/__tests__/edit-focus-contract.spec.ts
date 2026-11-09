import { defineComponent, h, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import { TypographyParagraph, TypographyText, TypographyTitle } from '../index'

test('editing preserves the semantic root and names the input, then Enter returns focus to edit', async () => {
  const onEnd = vi.fn()
  const wrapper = mount(TypographyTitle, {
    props: { heading: 3, editable: true, editText: 'draft' },
    attrs: { id: 'heading-id', class: 'custom', style: 'width: 220px', 'aria-label': 'Article title', onEditEnd: onEnd },
    slots: { default: 'Title' }, attachTo: document.body,
  })
  await wrapper.get('.c-typography-operation-edit').trigger('click')
  const root = wrapper.get('h3')
  const input = wrapper.get('input')
  expect(root.attributes('id')).toBe('heading-id')
  expect(root.classes()).toContain('custom')
  expect((root.element as HTMLElement).style.width).toBe('220px')
  expect(input.attributes('aria-label')).toBe('Article title')
  expect(document.activeElement).toBe(input.element)
  await input.trigger('keydown', { key: 'Enter' })
  document.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', bubbles: true }))
  await new Promise((resolve) => setTimeout(resolve, 0))
  await nextTick()
  expect(document.activeElement).toBe(wrapper.get('.c-typography-operation-edit').element)
  expect(onEnd).toHaveBeenCalledTimes(1)
  wrapper.unmount()
})

test('blur keeps the user-selected focus and unnamed editors receive an accessible name', async () => {
  const outside = document.createElement('button')
  document.body.appendChild(outside)
  const wrapper = mount(TypographyParagraph, { props: { editable: true, editText: 'draft' }, slots: { default: 'text' }, attachTo: document.body })
  await wrapper.get('.c-typography-operation-edit').trigger('click')
  expect(wrapper.get('input').attributes('aria-label')).toBeTruthy()
  outside.focus()
  await nextTick()
  expect(document.activeElement).toBe(outside)
  expect(wrapper.find('input').exists()).toBe(false)
  wrapper.unmount(); outside.remove()
})

test('forwards an explicit labelledby relationship to the native editor', async () => {
  const wrapper = mount(TypographyParagraph, { props: { editable: true, defaultEditing: true, editText: 'draft' }, attrs: { 'aria-labelledby': 'external-label' }, slots: { default: 'text' }, attachTo: document.body })
  const input = wrapper.get('input')
  expect(input.attributes('aria-labelledby')).toBe('external-label')
  expect(input.attributes('aria-label')).toBeUndefined()
  wrapper.unmount()
})

test('controlled editing retains focus in the input when the parent does not accept the end request', async () => {
  const onUpdate = vi.fn()
  const wrapper = mount(TypographyParagraph, { props: { editable: true, editing: true, editText: 'draft' }, attrs: { 'onUpdate:editing': onUpdate }, slots: { default: 'text' }, attachTo: document.body })
  const input = wrapper.get('input')
  await input.trigger('keydown', { key: 'Enter' }); await nextTick()
  expect(document.activeElement).toBe(input.element)
  expect(onUpdate).toHaveBeenLastCalledWith(false)
  wrapper.unmount()
})

test('a focus change before Enter keyup is respected', async () => {
  const outside = document.createElement('button')
  document.body.appendChild(outside)
  const wrapper = mount(TypographyParagraph, { props: { editable: true, defaultEditing: true, editText: 'draft' }, slots: { default: 'text' }, attachTo: document.body })
  await wrapper.get('input').trigger('keydown', { key: 'Enter' })
  outside.focus()
  document.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', bubbles: true }))
  await new Promise((resolve) => setTimeout(resolve, 0))
  expect(document.activeElement).toBe(outside)
  wrapper.unmount(); outside.remove()
})

test.each([TypographyText, TypographyTitle, TypographyParagraph])('forwards both controlled model updates', async (component) => {
  const editing = ref(true), text = ref('old')
  const wrapper = mount(defineComponent({
    setup: () => () => h(component, {
      editable: true, editing: editing.value, editText: text.value,
      'onUpdate:editing': (value: boolean) => { editing.value = value },
      'onUpdate:editText': (value: string) => { text.value = value },
    }, { default: () => text.value }),
  }), { attachTo: document.body })
  await wrapper.get('input').setValue('new')
  expect(text.value).toBe('new')
  await wrapper.get('input').trigger('keydown', { key: 'Enter' })
  document.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', bubbles: true }))
  await new Promise((resolve) => setTimeout(resolve, 0))
  expect(editing.value).toBe(false)
  expect(wrapper.find('input').exists()).toBe(false)
  wrapper.unmount()
})
