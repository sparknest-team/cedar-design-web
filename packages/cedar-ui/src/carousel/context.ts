import { type Ref, InjectionKey } from 'vue'

export interface CarouselContext {
  items: Ref<number[]>
  current: Ref<number>
  size: Ref<number>
  vertical: Ref<boolean>
  registerItem: (uid: number, setTranslate: (v: number) => void) => void
  unregisterItem: (uid: number) => void
}

export const carouselInjectionKey: InjectionKey<CarouselContext> = Symbol('CCarousel')
