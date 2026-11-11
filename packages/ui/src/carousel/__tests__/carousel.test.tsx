import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { Carousel, CarouselItem, carouselProps } from '../index'

describe('Carousel', () => {
  test('exposes the active slide and scoped keyboard controls', async () => {
    const wrapper = mount(Carousel, {
      props: { keyboard: true, ariaLabel: 'Featured content' },
      slots: {
        default: () => [
          <CarouselItem>First</CarouselItem>,
          <CarouselItem>Second</CarouselItem>,
        ],
      },
    })
    await nextTick()
    await nextTick()

    expect(Carousel.name).toBe('CCarousel')
    expect(CarouselItem.name).toBe('CCarouselItem')
    expect(carouselProps.orientation.default).toBe('horizontal')
    expect(carouselProps.autoPlay.default).toBe(false)
    expect(carouselProps.indicatorType.default).toBe('dot')
    expect(carouselProps.showArrow.default).toBe('always')
    expect(wrapper.attributes('aria-roledescription')).toBe('carousel')
    expect(wrapper.attributes('aria-label')).toBe('Featured content')

    const slides = wrapper.findAll('[aria-roledescription="slide"]')
    expect(slides).toHaveLength(2)
    expect(slides[0].attributes('aria-hidden')).toBe('false')
    expect(slides[1].attributes('aria-hidden')).toBe('true')
  })
})
