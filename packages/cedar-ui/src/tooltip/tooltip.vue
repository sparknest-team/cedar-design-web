<template>
  <Trigger
    :class="prefixCls"
    trigger="hover"
    :placement="placement"
    :open="computedOpen"
    :popup-offset="10"
    show-arrow
    :content-class="contentCls"
    :content-style="computedContentStyle"
    :arrow-class="arrowCls"
    :arrow-style="computedArrowStyle"
    :popup-container="popupContainer"
    animation-name="zoom-in-fade-out"
    auto-fit-transform-origin
    role="tooltip"
    @open-change="handleOpenChange"
  >
    <slot />
    <template #content>
      <slot name="content">{{ content }}</slot>
    </template>
  </Trigger>
</template>

<script lang="ts">
import { computed, CSSProperties, defineComponent, ref } from 'vue'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import Trigger from '../trigger'
import { tooltipProps } from './props'

export default defineComponent({
  name: createNamespace('tooltip').name,
  components: {
    Trigger,
  },
  props: tooltipProps,
  emits: {
    'update:open': (visible: boolean) => true,
    /**
     * @zh 文字气泡显示状态改变时触发
     * @en Emitted when the tooltip display status changes
     * @param {boolean} visible
     */
    openChange: (visible: boolean) => true,
  },
  /**
   * @zh 内容
   * @en Content
   * @slot content
   */
  setup(props, { emit }) {
    const prefixCls = getPrefixCls('tooltip')

    const _open = ref(props.defaultOpen)
    const computedOpen = computed(() => props.open ?? _open.value)

    const handleOpenChange = (visible: boolean) => {
      _open.value = visible
      emit('update:open', visible)
      emit('openChange', visible)
    }

    const contentCls = computed(() => [
      `${prefixCls}-content`,
      props.contentClass,
      { [`${prefixCls}-xs`]: props.xs },
    ])

    const computedContentStyle = computed<CSSProperties | undefined>(() => {
      if (props.backgroundColor || props.contentStyle) {
        return {
          backgroundColor: props.backgroundColor,
          ...props.contentStyle,
        }
      }
      return undefined
    })

    const arrowCls = computed(() => [`${prefixCls}-popup-arrow`, props.arrowClass])

    const computedArrowStyle = computed<CSSProperties | undefined>(() => {
      if (props.backgroundColor || props.arrowStyle) {
        return {
          backgroundColor: props.backgroundColor,
          ...props.arrowStyle,
        }
      }
      return undefined
    })

    return {
      prefixCls,
      computedOpen,
      contentCls,
      computedContentStyle,
      arrowCls,
      computedArrowStyle,
      handleOpenChange,
    }
  },
})
</script>
