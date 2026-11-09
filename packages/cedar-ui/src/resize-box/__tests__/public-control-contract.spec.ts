import { defineComponent, h, inject } from 'vue'
import { mount, type VueWrapper } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import ResizeBox from '../ResizeBox.vue'
import { resizeBoxProps } from '../props'
import Sider from '../../layout/Sider.vue'
import ConfigProvider from '../../config-provider'
import { addI18nMessages, getLocale, useLocale } from '../../locale'
import enUS from '../../locale/lang/en-us'
import zhCN from '../../locale/lang/zh-cn'
import { SiderInjectionKey } from '../../layout/context'

const owners: VueWrapper[] = []
const originalLocale = getLocale()
afterEach(() => { owners.splice(0).forEach(owner => owner.unmount()); useLocale(originalLocale); vi.restoreAllMocks() })
const render = (component: any, options: any = {}) => { const owner = mount(component, options); owners.push(owner); return owner }
describe('layout/resize diagnostics and public controls', () => {
  it('validates finite nonnegative sizes, unique physical edges and empty-list disabling', () => {
    for (const descriptor of [resizeBoxProps.width, resizeBoxProps.height]) {
      for (const value of [0, 0.5, 200]) expect(descriptor.validator!(value)).toBe(true)
      for (const value of [-1, NaN, Infinity]) expect(descriptor.validator!(value)).toBe(false)
    }
    expect(resizeBoxProps.directions.validator!([])).toBe(true)
    expect(resizeBoxProps.directions.validator!(['left', 'right'])).toBe(true)
    for (const value of [null, 'right', ['right', 'right'], ['start']]) expect(resizeBoxProps.directions.validator!(value)).toBe(false)
  })
  it('normalizes malformed JS edge lists without throwing or duplicating handles', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    const owner = render(ResizeBox, { props: { directions: null, width: Infinity, height: NaN } })
    expect(owner.findAll('[role="spinbutton"]')).toHaveLength(0)
    expect(owner.html()).not.toMatch(/NaN|Infinity/)
    await owner.setProps({ directions: ['right', 'right', 'bad'] })
    expect(owner.findAll('.c-resizebox-direction-right')).toHaveLength(1)
    await owner.setProps({ width: 0, height: 0, directions: [] })
    expect(owner.element.style.width).toBe('0px')
  })
  it('validates sider enums, CSS widths, nonnegative collapse width and resize arrays', () => {
    const props = (Sider as any).props
    for (const [key, valid, invalid] of [['placement', 'left', 'start'], ['theme', 'light', 'custom'], ['collapseMode', 'transform', 'other'], ['breakpoint', 'md', 'medium']]) {
      expect(props[key as string].validator(valid)).toBe(true)
      expect(props[key as string].validator(invalid)).toBe(false)
    }
    expect(props.width.validator('40%')).toBe(true)
    expect(props.width.validator(-1)).toBe(false)
    expect(props.collapsedWidth.validator(0)).toBe(true)
    expect(props.collapsedWidth.validator(Infinity)).toBe(false)
    expect(props.resizeDirections.validator(['left', 'left'])).toBe(false)
  })
  it('uses safe sider defaults and omits an invalid breakpoint subscription', () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    const owner = render(Sider, { props: { width: NaN, collapsedWidth: Infinity, placement: 'bad', theme: 'bad', collapseMode: 'bad', breakpoint: 'medium', resizeDirections: ['right', 'right', 'bad'] } })
    expect(owner.element.style.width).toBe('200px')
    expect(owner.classes()).toContain('c-layout-sider-light')
    expect(owner.findAll('.c-resizebox-direction-right')).toHaveLength(1)
    expect(owner.emitted('breakpoint')).toBeUndefined()
    expect(owner.html()).not.toMatch(/NaN|Infinity/)
  })
  it('uses global locale and provider overrides for collapse trigger names', async () => {
    addI18nMessages({ 'en-US': enUS })
    useLocale('en-US')
    const global = render(Sider, { props: { collapsible: true } })
    expect(global.find('button').attributes('aria-label')).toBe('Collapse sidebar')
    await global.find('button').trigger('click')
    expect(global.find('button').attributes('aria-label')).toBe('Expand sidebar')
    const local = render(ConfigProvider, { props: { locale: zhCN }, slots: { default: () => h(Sider, { collapsible: true }) } })
    expect(local.find('button').attributes('aria-label')).toBe('收起侧栏')
    useLocale('zh-CN')
    await global.vm.$nextTick()
    expect(global.find('button').attributes('aria-label')).toBe('展开侧栏')
  })
  it('preserves normalized theme and collapse width in the existing sider context', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    const Reader = defineComponent({ setup() { const context = inject(SiderInjectionKey)!; return () => h('span', { id: 'context' }, `${context.theme}:${context.collapsedWidth}`) } })
    const owner = render(Sider, { props: { theme: 'dark', collapsedWidth: 0 }, slots: { default: () => h(Reader) } })
    expect(owner.find('#context').text()).toBe('dark:0')
    await owner.setProps({ theme: 'bad', collapsedWidth: NaN })
    expect(owner.find('#context').text()).toBe('light:48')
  })

})
