import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import NavMenu, { NavMenuItem } from '..'

for (const scoped of [false, true]) {
  test(`node contexts expose exact active, not ancestors (${scoped ? 'slots' : 'functions'})`, async () => {
    const contexts = new Map<string, any>()
    const render = (kind: string) => (ctx: any) => { contexts.set(`${ctx.option.key}:${kind}`, ctx); return String(ctx.option.key) }
    const option = (key: string) => ({ key, label: render('label'), icon: render('icon'), extra: render('extra') })
    const wrapper = mount(NavMenu, { props: {
      modelValue: 'child', defaultExpandedKeys: ['parent'],
      options: [{ ...option('parent'), children: [option('child')] }, option('other')],
      nodeProps: (ctx: any) => { contexts.set(`${ctx.option.key}:node`, ctx); return {} },
    }, slots: scoped ? { label: render('label'), icon: render('icon'), extra: render('extra') } : {} })
    try {
      for (const kind of ['label', 'icon', 'extra', 'node']) {
        expect(contexts.get(`parent:${kind}`).active).toBe(false)
        expect(contexts.get(`child:${kind}`).active).toBe(true)
        expect(contexts.get(`parent:${kind}`).selected).toBeUndefined()
        expect(contexts.get(`parent:${kind}`).hasSelectedDescendant).toBeUndefined()
      }
      expect(wrapper.get('[data-nav-key="parent"]').classes()).toContain('c-nav-menu--active')
      await wrapper.get('[data-nav-key="parent"]').trigger('focus')
      expect(contexts.get('parent:node').active).toBe(false)
      await wrapper.setProps({ modelValue: 'other' })
      expect(contexts.get('child:label').active).toBe(false)
      expect(contexts.get('other:label').active).toBe(true)
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    } finally { wrapper.unmount() }
  })
}

test('independent entry active ignores highlight and open, and requires a matching ordinary option', async () => {
  let context: any
  const render = vi.fn((ctx: any) => String(ctx.active))
  const wrapper = mount(NavMenuItem, { props: {
    options: [{ key: 0, label: render }, { key: '', label: render }, { type: 'group', key: 'group', label: render }],
    modelValue: 0, highlight: false, popupContainer: false,
  }, slots: { icon: (ctx: any) => { context = ctx; return null } } })
  try {
    expect(context.active).toBe(true)
    expect(render.mock.calls.at(-1)?.[0].active).toBe(true)
    expect(render.mock.calls.at(-1)?.[0].selected).toBeUndefined()
    expect(wrapper.get('[data-nav-item]').classes()).not.toContain('c-nav-menu--active')
    await wrapper.setProps({ modelValue: 'missing', highlight: true, open: true })
    await nextTick()
    expect(context.active).toBe(false)
    expect(wrapper.get('[data-nav-item]').classes()).toContain('c-nav-menu--active')
    for (const modelValue of [null, 'group']) { await wrapper.setProps({ modelValue }); expect(context.active).toBe(false) }
    await wrapper.setProps({ modelValue: '', highlight: false })
    expect(context.active).toBe(true)
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
  } finally { wrapper.unmount() }
})

test('named entry active follows accepted activeItem independently of visual overrides and panel values', async () => {
  const contexts = new Map<string, any>()
  const wrapper = mount(NavMenu, { props: { activeItem: 'first' }, slots: { default: () => ['first', 'second'].map(name => h(NavMenuItem, {
    name, highlight: name === 'second', options: [{ key: 0, label: 'Zero' }], modelValue: 0,
  }, { label: (ctx: any) => { contexts.set(name, ctx); return name } })) } })
  try {
    expect(contexts.get('first').active).toBe(true)
    expect(contexts.get('second').active).toBe(false)
    const items = wrapper.findAllComponents(NavMenuItem)
    expect(items[0].get('[data-nav-item]').classes()).not.toContain('c-nav-menu--active')
    expect(items[1].get('[data-nav-item]').classes()).toContain('c-nav-menu--active')
    await wrapper.setProps({ activeItem: 'second' })
    expect(contexts.get('first').active).toBe(false)
    expect(contexts.get('second').active).toBe(true)
    expect(wrapper.emitted('update:activeItem')).toBeUndefined()
  } finally { wrapper.unmount() }
})
