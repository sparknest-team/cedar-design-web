<template>
  <main :class="classNames">
    <slot />
  </main>
</template>

<script>
import { createNamespace } from '../_utils/global-config'
import { defineComponent } from 'vue'
import { getPrefixCls } from '../_utils/global-config'

export default defineComponent({
  name: createNamespace("layout-content").name,
  /**
   * @zh 内容
   * @en Content
   * @slot default
   */
  setup() {
    const prefixCls = getPrefixCls('layout-content')
    const classNames = [prefixCls]

    return {
      classNames,
    }
  },
})
</script>
