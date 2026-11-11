import { h, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import DateField from '../../date'
import TimeField from '../../time'
import DateRange from '../../date-range'
import TimeRange from '../../time-range'
import Select from '../../select'
import Cascader from '../../cascader'
import TreeSelect from '../../tree-select'
import Form from '../Form.vue'
import FormItem from '../FormItem.vue'

const cases = [['date', DateField], ['time', TimeField], ['date range', DateRange], ['time range', TimeRange], ['select', Select], ['cascader', Cascader], ['tree select', TreeSelect]] as const

test.each(cases)('%s preserves an explicit accessible name over the form label during deferred editing', async (_name, component) => {
  const name = ref<string | undefined>('Explicit field name')
  const wrapper = mount(Form, {
    props: { model: { value: null } },
    slots: { default: () => h(FormItem, { field: 'value', label: 'Form label' }, () => h(component as any, { editMode: 'click', 'aria-label': name.value })) },
  })
  try {
    const reference = () => wrapper.get('button.c-field-presentation__reference')
    expect(reference().attributes('aria-label')).toBe('Explicit field name')
    name.value = 'Changed name'
    await nextTick()
    expect(reference().attributes('aria-label')).toBe('Changed name')
    name.value = undefined
    await nextTick()
    expect(reference().attributes('aria-label')).toBe('Form label')
  } finally { wrapper.unmount() }
})
