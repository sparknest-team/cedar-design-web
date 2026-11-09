<template>
  <article :class="classNames"><slot /></article>
</template>

<script lang="ts">
import { defineComponent, type SlotsType } from 'vue'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import { typographyProps } from './props'
import type { TypographySlots } from './types'

export default defineComponent({
  name: createNamespace('typography').name,
  props: typographyProps,
  slots: Object as SlotsType<TypographySlots>,
  setup() {
    const prefixCls = getPrefixCls('typography')

    return {
      classNames: [prefixCls],
    }
  },
})
</script>
