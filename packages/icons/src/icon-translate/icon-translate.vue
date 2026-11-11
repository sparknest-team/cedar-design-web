<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 48 48" width="1em" height="1em" :class="cls" :style="innerStyle" :stroke-width="props.strokeWidth" :stroke-linecap="props.strokeLinecap" :stroke-linejoin="props.strokeLinejoin" :aria-hidden="!props.title" role="img" @click="emit('click', $event)"><title v-if="props.title">{{ props.title }}</title><path d="M42 25c0 9.941-8.059 18-18 18-6.867 0-12.836-3.845-15.87-9.5M28.374 27 25 18h-2l-3.375 9m8.75 0L31 34m-2.625-7h-8.75m0 0L17 34M6 25c0-9.941 8.059-18 18-18 6.867 0 12.836 3.845 15.87 9.5M43 25h-2l1-1zM5 25h2l-1 1z"/></svg>
</template>

<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'
import { getPrefixCls } from '../_utils/global-config'
import { isNumber } from '../_utils/is'

defineOptions({ name: 'CIconTranslate' })

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
const cls = computed(() => [prefixCls, `${prefixCls}-translate`, { [`${prefixCls}-spin`]: props.spin }])
const innerStyle = computed<CSSProperties>(() => ({
  color: props.color,
  fontSize: isNumber(props.size) || numericSizeRE.test(props.size?.trim() ?? '') ? `${props.size}px` : props.size,
  ...(props.rotate ? { transform: `rotate(${props.rotate}deg)` } : {}),
}))
</script>
