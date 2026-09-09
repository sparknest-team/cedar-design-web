<template>
  <header :class="[classNames, { 'c-layout-header--bordered': bordered }]">
    <slot />
  </header>
</template>

<script>
import { createNamespace } from "../_utils/global-config";
import { defineComponent } from "vue";
import { getPrefixCls } from "../_utils/global-config";

export default defineComponent({
  name: createNamespace("layout-header").name,
  /**
   * @zh 内容
   * @en Content
   * @slot default
   */
  props: { bordered: Boolean },
  setup() {
    const prefixCls = getPrefixCls("layout-header");
    const classNames = [prefixCls];

    return {
      classNames,
    };
  },
});
</script>
