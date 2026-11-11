<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 48 48" width="1em" height="1em" :class="cls" :style="innerStyle" :stroke-width="props.strokeWidth" :stroke-linecap="props.strokeLinecap" :stroke-linejoin="props.strokeLinejoin" :aria-hidden="!props.title" role="img" @click="emit('click', $event)"><title v-if="props.title">{{ props.title }}</title><path fill="currentColor" stroke="none" d="M13.171 24.937a1.2 1.2 0 0 1 0-1.874L30.051 9.56c.785-.629 1.949-.07 1.949.937v27.006c0 1.006-1.164 1.566-1.95.937z"/></svg>
</template>

<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'
import { getPrefixCls } from '../_utils/global-config'
import { isNumber } from '../_utils/is'

defineOptions({ name: 'CIconCaretLeft' })

const props = withDefaults(defineProps<{
  size?: string | number
  color?: string
  title?: string
  strokeWidth?: number
  strokeLinecap?: 'butt' | 'round' | 'square'
  strokeLinejoin?: 'bevel' | 'inherit' | 'miter' | 'round'
  rotate?: number
  spin?: boolean
}>(), {
  strokeWidth: 4,
  strokeLinecap: 'butt',
  strokeLinejoin: 'miter',
})

const emit = defineEmits<{ click: [event: MouseEvent] }>()
const prefixCls = getPrefixCls('icon')
const numericSizeRE = /^-?(?:\d+|\d*\.\d+)$/
const cls = computed(() => [prefixCls, `${prefixCls}-caret-left`, { [`${prefixCls}-spin`]: props.spin }])
const innerStyle = computed<CSSProperties>(() => ({
  color: props.color,
  fontSize: isNumber(props.size) || numericSizeRE.test(props.size?.trim() ?? '') ? `${props.size}px` : props.size,
  ...(props.rotate ? { transform: `rotate(${props.rotate}deg)` } : {}),
}))
</script>
