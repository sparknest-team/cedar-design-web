<template>
  <span :class="cls" :style="innerStyle">
    <slot v-if="$slots.default" />
    <component v-else-if="iconComponent" :is="iconComponent" />
  </span>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { computed, getCurrentInstance } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import { isNumber } from '../_utils/is'
import { iconComponentProps } from './props'

defineOptions({
  name: createNamespace('icon').name,
})

const props = defineProps(iconComponentProps)
const instance = getCurrentInstance()
const prefixCls = getPrefixCls('icon')

const iconComponent = computed(() => {
  if (!props.name) return undefined
  const componentName = `Icon${props.name
    .split('-')
    .filter(Boolean)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join('')}`
  return instance?.appContext.components[componentName]
})

const innerStyle = computed(() => {
  const styles: CSSProperties = {}
  if (props.size) {
    styles.fontSize = isNumber(props.size) ? `${props.size}px` : props.size
  }
  if (props.rotate) {
    styles.transform = `rotate(${props.rotate}deg)`
  }
  if (props.color) {
    styles.color = props.color
  }
  return styles
})

const cls = computed(() => [
  prefixCls,
  {
    [`${prefixCls}-loading`]: props.spin,
  },
  props.type,
])
</script>
