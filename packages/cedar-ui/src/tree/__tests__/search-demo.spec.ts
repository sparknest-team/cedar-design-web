import { flushPromises, mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Demo from '../__demos__/search.vue'
import Tree from '..'
import Input from '../../input'
import Space from '../../space'

test('search demo filters nodes and restores them after clearing', async () => {
  const owner = mount(Demo, { global: { components: { CTree: Tree, CInput: Input, CSpace: Space } } })
  try {
    await owner.get('input').setValue('设计')
    await flushPromises()
    expect(owner.text()).toContain('项目')
    expect(owner.text()).toContain('设计评审')
    expect(owner.text()).not.toContain('发布计划')
    await owner.get('input').setValue('')
    await flushPromises()
    expect(owner.text()).toContain('发布计划')
  } finally { owner.unmount() }
})
