<template>
  <trigger
    ref="triggerRef"
    :class="prefixCls"
    :trigger="triggerEvents"
    :disabled="disabled"
    :placement="triggerPosition"
    :open="computedOpen"
    :popup-offset="10"
    :content-class="contentCls"
    :content-style="contentStyle"
    :arrow-class="arrowCls"
    :arrow-style="arrowStyle"
    show-arrow
    :popup-container="popupContainer"
    animation-name="zoom-in-fade-out"
    auto-fit-transform-origin
    @open-change="handleOpenChange"
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
import { computed, defineComponent, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import type { TriggerEvent, TriggerPosition } from '../_utils/constant'
import Trigger, { type TriggerInstance } from '../trigger'
import type { PopoverPlacement, PopoverTrigger } from './types'
import { popoverProps } from './props'

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
  name: createNamespace('popover').name,
  components: {
    Trigger,
  },
  props: popoverProps,
  emits: {
    'update:open': (visible: boolean) => true,
    /**
     * @zh 文字气泡显示状态改变时触发
     * @en Triggered when the text bubble display status changes
     * @param {boolean} visible
     */
    openChange: (visible: boolean) => true,
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
    const _open = ref(props.defaultOpen)
    const computedOpen = computed(() => props.open ?? _open.value)
    const triggerPosition = computed(() => placementToPosition[props.placement])
    const triggerEvents = computed(() =>
      ([] as PopoverTrigger[]).concat(props.trigger).filter((event): event is TriggerEvent => event !== 'manual'),
    )

    const handleOpenChange = (visible: boolean) => {
      _open.value = visible
      emit('update:open', visible)
      emit('openChange', visible)
    }

    const open = () => {
      if (!props.disabled) {
        handleOpenChange(true)
      }
    }
    const close = () => handleOpenChange(false)
    const handleOpened = () => emit('opened')
    const handleClosed = () => emit('closed')
    const handleClickOutside = (event: Event) => emit('clickOutside', event)
    const resize = () => triggerRef.value?.resize()
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && props.escToClose && computedOpen.value) {
        close()
      }
    }

    onMounted(() => window.addEventListener('keydown', handleKeydown))
    onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))

    watch(computedOpen, (visible) => {
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
      computedOpen,
      contentCls,
      arrowCls,
      handleOpenChange,
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
