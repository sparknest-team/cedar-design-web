<template>
  <!-- Invisible registration component: registers tab metadata with parent CTabs -->
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, inject, onBeforeUnmount, onUpdated, reactive, toRefs } from 'vue'
import { createNamespace } from '../_utils/global-config'
import { tabsInjectionKey } from './context'
import type { TabsContext } from './context'

export default defineComponent({
  name: 'CTabNav',
  props: {
    /**
     * @zh 选项卡的标题
     * @en Title of the tab
     */
    title: String,
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否允许关闭此选项卡（仅在可编辑模式生效）
     * @en Whether to allow this tab to be closed (only effective in editable mode)
     */
    closable: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 图标和文字是否垂直排列
     * @en Whether the icon and text are arranged vertically
     */
    itemVertical: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const { title, disabled, closable, itemVertical } = toRefs(props)
    const instance = getCurrentInstance()
    const tabsCtx = inject<Partial<TabsContext>>(tabsInjectionKey, {})

    const key = computed(() => instance?.vnode.key as string | number)
    const data = reactive({ key, title, disabled, closable, itemVertical, slots })

    if (instance?.uid) {
      tabsCtx.addItem?.(instance.uid, data)
    }

    onBeforeUnmount(() => {
      if (instance?.uid) tabsCtx.removeItem?.(instance.uid)
    })

    onUpdated(() => {
      data.slots = { ...slots }
    })

    return {}
  },
})
</script>
