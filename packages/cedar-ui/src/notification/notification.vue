<template>
  <li role="alert" :class="[prefixCls, `${prefixCls}-${type}`, { [`${prefixCls}-closable`]: closable }]">
    <div v-if="showIcon" :class="`${prefixCls}-left`">
      <div :class="`${prefixCls}-icon`">
        <slot name="icon">
          <icon-info-circle-fill v-if="type === 'info'" />
          <icon-check-circle-fill v-else-if="type === 'success'" />
          <icon-exclamation-circle-fill v-else-if="type === 'warning'" />
          <icon-close-circle-fill v-else-if="type === 'error'" />
        </slot>
      </div>
    </div>
    <div :class="`${prefixCls}-right`">
      <div v-if="$slots.default" :class="`${prefixCls}-title`">
        <slot />
      </div>
      <div v-if="$slots.content" :class="`${prefixCls}-content`">
        <slot name="content" />
      </div>
      <div v-if="$slots.footer" :class="`${prefixCls}-footer`">
        <slot name="footer" />
      </div>
    </div>
    <button v-if="closable" type="button" :aria-label="closeButtonAriaLabel" :class="`${prefixCls}-close-btn`" @click="handleClose">
      <slot name="closeIconElement">
        <a-icon-hover>
          <slot name="closeIcon">
            <icon-close />
          </slot>
        </a-icon-hover>
      </slot>
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
import { notificationProps } from './props'

export default defineComponent({
  name: createNamespace('notification').name,
  components: {
    AIconHover,
    IconInfoCircleFill,
    IconCheckCircleFill,
    IconExclamationCircleFill,
    IconCloseCircleFill,
    IconClose,
  },
  props: notificationProps,
  emits: ['close'],
  setup(props, context) {
    const prefixCls = getPrefixCls('notification')
    let timer = 0

    const handleClose = () => {
      context.emit('close')
    }

    onMounted(() => {
      if (props.duration > 0) {
        timer = window.setTimeout(handleClose, props.duration)
      }
    })

    onUpdated(() => {
      if (props.resetOnUpdate) {
        if (timer) {
          window.clearTimeout(timer)
          timer = 0
        }
        if (props.duration > 0) {
          timer = window.setTimeout(handleClose, props.duration)
        }
      }
    })

    onUnmounted(() => {
      if (timer) {
        window.clearTimeout(timer)
      }
    })

    return {
      prefixCls,
      handleClose,
    }
  },
})
</script>
