<template>
  <ul v-for="(style, index) of lines" :key="index" :class="prefixCls">
    <li :class="`${prefixCls}-row`" :style="style" />
  </ul>
</template>

<script lang="ts">
import type { CSSProperties } from 'vue'
import { defineComponent } from 'vue'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import { isNumber, isString } from '../_utils/is'
import { skeletonLineProps } from './props'

export default defineComponent({
  name: createNamespace('skeleton-line').name,
  props: skeletonLineProps,
  setup(props) {
    const prefixCls = getPrefixCls('skeleton-line')

    const lines: CSSProperties[] = []
    for (let i = 0; i < props.rows; i++) {
      const style: CSSProperties = {}
      if (isNumber(props.widths[i])) {
        style.width = `${props.widths[i]}px`
      } else if (isString(props.widths[i])) {
        style.width = String(props.widths[i])
      }
      style.height = `${props.lineHeight}px`
      if (i > 0) {
        style.marginTop = `${props.lineSpacing}px`
      }
      lines.push(style)
    }

    return {
      prefixCls,
      lines,
    }
  },
})
</script>
