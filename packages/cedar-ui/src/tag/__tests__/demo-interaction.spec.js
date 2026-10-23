import { flushPromises, mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Tag from '..'
import Space from '../../space'
import Input from '../../input'
import CheckableDemo from '../__demos__/checkable.vue'
import DynamicDemo from '../__demos__/dynamic-tag.vue'

const global = { components: { CTag: Tag, CSpace: Space, CInput: Input }, stubs: { CIconPlus: true } }

test('existing checkable Demo supports keys and loading ignores activation', async () => {
  const wrapper = mount(CheckableDemo, { global })
  try {
    const tags = wrapper.findAll('[role=checkbox]')
    await tags[1].trigger('keydown', { key: ' ' })
    expect(tags[1].attributes('aria-checked')).toBe('true')
    await tags[1].trigger('keydown', { key: 'Enter' })
    expect(tags[1].attributes('aria-checked')).toBe('false')
    await tags[3].trigger('keydown', { key: ' ' })
    await tags[3].trigger('keydown', { key: 'Enter' })
    expect(tags[3].attributes('aria-checked')).toBe('true')
  } finally {
    wrapper.unmount()
  }
})

test('existing dynamic Demo adds once and close affects only its own item', async () => {
  const wrapper = mount(DynamicDemo, { global })
  try {
    const tags = () => wrapper.findAll('.c-tag')
    await tags().find((tag) => tag.text() === 'Add Tag').trigger('click')
    await flushPromises()
    await wrapper.get('input').setValue('audit-170')
    await wrapper.get('input').trigger('keyup', { key: 'Enter' })
    await flushPromises()
    expect(tags().filter((tag) => tag.text() === 'audit-170')).toHaveLength(1)
    expect(wrapper.find('input').exists()).toBe(false)
    const added = tags().find((tag) => tag.text() === 'audit-170')
    await added.get('[role=button]').trigger('keydown', { key: ' ' })
    await flushPromises()
    expect(tags().filter((tag) => tag.text() === 'audit-170')).toHaveLength(0)
    expect(tags().find((tag) => tag.text() === 'Tag 1').find('[role=button]').exists()).toBe(false)
    expect(tags().some((tag) => tag.text() === 'Tag 3')).toBe(true)
  } finally {
    wrapper.unmount()
  }
})
