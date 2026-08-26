<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 48 48" :class="cls" :style="innerStyle" :stroke-width="props.strokeWidth" :stroke-linecap="props.strokeLinecap" :stroke-linejoin="props.strokeLinejoin" @click="emit('click', $event)"><path d="M13 24h30M13 37h30M13 11h30"/><path fill="currentColor" fill-rule="evenodd" stroke="none" d="M5.578 13.06v1.695h5.041V13.06H9.164V7.555H7.748L5.255 8.968l.763 1.513 1.114-.636v3.215zM5.37 26.205v1.49h5.07V26H7.964l.94-.94q.682-.66.982-1.258.298-.606.298-1.266c0-.686-.224-1.225-.683-1.6-.45-.372-1.093-.55-1.912-.55q-.71 0-1.38.214a3.6 3.6 0 0 0-1.133.582l-.066.053.652 1.533.113-.085q.394-.298.783-.44.399-.141.774-.141c.309 0 .52.06.652.165.128.1.198.252.198.477q.001.265-.154.54l-.001.002q-.148.279-.528.69zM10.381 38.344q.001-.666-.358-1.145a1.7 1.7 0 0 0-.713-.56 1.65 1.65 0 0 0 .586-.52 1.73 1.73 0 0 0 .307-1.022q0-.607-.327-1.074a2.1 2.1 0 0 0-.918-.71q-.58-.248-1.34-.247-.72 0-1.417.213-.69.2-1.127.554l-.065.053.652 1.486.11-.076q.413-.29.863-.442h.002q.45-.163.844-.162c.266 0 .454.065.579.18l.004.002c.128.107.198.262.198.48 0 .201-.07.33-.197.412-.138.089-.376.141-.733.141h-1.01v1.626h1.188c.371 0 .614.056.75.15.127.085.2.23.2.463 0 .254-.078.412-.21.503l-.002.002c-.136.097-.386.157-.777.157q-.892.002-1.8-.605l-.11-.073-.65 1.483.064.053q.428.354 1.127.565h.002q.697.204 1.456.203c.852 0 1.538-.178 2.045-.546.517-.377.777-.896.777-1.544" clip-rule="evenodd"/></svg>
</template>

<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'
import { getPrefixCls } from '../_utils/global-config'
import { isNumber } from '../_utils/is'

defineOptions({ name: 'CIconOrderedList' })

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
const cls = computed(() => [prefixCls, `${prefixCls}-ordered-list`, { [`${prefixCls}-spin`]: props.spin }])
const innerStyle = computed<CSSProperties>(() => ({
  ...(props.size ? { fontSize: isNumber(props.size) ? `${props.size}px` : props.size } : {}),
  ...(props.rotate ? { transform: `rotate(${props.rotate}deg)` } : {}),
}))
</script>
