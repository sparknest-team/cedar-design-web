<template>
  <main
    ref="scrollRef"
    :tabindex="scrollable ? 0 : undefined"
    :class="[classNames, { 'c-layout--scrollable': scrollable }]"
    @scroll="$emit('scroll', $event)"
  >
    <slot />
  </main>
</template>

<script lang="ts">
import { useLayoutScroll } from "./use-scroll";
import { createNamespace } from "../_utils/global-config";
import { defineComponent } from "vue";
import { getPrefixCls } from "../_utils/global-config";

export default defineComponent({
  name: createNamespace("layout-content").name,
  /**
   * @zh 内容
   * @en Content
   * @slot default
   */
  props: { scrollable: Boolean },
  emits: { scroll: (event: Event) => true },
  setup(_, { expose }) {
    const { scrollRef, scrollTo } = useLayoutScroll();
    expose({ scrollTo });
    const prefixCls = getPrefixCls("layout-content");
    const classNames = [prefixCls];

    return {
      classNames,
      scrollRef,
      scrollTo,
    };
  },
});
</script>
