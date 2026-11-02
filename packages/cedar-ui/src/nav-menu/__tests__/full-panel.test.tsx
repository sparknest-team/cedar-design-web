import { mount } from '@vue/test-utils'
import { h, nextTick, reactive } from 'vue'
import { expect, test } from 'vitest'
import NavMenu, { NavMenuItem } from '..'

test('full uses viewport width and the remaining height below the entry', async () => {
  const wrapper = mount(NavMenuItem, {
    attachTo: document.body,
    props: { popupContainer: false, popupLayout: 'full', label: '更多筛选', options: [{ key: 0, label: '全部' }] },
  })
  try {
    const reference = wrapper.get('[data-nav-item]')
    reference.element.getBoundingClientRect = () => ({ bottom: 120, left: 80, right: 180 } as DOMRect)
    await reference.trigger('click')
    await nextTick()
    const panel = wrapper.get('.c-nav-menu__panel--full').element as HTMLElement
    expect(panel.style.position).toBe('fixed')
    expect(panel.style.top).toBe('120px')
    expect(panel.style.left).toBe('0px')
    expect(panel.style.right).toBe('0px')
    expect(panel.style.height).toBe('calc(100dvh - 120px)')
  } finally {
    wrapper.unmount()
  }
})


test('renaming an Item releases its previous name and keeps coordination', async () => {
  const names = reactive(['old', 'other'])
  const wrapper = mount(NavMenu, {
    attachTo: document.body,
    props: { mode: 'horizontal', popupContainer: false },
    slots: { default: () => [
      <NavMenuItem name={names[0]} label="分类" options={[{ key: 0, label: '全部' }]} />,
      <NavMenuItem name={names[1]} label="地区" options={[{ key: 0, label: '全部' }]} />,
    ] },
  })
  try {
    const items = wrapper.findAllComponents(NavMenuItem)
    names[0] = 'new'
    await nextTick()
    names[1] = 'old'
    await nextTick()
    items[0].vm.$.exposed.select(0)
    await nextTick()
    items[1].vm.$.exposed.select(0)
    await nextTick()
    expect(wrapper.emitted('update:activeItem')).toEqual([['new'], ['old']])
    await items[0].get('[data-nav-item]').trigger('click')
    await items[1].get('[data-nav-item]').trigger('click')
    expect(wrapper.findAllComponents(NavMenuItem).map(item => item.get('[data-nav-item]').attributes('aria-expanded'))).toEqual(['false', 'true'])
  } finally {
    wrapper.unmount()
  }
})


test('a newer open request during a close callback wins', async () => {
  let first: any, second: any, third: any
  const options = [{ key: 0, label: 'All' }]
  const wrapper = mount(NavMenu, {
    attachTo: document.body,
    props: { mode: 'horizontal', popupContainer: false },
    slots: { default: () => [
      h(NavMenuItem, { ref: value => { first = value }, label: 'A', options,
        'onUpdate:open': value => { if (!value) third.setOpen(true) } }),
      h(NavMenuItem, { ref: value => { second = value }, label: 'B', options }),
      h(NavMenuItem, { ref: value => { third = value }, label: 'C', options }),
    ] },
  })
  try {
    first.setOpen(true)
    await nextTick()
    second.setOpen(true)
    await nextTick()
    expect(wrapper.findAllComponents(NavMenuItem).map(item => item.get('[data-nav-item]').attributes('aria-expanded'))).toEqual(['false', 'false', 'true'])
  } finally {
    wrapper.unmount()
  }
})
