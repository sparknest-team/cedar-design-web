<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 48 48" :class="cls" :style="innerStyle" :stroke-width="props.strokeWidth" :stroke-linecap="props.strokeLinecap" :stroke-linejoin="props.strokeLinejoin" @click="emit('click', $event)"><path d="M13 15.528C14.32 12.386 18.403 6.977 23.556 7c7.944.036 14.514 8.528 10.116 15.71-4.399 7.181-5.718 10.323-6.598 14.363-.82 3.766-9.288 7.143-11.498-1.515M20 18.5c1-3.083 4.5-4.5 6.5-2 2.85 3.562-3.503 8.312-5.5 12.5"/></svg>
</template>

<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'
import { getPrefixCls } from '../_utils/global-config'
import { isNumber } from '../_utils/is'

defineOptions({ name: 'CIconEar' })

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
const cls = computed(() => [prefixCls, `${prefixCls}-ear`, { [`${prefixCls}-spin`]: props.spin }])
const innerStyle = computed<CSSProperties>(() => ({
  ...(props.size ? { fontSize: isNumber(props.size) ? `${props.size}px` : props.size } : {}),
  ...(props.rotate ? { transform: `rotate(${props.rotate}deg)` } : {}),
}))
</script>
