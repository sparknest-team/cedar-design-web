<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 48 48" :class="cls" :style="innerStyle" :stroke-width="props.strokeWidth" :stroke-linecap="props.strokeLinecap" :stroke-linejoin="props.strokeLinejoin" @click="emit('click', $event)"><path fill="currentColor" stroke="none" d="M45 15.7v17.1L24.5 44.7c-.3.2-.7.2-1 0l-20-11.5c-.3-.2-.5-.5-.5-.9V15.7c0-.4.2-.7.5-.9l20-11.6c.3-.2.7-.2 1 0l20 11.6c.3.2.5.5.5.9M26 9v9.8l5.5 3.2 8.5-4.9zm-4 0L8 17.1l8.4 4.9 5.6-3.2zm0 21.2L16.5 27 9 31.4 22 39zm17 1.2L31.4 27 26 30.2V39zm2-3.4v-6l-5 3zm-29-3-5-3v6zm8 0 4 2 4-2-4-2z"/></svg>
</template>

<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'
import { getPrefixCls } from '../_utils/global-config'
import { isNumber } from '../_utils/is'

defineOptions({ name: 'CIconCodepen' })

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
const cls = computed(() => [prefixCls, `${prefixCls}-codepen`, { [`${prefixCls}-spin`]: props.spin }])
const innerStyle = computed<CSSProperties>(() => ({
  ...(props.size ? { fontSize: isNumber(props.size) ? `${props.size}px` : props.size } : {}),
  ...(props.rotate ? { transform: `rotate(${props.rotate}deg)` } : {}),
}))
</script>
