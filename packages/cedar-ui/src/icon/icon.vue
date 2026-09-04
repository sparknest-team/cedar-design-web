<template>
  <span :class="cls" :style="innerStyle" @click="emit('click', $event)">
    <slot v-if="$slots.default" />
    <component v-else-if="iconComponent" :is="iconComponent" />
  </span>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { computed, getCurrentInstance, nextTick, ref, watch } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import { toSizeUnit } from '../_utils/maple/elements'
import { iconProps } from './props'

defineOptions({
  name: createNamespace('icon').name,
})

const props = defineProps(iconProps)
const emit = defineEmits<{ click: [event: MouseEvent] }>()
const instance = getCurrentInstance()
const prefixCls = getPrefixCls('icon')
const nextName = ref<string>()
const animateInProgress = ref(false)

const iconComponent = computed(() => {
  if (!nextName.value) return undefined
  const componentName = `Icon${nextName.value
    .split('-')
    .filter(Boolean)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join('')}`
  const components = instance?.appContext.components
  return components?.[componentName] ?? components?.[`C${componentName}`]
})

const innerStyle = computed(() => {
  const styles: CSSProperties = {}
  if (props.size != null) {
    styles.fontSize = toSizeUnit(props.size)
  }
  if (props.rotate) {
    styles.rotate = `${props.rotate}deg`
  }
  if (props.color) {
    styles.color = props.color
  }
  styles.transitionDuration = `${Number(props.transition) || 0}ms`
  return styles
})

const cls = computed(() => [
  prefixCls,
  {
    [`${prefixCls}-spin`]: props.spin,
    [props.animationClass ?? `${prefixCls}--shrinking`]: animateInProgress.value,
  },
])

watch(() => props.name, async (newName, oldName) => {
  if (oldName == null || (Number(props.transition) || 0) === 0) {
    nextName.value = newName
    return
  }
  animateInProgress.value = true
  await nextTick()
  setTimeout(() => {
    nextName.value = newName
    animateInProgress.value = false
  }, Number(props.transition) || 0)
}, { immediate: true })
</script>
