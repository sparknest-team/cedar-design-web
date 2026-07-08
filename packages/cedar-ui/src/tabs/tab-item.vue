<template>
  <div
    ref="itemRef"
    :class="classes(n('content-item'), [active, n('--content-item-active')])"
  >
    <div v-if="mounted" :class="classes(n('pane'))">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, inject, ref, watch } from 'vue'
import { createNamespace } from '../_utils/global-config'
import { tabsInjectionKey } from './context'
import type { TabsContext } from './context'

export default defineComponent({
  name: 'CTabItem',
  props: {
    /**
     * @zh 是否在首次展示标签时挂载内容
     * @en Whether to mount the content when the label is first displayed
     */
    lazyLoad: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否在不显示标签时销毁内容
     * @en Whether to destroy the content when the label is not displayed
     */
    destroyOnHide: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const instance = getCurrentInstance()
    const { classes, n } = createNamespace('tabs')
    const tabsCtx = inject<Partial<TabsContext>>(tabsInjectionKey, {})

    const itemRef = ref<HTMLElement>()
    const key = computed(() => instance?.vnode.key as string | number)
    const active = computed(() => key.value === tabsCtx.activeKey)
    const mounted = ref(tabsCtx.lazyLoad ? active.value : true)

    watch(active, (active) => {
      if (active) {
        if (!mounted.value) mounted.value = true
      } else if (props.destroyOnHide || tabsCtx.destroyOnHide) {
        mounted.value = false
      }
    })

    return { classes, n, active, itemRef, mounted }
  },
})
</script>
