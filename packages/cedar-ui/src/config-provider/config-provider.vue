<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent, provide, reactive, toRefs, getCurrentInstance, watch } from 'vue'
import { configProviderInjectionKey } from './context'
import { createNamespace } from '../_utils/global-config'
import { configProviderProps } from './props'

const THEME_ATTR = 'cedar-theme'

const applyDocumentTheme = (theme?: string) => {
  if (typeof document === 'undefined') return
  if (theme === 'dark') {
    document.documentElement.setAttribute(THEME_ATTR, 'dark')
  } else if (theme === 'light') {
    document.documentElement.removeAttribute(THEME_ATTR)
  }
}

const { name } = createNamespace('config-provider')

export default defineComponent({
  name,
  props: configProviderProps,
  /**
   * @zh 自定义空状态元素
   * @en Custom empty element
   * @slot empty
   * @binding {string} component
   * @version 2.28.0
   */
  /**
   * @zh 自定义加载中元素
   * @en Custom loading element
   * @slot loading
   * @version 2.28.0
   */
  setup(props, { slots }) {
    const { prefixCls, locale, size, updateAtScroll, scrollToClose, exchangeTime, rtl, theme } = toRefs(props)

    const config = reactive({
      slots,
      prefixCls,
      locale,
      size,
      updateAtScroll,
      scrollToClose,
      exchangeTime,
      rtl,
      theme,
    })

    watch(
      theme,
      (value) => {
        applyDocumentTheme(value)
      },
      { immediate: true },
    )

    if (props.global) {
      const instance = getCurrentInstance()
      if (instance) {
        instance.appContext.app.provide(configProviderInjectionKey, config)
      }
    } else {
      provide(configProviderInjectionKey, config)
    }
  },
})
</script>
