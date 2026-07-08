<template>
  <transition name="zoom-in-top" @after-leave="handleAfterLeave">
    <div
      v-if="visible"
      role="alert"
      :class="
        classes(
          n(),
          n(`--${type}`),
          n(`--${variant}`),
          [hasTitle, n('--with-title')],
          [banner, n('--banner')],
          [center, n('--center')],
          formatElevation(elevation, 0),
        )
      "
      :style="rootStyle"
    >
      <div v-if="showIconNode" :class="n('icon')">
        <slot name="icon">
          <icon-check-circle-fill v-if="type === 'success'" />
          <icon-exclamation-circle-fill v-else-if="type === 'warning'" />
          <icon-close-circle-fill v-else-if="type === 'danger'" />
          <icon-info-circle-fill v-else />
        </slot>
      </div>

      <div :class="n('body')">
        <div v-if="hasTitle" :class="n('title')">
          <slot name="title">{{ title }}</slot>
        </div>
        <div :class="n('content')">
          <slot>{{ message }}</slot>
        </div>
      </div>

      <div v-if="$slots.action" :class="n('action')">
        <slot name="action" />
      </div>

      <div
        v-if="closable"
        tabindex="-1"
        role="button"
        aria-label="Close"
        :class="n('close-btn')"
        @click="handleClose"
      >
        <slot name="close-icon">
          <icon-hover>
            <icon-close />
          </icon-hover>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed, ref, useSlots, type CSSProperties } from 'vue'
import { call } from '@maplejs/maple-shared'
import { createNamespace, formatElevation } from '../_utils/global-config'
import IconHover from '../_components/icon-hover.vue'
import IconClose from '../icon/icon-close'
import IconInfoCircleFill from '../icon/icon-info-circle-fill'
import IconCheckCircleFill from '../icon/icon-check-circle-fill'
import IconExclamationCircleFill from '../icon/icon-exclamation-circle-fill'
import IconCloseCircleFill from '../icon/icon-close-circle-fill'
import { alertProps } from './props'

defineOptions({
  name: createNamespace('alert').name,
})

const { n, classes } = createNamespace('alert')
const props = defineProps(alertProps)
const slots = useSlots()

const visible = ref(true)

const hasTitle = computed(() => Boolean(props.title || slots.title))

// 是否渲染 icon 容器
const showIconNode = computed(() => {
  if (!props.showIcon) return false
  // 全部 type 均提供内置图标，default 亦退化到 info-circle-fill
  return true
})

const rootStyle = computed<CSSProperties>(() => {
  return props.color ? { backgroundColor: props.color } : {}
})

function handleClose(e: MouseEvent) {
  visible.value = false
  call(props.onClose, e)
}

function handleAfterLeave() {
  call(props.onAfterClose)
}
</script>
