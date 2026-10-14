import { mount } from '@vue/test-utils'
import { h, nextTick } from 'vue'
import { afterEach, expect, test } from 'vitest'
import Upload from '../../upload'
import ConfigProvider from '../../config-provider'
import { addI18nMessages, useLocale } from '..'
import enUS from '../lang/en-us'
import zhCN from '../lang/zh-cn'

addI18nMessages({ 'en-US': enUS })
const wrappers = []
afterEach(() => {
  wrappers.splice(0).forEach(wrapper => wrapper.unmount())
  useLocale('zh-CN')
})

test('Upload follows global locale without a component dictionary', async () => {
  useLocale('zh-CN')
  const wrapper = mount(Upload)
  wrappers.push(wrapper)
  expect(wrapper.text()).toContain('上传')
  useLocale('en-US')
  await nextTick()
  expect(wrapper.text()).toContain('Upload')
})

test('Upload follows reactive ConfigProvider locale', async () => {
  useLocale('zh-CN')
  const wrapper = mount(ConfigProvider, {
    props: { locale: enUS },
    slots: { default: () => h(Upload) },
  })
  wrappers.push(wrapper)
  expect(wrapper.text()).toContain('Upload')
  await wrapper.setProps({ locale: zhCN })
  expect(wrapper.text()).toContain('上传')
})
