import { h, nextTick, reactive } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import { configProviderInjectionKey } from '../../config-provider/context'
import Carousel, { CarouselItem } from '..'
test('provider locale updates labels and explicit aria props win', async () => {
  const config = reactive({ locale: { locale: 'test', carousel: { label: '轮播', previous: '上页', next: '下页', slide: '{index}/{total}', goto: '第{index}页' } } })
  const wrapper = mount(Carousel, { global: { provide: { [configProviderInjectionKey]: config } }, slots: { default: () => [h(CarouselItem, { key: 0 }), h(CarouselItem, { key: 1 })] } })
  expect(wrapper.attributes('aria-label')).toBe('轮播')
  expect(wrapper.find('[aria-roledescription="slide"]').attributes('aria-label')).toBe('1/2')
  config.locale.carousel.label = 'Gallery'
  config.locale.carousel.next = 'Forward'
  await nextTick()
  expect(wrapper.attributes('aria-label')).toBe('Gallery')
  expect(wrapper.find('[aria-label="Forward"]').exists()).toBe(true)
  await wrapper.setProps({ ariaLabel: 'Explicit', nextButtonAriaLabel: 'Next explicit' })
  expect(wrapper.attributes('aria-label')).toBe('Explicit')
  expect(wrapper.find('[aria-label="Next explicit"]').exists()).toBe(true)
  wrapper.unmount()
})
