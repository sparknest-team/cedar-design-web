import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Space from '../../space'
import Button from '../../button'
import List, { ListItem } from '..'
import Navigation from '../__demos__/virtual-navigation.vue'
import Bounded from '../__demos__/bounded-scroll.vue'

for (const [name, demo] of [['navigation', Navigation], ['bounded', Bounded]]) {
  test(name + ' stacks controls above a full-width list', () => {
    const owner = mount(demo, {
      global: {
        components: { CSpace: Space, CButton: Button, CList: List, CListItem: ListItem },
      },
    })
    expect(owner.findComponent(Space).props('direction')).toBe('column')
    expect(owner.findComponent(List).exists()).toBe(true)
    owner.unmount()
  })
}
