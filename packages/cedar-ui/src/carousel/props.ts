import type { ExtractPropTypes, PropType } from 'vue'
import type { Direction } from '../_utils/constant'
import { DIRECTIONS } from '../_utils/constant'
import type { CarouselArrowType, CarouselAutoPlayConfig, CarouselIndicatorPosition, CarouselIndicatorType, CarouselTriggerEvent } from './types'

const triggers = ['click', 'hover'] as const
const arrowTypes = ['always', 'hover', 'never'] as const
const indicatorTypes = ['dot', 'line', 'slider'] as const
const indicatorPositions = ['bottom', 'top', 'left', 'right', 'outer'] as const

export const carouselProps = {
  current: Number,
  defaultCurrent: { type: Number, default: 0 },
  loop: { type: Boolean, default: true },
  autoPlay: { type: [Boolean, Number, Object] as PropType<boolean | number | CarouselAutoPlayConfig>, default: false },
  moveSpeed: { type: Number, default: 500, validator: (value: number) => value >= 0 },
  trigger: { type: String as PropType<CarouselTriggerEvent>, default: 'click', validator: (value: CarouselTriggerEvent) => triggers.includes(value) },
  direction: { type: String as PropType<Direction>, default: 'horizontal', validator: (value: Direction) => DIRECTIONS.includes(value) },
  showArrow: { type: String as PropType<CarouselArrowType>, default: 'always', validator: (value: CarouselArrowType) => arrowTypes.includes(value) },
  arrowClass: String,
  indicator: { type: Boolean, default: true },
  indicatorType: { type: String as PropType<CarouselIndicatorType>, default: 'dot', validator: (value: CarouselIndicatorType) => indicatorTypes.includes(value) },
  indicatorPosition: { type: String as PropType<CarouselIndicatorPosition>, default: 'bottom', validator: (value: CarouselIndicatorPosition) => indicatorPositions.includes(value) },
  indicatorClass: String,
  indicatorColor: String,
  height: String,
  transitionTimingFunction: { type: String, default: 'cubic-bezier(0.34, 0.69, 0.1, 1)' },
  touchable: { type: Boolean, default: true },
  draggable: Boolean,
  mousewheel: Boolean,
  keyboard: Boolean,
  slidesPerView: { type: [String, Number] as PropType<number | 'auto'>, default: 1, validator: (value: number | 'auto') => value === 'auto' || value > 0 },
  spaceBetween: { type: [String, Number], default: 0 },
  ariaLabel: { type: String, default: 'Carousel' },
  previousButtonAriaLabel: { type: String, default: 'Previous slide' },
  nextButtonAriaLabel: { type: String, default: 'Next slide' },
} 

export type CarouselProps = import("vue").ExtractPublicPropTypes<typeof carouselProps>
