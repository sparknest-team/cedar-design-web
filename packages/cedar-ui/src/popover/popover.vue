<template>
  <trigger
    ref="triggerRef"
    :class="prefixCls"
    :trigger="triggerEvents"
    :disabled="disabled"
    :position="triggerPosition"
    :popup-visible="computedPopupVisible"
    :popup-offset="10"
    :content-class="contentCls"
    :content-style="contentStyle"
    :arrow-class="arrowCls"
    :arrow-style="arrowStyle"
    show-arrow
    :popup-container="popupContainer"
    animation-name="zoom-in-fade-out"
    auto-fit-transform-origin
    @popup-visible-change="handlePopupVisibleChange"
    @show="handleOpened"
    @hide="handleClosed"
    @click-outside="handleClickOutside"
  >
    <slot />
    <template #content>
      <div v-if="title || $slots.title" :class="`${prefixCls}-title`">
        <slot name="title">{{ title }}</slot>
      </div>
      <div :class="`${prefixCls}-content`">
        <slot name="content">{{ content }}</slot>
      </div>
    </template>
  </trigger>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { computed, CSSProperties, defineComponent, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { getPrefixCls } from '../_utils/global-config'
import type { TriggerEvent, TriggerPosition } from '../_utils/constant'
import Trigger, { type TriggerInstance } from '../trigger'
import { ClassName } from '../_utils/types'
import type { PopoverPlacement, PopoverTrigger } from './types'

const placementToPosition: Record<PopoverPlacement, TriggerPosition> = {
  top: 'top',
  'top-start': 'tl',
  'top-end': 'tr',
  bottom: 'bottom',
  'bottom-start': 'bl',
  'bottom-end': 'br',
  left: 'left',
  'left-start': 'lt',
  'left-end': 'lb',
  right: 'right',
  'right-start': 'rt',
  'right-end': 'rb',
}

export default defineComponent({
  name: 'Popover',
  components: {
    Trigger,
  },
  props: {
    /**
     * @zh 文字气泡是否可见
     * @en Whether the popover is visible
     * @vModel
     */
    popupVisible: {
      type: Boolean,
      default: undefined,
    },
    /**
     * @zh 文字气泡默认是否可见（非受控模式）
     * @en Whether the popover is visible by default (uncontrolled mode)
     */
    defaultPopupVisible: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 标题
     * @en Title
     */
    title: String,
    /**
     * @zh 内容
     * @en Content
     */
    content: String,
    /**
     * @zh 触发方式
     * @en Trigger method
     * @values 'hover','click','focus','contextMenu','manual'
     */
    trigger: {
      type: [String, Array] as PropType<PopoverTrigger | PopoverTrigger[]>,
      default: 'hover',
    },
    /**
     * @zh 是否禁用
     * @en Whether to disable the popover
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 弹出位置
     * @en Pop-up position
     * @values 'top','top-start','top-end','bottom','bottom-start','bottom-end','left','left-start','left-end','right','right-start','right-end'
     */
    placement: {
      type: String as PropType<PopoverPlacement>,
      default: 'top',
    },
    /**
     * @zh 弹出框内容的类名
     * @en The class name of the popup content
     */
    contentClass: {
      type: [String, Array, Object] as PropType<ClassName>,
    },
    /**
     * @zh 弹出框内容的样式
     * @en The style of the popup content
     */
    contentStyle: {
      type: Object as PropType<CSSProperties>,
    },
    /**
     * @zh 弹出框箭头的类名
     * @en The class name of the popup arrow
     */
    arrowClass: {
      type: [String, Array, Object] as PropType<ClassName>,
    },
    /**
     * @zh 弹出框箭头的样式
     * @en The style of the popup arrow
     */
    arrowStyle: {
      type: Object as PropType<CSSProperties>,
    },
    /**
     * @zh 弹出框的挂载容器
     * @en Mount container for pop-up box
     */
    popupContainer: {
      type: [String, Object] as PropType<string | HTMLElement>,
    },
    /**
     * @zh 是否支持按 ESC 键关闭
     * @en Whether to close the popover when Escape is pressed
     */
    closeOnKeyEscape: {
      type: Boolean,
      default: true,
    },
  },
  emits: {
    'update:popupVisible': (visible: boolean) => true,
    /**
     * @zh 文字气泡显示状态改变时触发
     * @en Triggered when the text bubble display status changes
     * @param {boolean} visible
     */
    popupVisibleChange: (visible: boolean) => true,
    /**
     * @zh 气泡卡片打开时触发
     * @en Triggered when the popover opens
     */
    open: () => true,
    /**
     * @zh 气泡卡片打开动画结束后触发
     * @en Triggered after the popover opening transition ends
     */
    opened: () => true,
    /**
     * @zh 气泡卡片关闭时触发
     * @en Triggered when the popover closes
     */
    close: () => true,
    /**
     * @zh 气泡卡片关闭动画结束后触发
     * @en Triggered after the popover closing transition ends
     */
    closed: () => true,
    /**
     * @zh 点击气泡卡片外部时触发
     * @en Triggered when clicking outside the popover
     */
    clickOutside: (event: Event) => true,
  },
  /**
   * @zh 标题
   * @en Title
   * @slot title
   */
  /**
   * @zh 内容
   * @en Content
   * @slot content
   */
  setup(props, { emit }) {
    const prefixCls = getPrefixCls('popover')
    const triggerRef = ref<TriggerInstance>()
    const _popupVisible = ref(props.defaultPopupVisible)
    const computedPopupVisible = computed(() => props.popupVisible ?? _popupVisible.value)
    const triggerPosition = computed(() => placementToPosition[props.placement])
    const triggerEvents = computed(() =>
      ([] as PopoverTrigger[]).concat(props.trigger).filter((event): event is TriggerEvent => event !== 'manual'),
    )

    const handlePopupVisibleChange = (visible: boolean) => {
      _popupVisible.value = visible
      emit('update:popupVisible', visible)
      emit('popupVisibleChange', visible)
    }

    const open = () => {
      if (!props.disabled) {
        handlePopupVisibleChange(true)
      }
    }
    const close = () => handlePopupVisibleChange(false)
    const handleOpened = () => emit('opened')
    const handleClosed = () => emit('closed')
    const handleClickOutside = (event: Event) => emit('clickOutside', event)
    const resize = () => triggerRef.value?.resize()
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && props.closeOnKeyEscape && computedPopupVisible.value) {
        close()
      }
    }

    onMounted(() => window.addEventListener('keydown', handleKeydown))
    onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))

    watch(computedPopupVisible, (visible) => {
      if (visible) {
        emit('open')
      } else {
        emit('close')
      }
    })

    const contentCls = computed(() => [`${prefixCls}-popup-content`, props.contentClass])

    const arrowCls = computed(() => [`${prefixCls}-popup-arrow`, props.arrowClass])

    return {
      prefixCls,
      triggerRef,
      triggerPosition,
      triggerEvents,
      computedPopupVisible,
      contentCls,
      arrowCls,
      handlePopupVisibleChange,
      handleOpened,
      handleClosed,
      open,
      close,
      resize,
      handleClickOutside,
    }
  },
})
</script>
