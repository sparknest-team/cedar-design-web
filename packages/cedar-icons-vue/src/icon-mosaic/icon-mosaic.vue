<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 48 48" :class="cls" :style="innerStyle" :stroke-width="props.strokeWidth" :stroke-linecap="props.strokeLinecap" :stroke-linejoin="props.strokeLinejoin" @click="emit('click', $event)"><path fill="currentColor" stroke="none" d="M6 7h4v4H6zM6 23h4v4H6zM6 38h4v4H6zM14 15h4v4h-4zM14 31h4v4h-4zM22 7h4v4h-4zM22 23h4v4h-4zM22 38h4v4h-4zM30 15h4v4h-4zM30 31h4v4h-4zM38 7h4v4h-4zM38 23h4v4h-4zM38 38h4v4h-4z"/><path d="M6 7h4v4H6zM6 23h4v4H6zM6 38h4v4H6zM14 15h4v4h-4zM14 31h4v4h-4zM22 7h4v4h-4zM22 23h4v4h-4zM22 38h4v4h-4zM30 15h4v4h-4zM30 31h4v4h-4zM38 7h4v4h-4zM38 23h4v4h-4zM38 38h4v4h-4z"/></svg>
</template>

<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'
import { getPrefixCls } from '../_utils/global-config'
import { isNumber } from '../_utils/is'

defineOptions({ name: 'CIconMosaic' })

const props = withDefaults(defineProps<{
  size?: string | number
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
const cls = computed(() => [prefixCls, `${prefixCls}-mosaic`, { [`${prefixCls}-spin`]: props.spin }])
const innerStyle = computed<CSSProperties>(() => ({
  ...(props.size ? { fontSize: isNumber(props.size) ? `${props.size}px` : props.size } : {}),
  ...(props.rotate ? { transform: `rotate(${props.rotate}deg)` } : {}),
}))
</script>
