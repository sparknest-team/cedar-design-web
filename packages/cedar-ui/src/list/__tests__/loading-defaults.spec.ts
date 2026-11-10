import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Loading, { loadingProps } from '../../loading'
import RawLoading from '../../loading/Loading.vue'
import List from '../list.vue'

test('the internal List loading indicator shares public Loading defaults', () => {
  const originalType = loadingProps.type
  try {
    expect(Loading).toBe(RawLoading)
    Loading.setPropsDefaults({ type: 'wave' })
    const wrapper = mount(List, { props: { loading: true } })
    try {
      expect(wrapper.find('.c-loading__wave').exists()).toBe(true)
      expect(wrapper.find('.c-loading__circle').exists()).toBe(false)
    } finally {
      wrapper.unmount()
    }
  } finally {
    loadingProps.type = originalType
  }
})
