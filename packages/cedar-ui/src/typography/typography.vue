<template>
  <article :class="classNames"><slot /></article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import { typographyProps } from './props'

export default defineComponent({
  name: createNamespace('typography').name,
  props: typographyProps,
  setup() {
    const prefixCls = getPrefixCls('typography')

    return {
      classNames: [prefixCls],
    }
  },
})
</script>
