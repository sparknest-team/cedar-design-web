import { flushPromises, mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import Cascader from '..'
import { CheckboxGroup } from '../../checkbox'
import Mention from '../../mention'
import { RadioGroup } from '../../radio'
import Transfer from '../../transfer'
import TreeSelect from '../../tree-select'

for (const [name, Component, key, data] of [
  ['Cascader', Cascader, 'options', [{ value: 'a', label: 'Alice' }]],
  ['TreeSelect', TreeSelect, 'data', [{ key: 'a', title: 'Alice' }]],
  ['CheckboxGroup', CheckboxGroup, 'options', [{ value: 'a', label: 'Alice' }]],
  ['RadioGroup', RadioGroup, 'options', [{ value: 'a', label: 'Alice' }]],
  ['Mention', Mention, 'options', [{ value: 'a', label: 'Alice' }]],
  ['Transfer', Transfer, 'data', [{ value: 'a', label: 'Alice' }]],
] as const) {
  test(`${name} loads its candidate prop and can switch back to static data`, async () => {
    const load = vi.fn(async () => [...data])
    const owner = mount(Component as any, { props: { editMode: 'direct', [key]: load } })
    try {
      await flushPromises()
      expect(load).toHaveBeenCalledTimes(1)
      await owner.setProps({ [key]: [] })
      await flushPromises()
      expect(load).toHaveBeenCalledTimes(1)
    } finally {
      owner.unmount()
    }
  })
}
