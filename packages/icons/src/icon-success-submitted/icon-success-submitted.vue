<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-opacity="0" viewBox="0 0 120 120" width="1em" height="1em" style="fill:currentColor;stroke:none" :class="cls" :style="innerStyle" :stroke-width="props.strokeWidth" :stroke-linecap="props.strokeLinecap" :stroke-linejoin="props.strokeLinejoin" :aria-hidden="!props.title" role="img" @click="emit('click', $event)"><title v-if="props.title">{{ props.title }}</title><ellipse cx="60" cy="112.836" fill="url(#a)" rx="60" ry="7.164"/><rect width="56.418" height="62.641" x="38.144" y="20.852" fill="#f0f3fa" rx="4" transform="rotate(15 38.144 20.852)"/><rect width="23.179" height="7.06" x="54.995" y="22.177" fill="#b1b9cc" rx="1.5" transform="rotate(15 54.995 22.177)"/><rect width="8.851" height="8.851" x="46.961" y="34.858" rx="1.5" transform="rotate(15 46.961 34.858)"/><rect width="8.851" height="8.851" x="43.021" y="49.563" rx="1.5" transform="rotate(15 43.021 49.563)"/><rect width="8.851" height="8.851" x="39.081" y="64.268" rx="1.5" transform="rotate(15 39.08 64.268)"/><path d="m56.239 46.15 16.435 4.403M52.298 60.854l16.436 4.404M48.358 75.56l16.435 4.403M47.435 39.757l.906 1.57a1 1 0 0 0 1.366.366l3.466-2M43.53 54.34l.907 1.57a1 1 0 0 0 1.366.366l3.465-2M39.673 69.211l.907 1.57a1 1 0 0 0 1.366.366l3.465-2"/><path fill="#fff" d="M83.164 93.269c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15"/><path d="m76 78.79 5.432 5.432M81.432 84.27 91.702 74"/><defs><linearGradient id="a" x1="60" x2="60" y1="101.821" y2="120" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#f0f3fa"/></linearGradient></defs></svg>
</template>

<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'
import { getPrefixCls } from '../_utils/global-config'
import { isNumber } from '../_utils/is'

defineOptions({ name: 'CIconSuccessSubmitted' })

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
const cls = computed(() => [prefixCls, `${prefixCls}-success-submitted`, { [`${prefixCls}-spin`]: props.spin }])
const innerStyle = computed<CSSProperties>(() => ({
  color: props.color,
  fontSize: isNumber(props.size) || numericSizeRE.test(props.size?.trim() ?? '') ? `${props.size}px` : props.size,
  ...(props.rotate ? { transform: `rotate(${props.rotate}deg)` } : {}),
}))
</script>
