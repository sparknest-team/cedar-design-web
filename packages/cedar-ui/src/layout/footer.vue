<template>
  <footer :class="[classNames, { 'c-layout-footer--bordered': bordered }]">
    <slot />
  </footer>
</template>

<script>
import { createNamespace } from "../_utils/global-config";
import { defineComponent } from "vue";
import { getPrefixCls } from "../_utils/global-config";

export default defineComponent({
  name: createNamespace("layout-footer").name,
  /**
   * @zh 内容
   * @en Content
   * @slot default
   */
  props: { bordered: Boolean },
  setup() {
    const prefixCls = getPrefixCls("layout-footer");
    const classNames = [prefixCls];

    return {
      classNames,
    };
  },
});
</script>
