<template>
  <header :class="[classNames, { 'c-layout-header--bordered': bordered }]">
    <slot />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createNamespace, getPrefixCls } from '../_utils/global-config'

export default defineComponent({
  name: createNamespace('layout-header').name,
  /**
   * @zh 内容
   * @en Content
   * @slot default
   */
  props: { bordered: Boolean },
  setup() {
    const prefixCls = getPrefixCls('layout-header')
    const classNames = [prefixCls]

    return {
      classNames,
    }
  },
})
</script>
