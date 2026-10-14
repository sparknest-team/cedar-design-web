import { mount } from '@vue/test-utils'
import { h, nextTick } from 'vue'
import { afterEach, describe, expect, test } from 'vitest'
import Search from '..'
import ConfigProvider from '../../config-provider'
import { addI18nMessages, useLocale } from '../../locale'
import enUS from '../../locale/lang/en-us'
import zhCN from '../../locale/lang/zh-cn'

addI18nMessages({ 'en-US': enUS })
afterEach(() => useLocale('zh-CN'))

describe('Search global locale', () => {
  test('global switching updates defaults and action type uses the correct label', async () => {
    useLocale('zh-CN')
    const wrapper = mount(Search, { props: { showAction: true } })
    expect(wrapper.text()).toContain('取消')
    useLocale('en-US')
    await nextTick()
    expect(wrapper.text()).toContain('Cancel')
    await wrapper.setProps({ actionType: 'search' })
    expect(wrapper.text()).toContain('Search')
    expect(wrapper.text()).not.toContain('Cancel')
    await wrapper.setProps({ actionText: 'Continue' })
    useLocale('zh-CN')
    await nextTick()
    expect(wrapper.text()).toContain('Continue')
    wrapper.unmount()
  })

  test('ConfigProvider locale overrides the global language reactively', async () => {
    useLocale('zh-CN')
    const wrapper = mount(ConfigProvider, {
      props: { locale: enUS },
      slots: { default: () => h(Search, { showAction: true }) },
    })
    expect(wrapper.text()).toContain('Cancel')
    await wrapper.setProps({ locale: zhCN })
    expect(wrapper.text()).toContain('取消')
    wrapper.unmount()
  })
})
