<template>
  <div
    :class="
      classes(
        n(),
        [orientation, n(`--orientation-${orientation}`)],
        [textAlign, n(`--text-align-${textAlign}`)],
        [withText, n('--with-text')],
        [withPresetSizeX, n(`--size-x-${sizeX}`)],
        [withPresetSizeY, n(`--size-y-${sizeY}`)],
        [hairline, n('--hairline')],
        [type, n(`--type-${type}`)],
      )
    "
    :style="style"
    role="separator"
  >
    <slot>
      <span :class="n('text')" v-if="description">{{ description }}</span>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, CSSProperties, onUpdated, ref, useSlots } from 'vue'
import { onSmartMounted } from '@cedarjs/use'
import { toSizeUnit } from '../_utils/maple/elements'
import { createNamespace } from '../_utils/global-config'
import { dividerProps } from './props'

defineOptions({
  name: createNamespace('divider').name,
})

const { n, classes } = createNamespace('divider')

const props = defineProps(dividerProps)
const slots = useSlots()

const withText = ref(false)
const withPresetSizeX = computed(() => {
  const { sizeX } = props
  return ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(sizeX as string)
})
const withPresetSizeY = computed(() => {
  const { sizeY } = props
  return ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(sizeY as string)
})
const style = computed(() => {
  const { sizeX, sizeY, orientation, hairline } = props
  const styles: CSSProperties = {}
  // hairline 和 thickness 不能同时设置
  if (props.thickness && !hairline) {
    styles['--c-divider-border-width'] = toSizeUnit(props.thickness)
  }
  if (props.color) {
    styles['--c-divider-color'] = props.color
  }
  if (props.opacity) {
    styles['--c-divider-opacity'] = props.opacity
  }
  if (!withPresetSizeX.value) {
    let start: number | string | undefined
    let end: number | string | undefined
    if (Array.isArray(sizeX)) {
      // 数组情况：[left, right] 或 [left] (right = left)
      const startValue = sizeX[0]
      const endValue = sizeX.length > 1 ? sizeX[1] : sizeX[0]

      start = toSizeUnit(startValue)
      end = toSizeUnit(endValue)
    } else {
      // 数字或字符串情况：left 和 right 相同
      const value = toSizeUnit(sizeX)
      start = value
      end = value
    }
    const width = `calc(100% - ${start} - ${end})`
    if (orientation === 'horizontal') {
      styles.maxWidth = width
      styles.marginInlineStart = start
      styles.marginInlineEnd = end
    } else {
      styles.marginBlockStart = start
      styles.marginBlockEnd = end
    }
  }
  if (!withPresetSizeY.value) {
    let start: number | string | undefined
    let end: number | string | undefined
    if (Array.isArray(sizeY)) {
      const startValue = sizeY[0]
      const endValue = sizeY.length > 1 ? sizeY[1] : sizeY[0]

      start = toSizeUnit(startValue)
      end = toSizeUnit(endValue)
    } else {
      const value = toSizeUnit(sizeY)
      start = value
      end = value
    }
    const height = `calc(100% - ${start} - ${end})`
    if (orientation === 'horizontal') {
      styles.marginBlockStart = start
      styles.marginBlockEnd = end
    } else {
      styles.maxHeight = height
      styles.marginInlineStart = start
      styles.marginInlineEnd = end
    }
  }
  return styles
})

function checkHasText() {
  // the default slot or description is only effective in horizontal mode
  const { description } = props
  withText.value = !!slots.default || !!description
}

onSmartMounted(checkHasText)
onUpdated(checkHasText)
</script>
