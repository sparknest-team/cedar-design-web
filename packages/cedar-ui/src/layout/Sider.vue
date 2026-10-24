<template>
  <component
    :is="componentTag"
    :class="classNames"
    :style="{ width: siderWidth }"
    v-bind="resizeDirections ? { directions: resizeDirections } : {}"
  >
    <div
      :class="`${prefixCls}__viewport`"
      :inert="localCollapsed && collapsedWidth === 0 ? true : undefined"
    >
      <div
        ref="scrollRef"
        tabindex="0"
        :class="`${prefixCls}-children`"
        :style="contentStyles"
        @scroll="$emit('scroll', $event)"
      >
        <slot />
      </div>
    </div>
    <button
      type="button"
      v-if="showTrigger"
      :aria-expanded="!localCollapsed"
      :aria-label="localCollapsed ? '展开侧栏' : '收起侧栏'"
      :class="triggerClassNames"
      @click="toggleTrigger"
    >
      <slot name="trigger" :collapsed="localCollapsed">
        <div v-if="!arrowReversed">
          <IconLeft v-if="!localCollapsed" />
          <IconRight v-else />
        </div>
        <div v-else>
          <IconLeft v-if="localCollapsed" />
          <IconRight v-else />
        </div>
      </slot>
    </button>
  </component>
</template>

<script lang="tsx">
import { useLayoutScroll } from "./use-scroll";
import { createNamespace } from "../_utils/global-config";
import {
  computed,
  defineComponent,
  inject,
  onMounted,
  onUnmounted,
  PropType,
  provide,
  reactive,
  Ref,
  ref,
  toRefs,
} from "vue";
import { IconRight } from "@cedar-design/icons-vue/icon-right";
import { IconLeft } from "@cedar-design/icons-vue/icon-left";
import { getPrefixCls } from "../_utils/global-config";
import { isNumber } from "../_utils/is";
import useMergeState from "../_hooks/use-merge-state";
import { LayoutSiderInjectionKey, SiderInjectionKey } from "./context";
import ResizeBox from "../resize-box";
import { useResponsive } from "../_hooks/use-responsive";

const generateId = (() => {
  let i = 0;
  return (prefix = "") => {
    i += 1;
    return `${prefix}${i}`;
  };
})();

export default defineComponent({
  name: createNamespace("layout-sider").name,
  components: {
    IconLeft,
    IconRight,
    ResizeBox,
  },
  props: {
    bordered: Boolean,
    placement: { type: String as PropType<"left" | "right">, default: "left" },
    collapseMode: {
      type: String as PropType<"width" | "transform">,
      default: "width",
    },
    /**
     * @zh 主题颜色
     * @en Theme
     */
    theme: {
      type: String as PropType<"dark" | "light">,
      default: "light",
    },
    /**
     * @zh 当前收起状态
     * @en Current collapsed state
     */
    collapsed: {
      type: Boolean,
      default: undefined,
    },
    /**
     * @zh 默认的收起状态
     * @en The default collapsed state
     */
    defaultCollapsed: {
      type: Boolean,
    },
    /**
     * @zh 是否可收起
     * @en Whether is collapsible
     */
    collapsible: {
      type: Boolean,
    },
    /**
     * @zh 宽度
     * @en Width
     */
    width: {
      type: [Number, String],
      default: 200,
    },
    /**
     * @zh 收缩宽度
     * @en Collapsed width
     */
    collapsedWidth: {
      type: Number,
      default: 48,
    },
    /**
     * @zh 翻转折叠提示箭头的方向，当 Sider 在右边时可以使用
     * @en Flip and fold the direction of the hint arrow, which can be used when Sider is on the right
     */
    reverseArrow: {
      type: Boolean,
    },
    /**
     * @zh 触发响应式布局的断点, 详见[响应式栅格](/vue/component/grid)
     * @en Trigger breakpoints for responsive layout, see [Responsive Grid](/vue/component/grid) for details
     */
    breakpoint: {
      type: String as PropType<"xxl" | "xl" | "lg" | "md" | "sm" | "xs">,
    },
    /**
     * @zh 可以用 ResizeBox 替换原生的 `aside` 标签，这个参数即 ResizeBox的 `directions` 参数。详情请看 [ResizeBox](/vue/component/resize-box)。
     * @en Can replace the native `aside` tag with ResizeBox. This is the `directions` parameter of ResizeBox. For details, please see [ResizeBox](/vue/component/resize-box)
     */
    resizeDirections: {
      type: Array as PropType<Array<"left" | "right" | "top" | "bottom">>,
      default: undefined,
    },
    /**
     * @zh 隐藏底部折叠触发器
     * @en Whether to hide the bottom fold trigger
     */
    hideTrigger: {
      type: Boolean,
    },
  },
  emits: [
    "scroll",
    /**
     * @zh 展开-收起时的事件，有点击 trigger 以及响应式反馈两种方式可以触发
     * @en Events on expand/collapse. There are two ways to trigger click trigger and responsive feedback
     * @param {boolean} collapsed
     * @param {'clickTrigger'|'responsive'} type
     */
    "collapse",
    "update:collapsed",
    /**
     * @zh 触发响应式布局断点时的事件
     * @en Events when a responsive layout breakpoint is triggered
     * @param {boolean} collapsed
     */
    "breakpoint",
  ],
  /**
   * @zh 自定义底部折叠触发器
   * @en Custom bottom folding trigger
   * @slot trigger
   * @binding {boolean} collapsed
   */
  setup(props, { emit, expose }) {
    const { scrollRef, scrollTo } = useLayoutScroll();
    expose({ scrollTo });
    const arrowReversed = computed(
      () => props.reverseArrow || props.placement === "right",
    );
    const contentStyles = computed(() =>
      props.collapseMode === "transform"
        ? {
            width:
              typeof props.width === "number"
                ? `${props.width}px`
                : props.width,
            transform:
              localCollapsed.value && props.placement === "left"
                ? `translateX(calc(${props.collapsedWidth}px - ${typeof props.width === "number" ? `${props.width}px` : props.width}))`
                : undefined,
          }
        : undefined,
    );
    const {
      theme,
      collapsed,
      defaultCollapsed,
      collapsible,
      hideTrigger,
      breakpoint,
      collapsedWidth,
      resizeDirections,
    } = toRefs(props);

    const [localCollapsed, setLocalCollapsed] = useMergeState(
      defaultCollapsed.value,
      reactive({
        value: collapsed,
      }),
    );

    const componentTag = computed(() =>
      resizeDirections.value ? "ResizeBox" : "div",
    );

    const showTrigger = computed(() => collapsible.value && !hideTrigger.value);

    // classNames
    const prefixCls = getPrefixCls("layout-sider");
    const classNames = computed(() => [
      prefixCls,
      {
        [`${prefixCls}--bordered`]: props.bordered,
        [`${prefixCls}--right`]: props.placement === "right",
        [`${prefixCls}--zero`]:
          localCollapsed.value && props.collapsedWidth === 0,
        [`${prefixCls}-light`]: theme.value === "light",
        [`${prefixCls}-has-trigger`]: showTrigger.value,
        [`${prefixCls}-collapsed`]: localCollapsed.value,
      },
    ]);

    // Width calculation
    const siderWidth = computed(() => {
      const { width, collapsedWidth } = props;
      const rawWidth = localCollapsed.value ? collapsedWidth : width;
      return isNumber(rawWidth) ? `${rawWidth}px` : String(rawWidth);
    });

    // trigger classNames
    const triggerClassNames = computed(() => [
      `${prefixCls}-trigger`,
      {
        [`${prefixCls}-trigger-light`]: theme.value === "light",
      },
    ]);

    const toggleTrigger = () => {
      const newCollapsed = !localCollapsed.value;
      setLocalCollapsed(newCollapsed);
      emit("update:collapsed", newCollapsed);
      emit("collapse", newCollapsed, "clickTrigger");
    };

    // Subscription Responsive
    useResponsive(breakpoint, (checked) => {
      const newCollapsed = !checked;
      if (newCollapsed !== localCollapsed.value) {
        setLocalCollapsed(newCollapsed);
        emit("update:collapsed", newCollapsed);
        emit("collapse", newCollapsed, "responsive");
        emit("breakpoint", newCollapsed);
      }
    });

    const uniqueId = generateId("__arco_layout_sider");
    const siderHook = inject(LayoutSiderInjectionKey, undefined);
    onMounted(() => {
      siderHook?.onSiderMount?.(uniqueId);
    });
    onUnmounted(() => {
      siderHook?.onSiderUnMount?.(uniqueId);
    });

    // 提供 context
    provide(
      SiderInjectionKey,
      reactive({
        theme,
        collapsed: localCollapsed as Ref<boolean>,
        collapsedWidth,
      }),
    );

    return {
      scrollRef,
      scrollTo,
      contentStyles,
      arrowReversed,
      componentTag,
      prefixCls,
      classNames,
      triggerClassNames,
      localCollapsed,
      siderWidth,
      showTrigger,
      toggleTrigger,
    };
  },
});
</script>
