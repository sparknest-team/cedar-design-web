import { withInstall } from '../_utils/global-config'
import _Carousel from './carousel'
import _CarouselItem from './CarouselItem.vue'
import { carouselProps } from './props'

const Carousel = withInstall(_Carousel, Object.assign(_Carousel, {
  Item: _CarouselItem,
}), { components: [_Carousel, _CarouselItem] })

export type CarouselInstance = InstanceType<typeof _Carousel>
export type CarouselItemInstance = InstanceType<typeof _CarouselItem>
export type { CarouselProps } from './props'
export type {
  CarouselArrowType,
  CarouselAutoPlayConfig,
  CarouselIndicatorPosition,
  CarouselIndicatorType,
  CarouselTriggerEvent,
} from './types'
export { Carousel, carouselProps }
export const _CarouselComponent = Carousel
export const _CarouselItemComponent = _CarouselItem

export { _CarouselItem as CarouselItem }

export default Carousel
