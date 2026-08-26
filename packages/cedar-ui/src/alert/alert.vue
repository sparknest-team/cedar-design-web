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
          formatElevation(elevation, 2),
        )
      "
      :style="rootStyle"
    >
      <div v-if="showIconNode" :class="n('icon')">
        <slot name="icon">
          <icon-check-circle-fill v-if="type === 'success'" />
          <icon-exclamation-circle-fill v-else-if="type === 'warning'" />
          <icon-close-circle-fill v-else-if="type === 'danger'" />
          <icon-info-circle-fill v-else-if="type === 'info'" />
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
        aria-label="IconClose"
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
import { createNamespace, formatElevation } from '../_utils/global-config'
import IconHover from '../_components/icon-hover.vue'
import { IconClose } from '@cedarjs/icons-vue/icon-close'
import { IconInfoCircleFill } from '@cedarjs/icons-vue/icon-info-circle-fill'
import { IconCheckCircleFill } from '@cedarjs/icons-vue/icon-check-circle-fill'
import { IconExclamationCircleFill } from '@cedarjs/icons-vue/icon-exclamation-circle-fill'
import { IconCloseCircleFill } from '@cedarjs/icons-vue/icon-close-circle-fill'
import { alertProps } from './props'

defineOptions({
  name: createNamespace('alert').name,
})

const { n, classes } = createNamespace('alert')
const props = defineProps(alertProps)
const emit = defineEmits<{
  (event: 'close', value: MouseEvent): void
  (event: 'after-close'): void
}>()
const slots = useSlots()

const visible = ref(true)

const hasTitle = computed(() => Boolean(props.title || slots.title))

const showIconNode = computed(() => {
  if (!props.showIcon) return false
  if (slots.icon) return true
  return props.type !== 'default'
})

const rootStyle = computed<CSSProperties>(() => {
  return props.color ? { backgroundColor: props.color } : {}
})

function handleClose(e: MouseEvent) {
  visible.value = false
  emit('close', e)
}

function handleAfterLeave() {
  emit('after-close')
}
</script>
