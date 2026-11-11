import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Input from '../../../input'
import Select from '../../../select'
import DateField from '../../../date'

const cases = [['input', Input], ['select', Select], ['date', DateField]] as const

test.each(cases)('%s removes the editing hint while disabled or readonly', async (_name, component) => {
  const wrapper = mount(component as any, { props: { editMode: 'click' } })
  try {
    const group = () => wrapper.get('.c-field-presentation__reference-group')
    expect(group().attributes('title')).toBe('单击编辑')
    await wrapper.setProps({ disabled: true })
    expect(group().attributes('title')).toBeUndefined()
    await wrapper.setProps({ disabled: false, readonly: true })
    expect(group().attributes('title')).toBeUndefined()
    await wrapper.setProps({ readonly: false })
    expect(group().attributes('title')).toBe('单击编辑')
  } finally { wrapper.unmount() }
})
