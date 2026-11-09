import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Transfer from '..'

test('selected entries remain visible when remote data no longer includes them', async () => {
  const model = [{ value: 'a', label: 'Saved A' }, { value: 'b' }]
  const w = mount(Transfer, { props: { data: [{ value: 'a', label: 'Candidate A' }, { value: 'b', label: 'Candidate B' }], modelValue: model } })
  try {
    expect(w.get('.c-transfer-view-target').text()).toContain('Saved A')
    await w.setProps({ data: [{ value: 'c', label: 'New page' }] })
    const target = w.get('.c-transfer-view-target')
    expect(target.text()).toContain('Saved A')
    expect(target.text()).toContain('b')
    expect(w.emitted('update:modelValue')).toBeUndefined()
    expect(model).toEqual([{ value: 'a', label: 'Saved A' }, { value: 'b' }])
  } finally { w.unmount() }
})
