<template>
  <div
    :class="itemCls"
    :style="itemStyle"
    :aria-hidden="!isCurrent"
    tabindex="-1"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, inject, computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { getPrefixCls } from '../_utils/global-config'
import { carouselInjectionKey, CarouselContext } from './context'

export default defineComponent({
  name: 'CarouselItem',
  setup() {
    const prefixCls = getPrefixCls('carousel-item')
    const instance = getCurrentInstance()
    const context = inject<CarouselContext>(carouselInjectionKey)!
    const index = computed(() => context.items.value?.indexOf(instance?.uid ?? -1) ?? -1)
    const translate = ref(0)

    const isCurrent = computed(() => false)

    const itemCls = computed(() => [prefixCls])

    const setTranslate = (v: number) => { translate.value = v }

    onMounted(() => {
      if (instance?.uid) context.registerItem(instance.uid, setTranslate)
    })
    onBeforeUnmount(() => {
      if (instance?.uid) context.unregisterItem(instance.uid)
    })

    const itemStyle = computed(() => {
      const s = context.size.value
      if (!s) return {}
      const base = context.vertical.value
        ? { flexShrink: 0, height: `${s}px` }
        : { flexShrink: 0, width: `${s}px` }
      if (translate.value) {
        const axis = context.vertical.value ? 'Y' : 'X'
        return { ...base, transform: `translate${axis}(${translate.value}px)` }
      }
      return base
    })

    return { itemCls, itemStyle, isCurrent }
  },
})
</script>
