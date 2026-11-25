<template>
  <Teleport :to="popupTarget" :disabled="popupContainer === false">
    <component
      :is="Transition"
      name="fade-message"
      :appear="!hydrating"
      @after-enter="emit('opened')"
      @before-leave="keepLeavingSurface"
      @after-leave="finishLeave"
    >
      <div
        v-if="open"
        ref="surface"
        :dir="readingDirection"
        v-bind="mergeProps(themeScope, regionAttrs())"
        :style="{ '--c-internal-message-z-index': feedbackZIndex }"
        role="alert"
        :class="[
          prefixCls,
          `${prefixCls}--variant-${variant}`,
          `${prefixCls}-${status}`,
          {
            [`${prefixCls}-closable`]: closable,
            [`${prefixCls}-standalone`]: popupContainer !== false,
          },
          popupContainer !== false && `${prefixCls}-standalone-${position}`,
        ]"
        @mouseenter="pause"
        @mouseleave="resume"
      >
        <span
          v-if="showIcon && (status !== 'default' || $slots.icon || icon || icon === 0)"
          :class="`${prefixCls}-icon`"
        >
          <slot name="icon">
            <dynamic-content v-if="icon || icon === 0" :value="icon" />
            <icon-info-circle-fill v-else-if="status === 'info'" />
            <icon-check-circle-fill v-else-if="status === 'success'" />
            <icon-exclamation-circle-fill v-else-if="status === 'warning'" />
            <icon-close-circle-fill v-else-if="status === 'danger'" />
            <icon-loading v-else-if="status === 'loading'" />
          </slot>
        </span>
        <span :class="`${prefixCls}-content`"
          ><slot><dynamic-content :value="content" /></slot
        ></span>
        <span v-if="$slots.action || action || action === 0" :class="`${prefixCls}-action`"
          ><slot name="action"><dynamic-content :value="action" /></slot
        ></span>
        <button
          v-if="closable"
          type="button"
          :aria-label="closeButtonAriaLabel"
          :class="`${prefixCls}-close-btn`"
          @click="requestClose"
        >
          <a-icon-hover :prefix="prefixCls"><icon-close /></a-icon-hover>
        </button>
      </div>
    </component>
  </Teleport>
</template>

<script setup lang="ts">
import { getCurrentInstance, mergeProps, onMounted, shallowRef, Transition, useAttrs, watch } from 'vue'
import { IconCheckCircleFill } from '@cedar-design/icons-vue/icon-check-circle-fill'
import { IconClose } from '@cedar-design/icons-vue/icon-close'
import { IconCloseCircleFill } from '@cedar-design/icons-vue/icon-close-circle-fill'
import { IconExclamationCircleFill } from '@cedar-design/icons-vue/icon-exclamation-circle-fill'
import { IconInfoCircleFill } from '@cedar-design/icons-vue/icon-info-circle-fill'
import { IconLoading } from '@cedar-design/icons-vue/icon-loading'
import AIconHover from '../_components/IconHover.vue'
import { useDirection } from '../_utils/direction'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import { usePopupContainer } from '../_utils/popup-container'
import { useVisualSurface } from '../_utils/visual-surface'
import { useFeedbackZIndex } from '../context/zIndex'
import { useThemeScope } from '../theme-provider/context'
import { messageProps } from './props'
import type { MessageContent } from './types'
import { useMessageTimer } from './use-message-timer'

const themeScope = useThemeScope()
const hydrating = !!getCurrentInstance()?.vnode.el

defineOptions({ name: createNamespace('message').name, inheritAttrs: false })
const DynamicContent = ({ value }: { value?: MessageContent }) => (typeof value === 'function' ? value() : value)
const props = defineProps(messageProps)
const attrs = useAttrs()
function regionAttrs() {
  const { dir, ...region } = attrs
  return region
}
const { dir: readingDirection } = useDirection(undefined, () => attrs.dir)
const emit = defineEmits<{
  (event: 'update:open', value: boolean): void
  (event: 'open' | 'opened' | 'close' | 'closed'): void
}>()
const prefixCls = getPrefixCls('message')
const popupTarget = usePopupContainer(() => props.popupContainer)
const feedbackZIndex = useFeedbackZIndex(() => {
  const target = popupTarget.value
  return typeof target === 'string' ? (typeof document === 'undefined' ? undefined : document) : target.ownerDocument
})
const surface = shallowRef<HTMLElement>()
const leavingSurface = shallowRef<HTMLElement>()
useVisualSurface(
  () => (props.popupContainer === false ? undefined : (surface.value ?? leavingSurface.value)),
  () => feedbackZIndex.value,
  'positioned',
)
function keepLeavingSurface(element: Element) {
  leavingSurface.value = element as HTMLElement
}
function finishLeave(element: Element) {
  if (leavingSurface.value === element) leavingSurface.value = undefined
  emit('closed')
}
const requestClose = () => emit('update:open', false)
const { pause, resume, restart } = useMessageTimer({
  open: () => props.open,
  duration: () => props.duration,
  pauseOnHover: () => props.pauseOnHover,
  resetOnUpdate: () => props.resetOnUpdate,
  close: requestClose,
})
defineExpose({ restartTimer: restart })

onMounted(() => {
  if (props.open) {
    emit('open')
    if (hydrating) emit('opened')
  }
})
watch(
  () => props.open,
  (open, previous) => {
    if (open && !previous) emit('open')
    else if (!open && previous) emit('close')
  },
)
watch(() => [props.content, props.icon, props.action, props.status, props.duration], restart)
</script>
