<template>
  <li
    role="alert"
    :class="[prefixCls, `${prefixCls}-${type}`, { [`${prefixCls}-closable`]: closable }]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <span v-if="showIcon && !(type === 'normal' && !$slots.icon)" :class="`${prefixCls}-icon`">
      <slot name="icon">
        <icon-info-circle-fill v-if="type === 'info'" />
        <icon-check-circle-fill v-else-if="type === 'success'" />
        <icon-exclamation-circle-fill v-else-if="type === 'warning'" />
        <icon-close-circle-fill v-else-if="type === 'error'" />
        <icon-loading v-else-if="type === 'loading'" />
      </slot>
    </span>
    <span :class="`${prefixCls}-content`">
      <slot />
    </span>
    <button v-if="closable" type="button" :aria-label="closeButtonAriaLabel" :class="`${prefixCls}-close-btn`" @click="handleClose">
      <a-icon-hover>
        <icon-close />
      </a-icon-hover>
    </button>
  </li>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, onUpdated } from 'vue'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import AIconHover from '../_components/icon-hover.vue'
import { IconClose } from '@cedarjs/icons-vue/icon-close'
import { IconInfoCircleFill } from '@cedarjs/icons-vue/icon-info-circle-fill'
import { IconCheckCircleFill } from '@cedarjs/icons-vue/icon-check-circle-fill'
import { IconExclamationCircleFill } from '@cedarjs/icons-vue/icon-exclamation-circle-fill'
import { IconCloseCircleFill } from '@cedarjs/icons-vue/icon-close-circle-fill'
import { IconLoading } from '@cedarjs/icons-vue/icon-loading'
import { messageProps } from './props'

export default defineComponent({
  name: createNamespace('message').name,
  components: {
    AIconHover,
    IconInfoCircleFill,
    IconCheckCircleFill,
    IconExclamationCircleFill,
    IconCloseCircleFill,
    IconClose,
    IconLoading,
  },
  props: messageProps,
  emits: ['close'],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls('message')
    let timer = 0

    const handleClose = () => {
      emit('close')
    }

    const startTimer = () => {
      if (props.duration > 0) {
        timer = window.setTimeout(handleClose, props.duration)
      }
    }

    const clearTimer = () => {
      if (timer) {
        window.clearTimeout(timer)
        timer = 0
      }
    }

    onMounted(() => {
      startTimer()
    })

    onUpdated(() => {
      if (props.resetOnUpdate) {
        clearTimer()
        startTimer()
      }
    })

    onUnmounted(() => {
      clearTimer()
    })

    const handleMouseEnter = () => {
      if (props.resetOnHover) {
        clearTimer()
      }
    }

    const handleMouseLeave = () => {
      if (props.resetOnHover) {
        startTimer()
      }
    }
    return {
      handleMouseEnter,
      handleMouseLeave,
      prefixCls,
      handleClose,
    }
  },
})
</script>
