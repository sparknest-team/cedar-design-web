import { DOMWrapper, flushPromises, mount } from '@vue/test-utils'
import { h } from 'vue'
import { expect, it } from 'vitest'
import Form, { FormItem } from '../../form'
import Search from '../search.vue'

it('shares the Input edit-mode contract and rejects fullscreen search', () => {
  expect(Search.props.editMode.validator('popup')).toBe(false)
})

it.each(['click', 'dblclick'] as const)('inherits %s editing and searches the confirmed keyword', async mode => {
  const wrapper = mount({
    render: () => h(Form, { model: {}, editMode: mode }, () =>
      h(FormItem, {}, () => h(Search, { defaultValue: 'old', recentSearches: ['previous'] }))),
  }, { attachTo: document.body })
  try {
    const search = wrapper.getComponent(Search)
    const reference = search.get('button.c-field-presentation__reference')
    await reference.trigger(mode)
    await flushPromises()
    const editor = new DOMWrapper(document.body.querySelector<HTMLInputElement>('input.c-input__inner')!)
    await editor.setValue('new')
    expect(search.emitted('update:modelValue')).toBeUndefined()
    const confirm = document.body.querySelector('.c-field-presentation__confirm-icon')!.closest('button')!
    confirm.click()
    await flushPromises()
    expect(search.emitted('update:modelValue')).toEqual([['new']])
    await search.get('.c-search__icon-button').trigger('click')
    expect(search.emitted('search')?.[0][0]).toMatchObject({ modelValue: 'new' })
  } finally {
    wrapper.unmount()
  }
})
