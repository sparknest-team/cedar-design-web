<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 48 48" width="1em" height="1em" :class="cls" :style="innerStyle" :stroke-width="props.strokeWidth" :stroke-linecap="props.strokeLinecap" :stroke-linejoin="props.strokeLinejoin" :aria-hidden="!props.title" role="img" @click="emit('click', $event)"><title v-if="props.title">{{ props.title }}</title><path d="M13.45 14.043H8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h32a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-4.893m-21.657 0c-1.036-2.833-.615-5.6 1.182-6.637 2.152-1.243 5.464.464 7.397 3.812.539.933.914 1.896 1.127 2.825m-9.706 0h9.706m0 0H25.4m0 0a10.3 10.3 0 0 1 1.128-2.825c1.933-3.348 5.244-5.055 7.397-3.812 1.797 1.037 2.217 3.804 1.182 6.637m-9.707 0h9.707M10 26.043a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2z"/></svg>
</template>

<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'
import { getPrefixCls } from '../_utils/global-config'
import { isNumber } from '../_utils/is'

defineOptions({ name: 'CIconGift' })

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
const cls = computed(() => [prefixCls, `${prefixCls}-gift`, { [`${prefixCls}-spin`]: props.spin }])
const innerStyle = computed<CSSProperties>(() => ({
  color: props.color,
  fontSize: isNumber(props.size) || numericSizeRE.test(props.size?.trim() ?? '') ? `${props.size}px` : props.size,
  ...(props.rotate ? { transform: `rotate(${props.rotate}deg)` } : {}),
}))
</script>
