import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Carousel, { CarouselItem } from '..'
import Fade from '../__demos__/effect-fade.vue'
import Card from '../__demos__/effect-card.vue'

for (const [name, Demo] of [['fade', Fade], ['card', Card]] as const) {
  test(`${name} demo resolves public images from a nested documentation route`, () => {
    const wrapper = mount(Demo, {
      global: { components: { CCarousel: Carousel, CCarouselItem: CarouselItem } },
    })
    try {
      const paths = wrapper.findAll('img').map(image =>
        new URL(image.attributes('src')!, 'https://local.invalid/components/carousel/').pathname,
      )
      expect(paths).toEqual(['/cat.jpg', '/cat2.jpg', '/cat3.jpg'])
    } finally {
      wrapper.unmount()
    }
  })
}
