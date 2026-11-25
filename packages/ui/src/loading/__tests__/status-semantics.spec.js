import { h, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, expect, test } from 'vitest'
import Loading, { vLoading } from '..'
import ConfigProvider from '../../config-provider'
import enUS from '../../locale/lang/en-us'
import zhCN from '../../locale/lang/zh-cn'

const owners = [],
  hosts = []
afterEach(() => {
  owners.splice(0).forEach((w) => w.unmount())
  hosts.splice(0).forEach((el) => {
    vLoading.unmounted(el)
    el.remove()
  })
})
test('standalone loading has meaningful status text even when its graphic is hidden', () => {
  for (const hideIcon of [false, true]) {
    const w = mount(Loading, { props: { hideIcon } })
    owners.push(w)
    expect(w.attributes('role')).toBe('status')
    expect(w.attributes('aria-atomic')).toBe('true')
    expect(w.get('.c-loading__sr-only').text()).toBe('加载中')
  }
})
test('visible tip or tip slot supplies the status message without duplicate fallback text', () => {
  for (const options of [
    { props: { tip: 'Fetching results' } },
    { slots: { tip: () => h('span', 'Fetching records') } },
  ]) {
    const w = mount(Loading, options)
    owners.push(w)
    expect(w.find('.c-loading__sr-only').exists()).toBe(false)
    expect(w.text()).toContain('Fetching')
  }
})
test('directive marks and restores its original waiting host across migration and teardown', () => {
  for (const previous of [null, 'false', 'true']) {
    const el = document.createElement('section')
    document.body.append(el)
    hosts.push(el)
    if (previous !== null) el.setAttribute('aria-busy', previous)
    vLoading.mounted(el, { value: true, instance: null })
    expect(el.getAttribute('aria-busy')).toBe('true')
    vLoading.updated(el, { value: { loading: true, fullscreen: true }, instance: null })
    expect(el.getAttribute('aria-busy')).toBe('true')
    vLoading.updated(el, { value: false, instance: null })
    expect(el.getAttribute('aria-busy')).toBe(previous)
  }
})
test('teardown does not overwrite a later external busy value', () => {
  const el = document.createElement('section')
  document.body.append(el)
  hosts.push(el)
  vLoading.mounted(el, { value: true, instance: null })
  el.setAttribute('aria-busy', 'false')
  vLoading.unmounted(el)
  expect(el.getAttribute('aria-busy')).toBe('false')
})

test('status fallback follows the nearest reactive locale provider', async () => {
  const locale = ref(enUS)
  const w = mount({ render: () => h(ConfigProvider, { locale: locale.value }, { default: () => h(Loading) }) })
  owners.push(w)
  expect(w.get('.c-loading__sr-only').text()).toBe('Loading')
  locale.value = zhCN
  await nextTick()
  expect(w.get('.c-loading__sr-only').text()).toBe('加载中')
})

test('updates the graphic and status tip when only the slot set changes', async () => {
  const wrapped = ref(true)
  const hideIcon = ref(false)
  const hasTip = ref(false)
  const wrapper = mount({
    render: () =>
      h(
        Loading,
        { type: 'wave', hideIcon: hideIcon.value },
        {
          ...(wrapped.value ? { default: () => 'Content' } : {}),
          ...(hasTip.value ? { tip: () => 'Receiving' } : {}),
        },
      ),
  })
  owners.push(wrapper)
  expect(wrapper.find('.c-loading__wave').exists()).toBe(false)
  wrapped.value = false
  await nextTick()
  expect(wrapper.findAll('.c-loading__wave-item')).toHaveLength(5)
  hideIcon.value = true
  await nextTick()
  hasTip.value = true
  await nextTick()
  expect(wrapper.get('.c-loading__tip').text()).toBe('Receiving')
  expect(wrapper.find('.c-loading__sr-only').exists()).toBe(false)
  hasTip.value = false
  await nextTick()
  expect(wrapper.find('.c-loading__body').exists()).toBe(false)
  expect(wrapper.get('.c-loading__sr-only').text()).toBeTruthy()
})
