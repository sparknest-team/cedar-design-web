import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Host from '..'
import Demo from '../__demos__/passthrough-options.vue'
import Button from '../../button'
import Space from '../../space'

test('TreeSelect typed demo wires real host state and presentation options', async () => {
  const owner = mount(Demo, { global: { components: { CButton: Button, CSpace: Space, CTreeSelect: Host } } })
  try {
    const host = owner.findComponent(Host)
    expect(host.props('editMode')).toBe('direct')
    expect(host.props('open')).toBe(false)
    expect(host.props('triggerProps')).toMatchObject({ placement: 'top-start' })
    await owner.get('button').trigger('click')
    expect(host.props('open')).toBe(true)
    expect(host.props('treeProps')).toMatchObject({ showLine: true, defaultExpandAll: false })
  } finally {
    owner.unmount()
  }
})
