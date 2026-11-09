import { h } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import Sider from '../Sider.vue'
import ResizeBox from '../../resize-box/ResizeBox.vue'

const owners: ReturnType<typeof mount>[] = []
afterEach(() => { owners.splice(0).forEach(owner => owner.unmount()) })
const render = (props = {}) => {
  const owner = mount(Sider, { props: { collapsible: true, resizeDirections: ['right'], ...props }, slots: { default: () => h('input') } })
  owners.push(owner)
  return owner
}
const grow = async (owner: ReturnType<typeof render>) => owner.find('.c-resizebox-direction-right').trigger('keydown', { key: 'ArrowRight' })
describe('sider owns collapsed and expanded resize widths', () => {
  it('collapses after resizing and restores the resized expanded width without remounting content', async () => {
    const owner = render()
    const input = owner.find('input').element
    input.value = 'draft'
    await grow(owner)
    expect(owner.element.style.width).toBe('210px')
    await owner.find('button').trigger('click')
    expect(owner.element.style.width).toBe('48px')
    expect(owner.find('.c-resizebox-direction-right').exists()).toBe(false)
    expect(owner.find('input').element).toBe(input)
    await owner.find('button').trigger('click')
    expect(owner.element.style.width).toBe('210px')
    expect(owner.find('input').element.value).toBe('draft')
  })
  it('resets a resized width when the numeric width prop changes', async () => {
    const owner = render()
    await grow(owner)
    await owner.setProps({ width: 260 })
    expect(owner.element.style.width).toBe('260px')
  })
  it('returns ownership to CSS lengths when an external string width changes', async () => {
    const owner = render({ width: '240px' })
    await grow(owner)
    expect(owner.element.style.width).toBe('250px')
    await owner.setProps({ width: '300px' })
    expect(owner.element.style.width).toBe('300px')
  })
  it('keeps collapsed width fixed and ignores a late resize request', async () => {
    const owner = render({ collapsed: true })
    expect(owner.find('.c-resizebox-direction-right').exists()).toBe(false)
    owner.findComponent(ResizeBox).vm.$emit('update:width', 80)
    await owner.vm.$nextTick()
    expect(owner.element.style.width).toBe('48px')
    await owner.setProps({ collapsed: false })
    expect(owner.element.style.width).toBe('200px')
  })
  it('uses the resized expanded width for transform-mode content', async () => {
    const owner = render({ collapseMode: 'transform' })
    await grow(owner)
    expect(owner.find<HTMLElement>('.c-layout-sider-children').element.style.width).toBe('210px')
    await owner.find('button').trigger('click')
    expect(owner.element.style.width).toBe('48px')
    expect(owner.find<HTMLElement>('.c-layout-sider-children').element.style.transform).toContain('210px')
  })
})
