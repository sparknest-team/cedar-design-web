<template>
  <component
    :is="componentTag"
    :class="classNames"
    :style="{ width: siderWidth }"
    v-bind="normalizedResizeDirections !== undefined ? { directions: resizeBoxDirections, width: resizeBoxWidth, 'onUpdate:width': onResizeWidth } : {}"
  >
    <div
      :class="`${prefixCls}__viewport`"
      :inert="localCollapsed && effectiveCollapsedWidth === 0 ? true : undefined"
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
      :aria-label="triggerLabel"
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
  watch,
} from "vue";
import { IconRight } from "@cedar-design/icons-vue/icon-right";
import { IconLeft } from "@cedar-design/icons-vue/icon-left";
import { getPrefixCls } from "../_utils/global-config";
import { isNumber } from "../_utils/is";
import useMergeState from "../_hooks/use-merge-state";
import { LayoutSiderInjectionKey, SiderInjectionKey } from "./context";
import ResizeBox from "../resize-box";
import { useI18n } from '../locale'
import { isResizeBoxDirections, isResizeBoxSize, normalizeResizeBoxDirections, type ResizeBoxDirection } from '../resize-box/validation'
import { isSiderPlacement, isSiderCollapseMode, isSiderBreakpoint, isSiderWidth } from './sider-validation'
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
    placement: { type: String as PropType<"left" | "right">, default: "left", validator: process.env.NODE_ENV !== 'production' ? isSiderPlacement : undefined },
    collapseMode: {
      type: String as PropType<"width" | "transform">,
      default: "width",
      validator: process.env.NODE_ENV !== 'production' ? isSiderCollapseMode : undefined,
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
      validator: process.env.NODE_ENV !== 'production' ? isSiderWidth : undefined,
    },
    /**
     * @zh 收缩宽度
     * @en Collapsed width
     */
    collapsedWidth: {
      type: Number,
      default: 48,
      validator: process.env.NODE_ENV !== 'production' ? isResizeBoxSize : undefined,
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
      validator: process.env.NODE_ENV !== 'production' ? isSiderBreakpoint : undefined,
    },
    /**
     * @zh 可以用 ResizeBox 替换原生的 `div` 标签，这个参数即 ResizeBox的 `directions` 参数。详情请看 [ResizeBox](/vue/component/resize-box)。
     * @en Can replace the native `div` tag with ResizeBox. This is the `directions` parameter of ResizeBox. For details, please see [ResizeBox](/vue/component/resize-box)
     */
    resizeDirections: {
      type: Array as PropType<ResizeBoxDirection[]>,
      default: undefined,
      validator: process.env.NODE_ENV !== 'production' ? isResizeBoxDirections : undefined,
    },
    /**
     * @zh 隐藏底部折叠触发器
     * @en Whether to hide the bottom fold trigger
     */
    hideTrigger: {
      type: Boolean,
    },
  },
  emits: {
    scroll: (event: Event) => true,
    collapse: (collapsed: boolean, type: 'clickTrigger' | 'responsive') => true,
    'update:collapsed': (collapsed: boolean) => true,
    breakpoint: (collapsed: boolean) => true,
  },
  /**
   * @zh 自定义底部折叠触发器
   * @en Custom bottom folding trigger
   * @slot trigger
   * @binding {boolean} collapsed
   */
  setup(props, { emit, expose }) {
    const { scrollRef, scrollTo } = useLayoutScroll();
    const { t } = useI18n()
    const effectivePlacement = computed(() => isSiderPlacement(props.placement) ? props.placement : 'left')
    const effectiveCollapsedWidth = computed(() => isResizeBoxSize(props.collapsedWidth) ? props.collapsedWidth : 48)
    const normalizedWidth = computed(() => isSiderWidth(props.width) ? props.width : 200)
    const effectiveBreakpoint = computed(() => isSiderBreakpoint(props.breakpoint) ? props.breakpoint : undefined)

    expose({ scrollTo });
    const arrowReversed = computed(
      () => props.reverseArrow || effectivePlacement.value === "right",
    );
    const resizedWidth = ref<number>()
    const expandedWidth = computed(() => resizedWidth.value ?? normalizedWidth.value)
    watch(() => props.width, () => { resizedWidth.value = undefined })
    const contentStyles = computed(() =>
      props.collapseMode === "transform"
        ? {
            width:
              typeof expandedWidth.value === "number"
                ? `${expandedWidth.value}px`
                : expandedWidth.value,
            transform:
              localCollapsed.value && effectivePlacement.value === "left"
                ? `translateX(calc(${effectiveCollapsedWidth.value}px - ${typeof expandedWidth.value === "number" ? `${expandedWidth.value}px` : expandedWidth.value}))`
                : undefined,
          }
        : undefined,
    );
    const {
      collapsed,
      defaultCollapsed,
      collapsible,
      hideTrigger,
      resizeDirections,
    } = toRefs(props);

    const [localCollapsed, setLocalCollapsed] = useMergeState(
      defaultCollapsed.value,
      reactive({
        value: collapsed,
      }),
    );

    const normalizedResizeDirections = computed(() => resizeDirections.value === undefined ? undefined : normalizeResizeBoxDirections(resizeDirections.value))
    const componentTag = computed(() => normalizedResizeDirections.value === undefined ? 'div' : 'ResizeBox');

    const showTrigger = computed(() => collapsible.value && !hideTrigger.value);

    // classNames
    const prefixCls = getPrefixCls("layout-sider");
    const classNames = computed(() => [
      prefixCls,
      {
        [`${prefixCls}--bordered`]: props.bordered,
        [`${prefixCls}--right`]: effectivePlacement.value === "right",
        [`${prefixCls}--zero`]:
          localCollapsed.value && effectiveCollapsedWidth.value === 0,
        [`${prefixCls}-has-trigger`]: showTrigger.value,
        [`${prefixCls}-collapsed`]: localCollapsed.value,
      },
    ]);

    // Width calculation
    const siderWidth = computed(() => {
      const rawWidth = localCollapsed.value ? effectiveCollapsedWidth.value : expandedWidth.value;
      return isNumber(rawWidth) ? `${rawWidth}px` : String(rawWidth);
    });

    const resizeBoxWidth = computed(() => {
      const value = localCollapsed.value ? effectiveCollapsedWidth.value : expandedWidth.value
      return typeof value === 'number' ? value : undefined
    })
    const resizeBoxDirections = computed(() => localCollapsed.value ? [] : normalizedResizeDirections.value)
    const onResizeWidth = (value: number) => {
      if (!localCollapsed.value && Number.isFinite(value) && value >= 0) resizedWidth.value = value
    }

    // trigger classNames
    const triggerClassNames = computed(() => [
      `${prefixCls}-trigger`,
      {
      },
    ]);

    const toggleTrigger = () => {
      const newCollapsed = !localCollapsed.value;
      setLocalCollapsed(newCollapsed);
      emit("update:collapsed", newCollapsed);
      emit("collapse", newCollapsed, "clickTrigger");
    };

    // Subscription Responsive
    useResponsive(effectiveBreakpoint, (checked) => {
      const newCollapsed = effectiveBreakpoint.value === "xs" ? checked : !checked;
      if (newCollapsed !== localCollapsed.value) {
        setLocalCollapsed(newCollapsed);
        emit("update:collapsed", newCollapsed);
        emit("collapse", newCollapsed, "responsive");
      }
      emit("breakpoint", newCollapsed);
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
      reactive({ collapsed: localCollapsed as Ref<boolean>, collapsedWidth: effectiveCollapsedWidth }),
    );

    const triggerLabel = computed(() => t(localCollapsed.value ? 'layout.expandSider' : 'layout.collapseSider'))
    return {
      triggerLabel,
      effectiveCollapsedWidth,
      normalizedResizeDirections,
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
      resizeBoxWidth,
      resizeBoxDirections,
      onResizeWidth,
      showTrigger,
      toggleTrigger,
    };
  },
});
</script>
