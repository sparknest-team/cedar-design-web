<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" style="fill:currentColor;stroke:none" :class="cls" :style="innerStyle" :stroke-width="props.strokeWidth" :stroke-linecap="props.strokeLinecap" :stroke-linejoin="props.strokeLinejoin" :aria-hidden="!props.title" role="img" @click="emit('click', $event)"><title v-if="props.title">{{ props.title }}</title><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.9 7.9 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.93 7.93 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11"/></svg>
</template>

<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'
import { getPrefixCls } from '../_utils/global-config'
import { isNumber } from '../_utils/is'

defineOptions({ name: 'CIconUserCircle' })

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
const cls = computed(() => [prefixCls, `${prefixCls}-user-circle`, { [`${prefixCls}-spin`]: props.spin }])
const innerStyle = computed<CSSProperties>(() => ({
  color: props.color,
  fontSize: isNumber(props.size) || numericSizeRE.test(props.size?.trim() ?? '') ? `${props.size}px` : props.size,
  ...(props.rotate ? { transform: `rotate(${props.rotate}deg)` } : {}),
}))
</script>
