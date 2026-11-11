import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Breadcrumb from '..'
import { addI18nMessages, useLocale } from '../../locale'
import en from '../../locale/lang/en-us'

test('landmark and ellipsis follow locale, with a caller override', async () => {
  addI18nMessages({ 'en-US': en })
  const routes = Array.from({ length: 5 }, (_, i) => ({ label: String(i), path: `#${i}` }))
  const wrapper = mount(Breadcrumb, { props: { routes, maxCount: 2 } })
  try {
    expect(wrapper.attributes('aria-label')).toBe('面包屑导航')
    expect(wrapper.find('[aria-label="省略的路径"]').exists()).toBe(true)
    useLocale('en-US'); await wrapper.vm.$nextTick()
    expect(wrapper.attributes('aria-label')).toBe('Breadcrumb')
    expect(wrapper.find('[aria-label="Omitted breadcrumb items"]').exists()).toBe(true)
    await wrapper.setProps({ 'aria-label': 'Custom navigation' })
    expect(wrapper.attributes('aria-label')).toBe('Custom navigation')
  } finally { wrapper.unmount(); useLocale('zh-CN') }
})
