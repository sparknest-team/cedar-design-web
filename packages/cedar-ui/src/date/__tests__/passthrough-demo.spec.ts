import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Demo from '../__demos__/passthrough-options.vue'
import Host from '..'
import Button from '../../button'
import Space from '../../space'
test('Date typed demo wires real host state and presentation options', async () => {
  const owner = mount(Demo, { global: { components: { CButton: Button, CSpace: Space, CDate: Host }, stubs: { teleport: true } } })
  try {
    const host = owner.findComponent(Host)
    expect(host.props('editMode')).toBe('direct')
    expect(host.props('open')).toBe(false)
    expect(host.props('popupProps')).toMatchObject({ placement: 'top-start' })
    await owner.get('button').trigger('click')
    expect(host.props('open')).toBe(true)
  } finally { owner.unmount() }
})
