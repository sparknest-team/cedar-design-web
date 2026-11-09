<template>
  <div ref="root" :dir="$props.dir" style="display: contents"><slot /></div>
</template>

<script lang="ts">
import { defineComponent, provide, reactive, getCurrentInstance, computed, inject, ref, onBeforeUpdate } from 'vue'
import type { Slots, SlotsType } from 'vue'
import type { ConfigProviderSlots } from './interfaces'
import { provideDirection, readingDirectionKey } from '@cedar-design/use'
import { configProviderInjectionKey } from './context'
import { createNamespace } from '../_utils/global-config'
import { configProviderProps } from './props'

const { name } = createNamespace('config-provider')

export default defineComponent({
  name,
  props: configProviderProps,
  slots: Object as SlotsType<ConfigProviderSlots>,
  /**
   * @zh 自定义空状态元素
   * @en Custom empty element
   * @slot empty
   * @binding {string} component
   */
  /**
   * @zh 自定义加载中元素
   * @en Custom loading element
   * @slot loading
   */
  setup(props, { slots }) {
    const parent = inject(configProviderInjectionKey, undefined)
    const root = ref<HTMLElement>()

    const parentDirection = inject(readingDirectionKey, undefined)
    const direction = computed(() => props.dir ?? parentDirection?.value)
    provideDirection(direction)

    // Slot presence is not reactive; invalidate consumer slot getters before updates.
    const slotVersion = ref(0)
    onBeforeUpdate(() => { slotVersion.value++ })
    // Vue normalizes public VNodeChild slot results into VNode arrays at runtime.
    const ownSlots = slots as Slots
    const config = reactive({
      slots: {
        get default() { return ownSlots.default },
        get empty() { void slotVersion.value; return ownSlots.empty ?? parent?.slots.empty },
        get loading() { void slotVersion.value; return ownSlots.loading ?? parent?.slots.loading },
      },
      prefixCls: computed(() => props.prefixCls ?? parent?.prefixCls ?? 'c'),
      locale: computed(() => props.locale ?? parent?.locale),
      size: computed(() => props.size ?? parent?.size),
      updateAtScroll: computed(() => props.updateAtScroll ?? parent?.updateAtScroll ?? false),
      scrollToClose: computed(() => props.scrollToClose ?? parent?.scrollToClose ?? false),
      dir: direction,
    })

    if (props.global) {
      const instance = getCurrentInstance()
      if (instance) {
        instance.appContext.app.provide(configProviderInjectionKey, config)
        instance.appContext.app.provide(readingDirectionKey, direction)
      }
    } else {
      provide(configProviderInjectionKey, config)
    }
    return { direction, root }
  },
})
</script>
