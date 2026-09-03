import { computed, defineComponent, inject, ref, toRefs } from "vue";
import { getPrefixCls, createNamespace } from "../_utils/global-config";
import { configProviderInjectionKey } from "../config-provider/context";
import Spin from "../spin";
import Empty from "../empty";
import VirtualList from "../_components/virtual-list-v2";
import type {
  ScrollIntoViewOptions,
  VirtualListProps,
} from "../_components/virtual-list-v2/interface";
import Scrollbar from "../scrollbar";
import { useComponentRef } from "../_hooks/use-component-ref";
import { useScrollbar } from "../_hooks/use-scrollbar";
import { isNumber } from "../_utils/is";
import { listProps } from "./props";

const { name } = createNamespace("list");

export default defineComponent({
  name,
  props: listProps,
  emits: {
    /**
     * @zh 列表滚动时触发
     * @en Triggered when the list scrolls
     */
    scroll: (event: Event) => event instanceof Event,
  },
  /**
   * @zh 头部信息
   * @en Header
   * @slot header
   */
  /**
   * @zh 底部信息
   * @en Footer
   * @slot footer
   */
  /**
   * @zh 空白展示
   * @en Empty
   * @slot empty
   */
  /**
   * @zh 列表项
   * @en List Item
   * @slot item
   * @binding {number} index
   * @binding {any} item
   */
  setup(props, { emit, slots }) {
    const { scrollbar } = toRefs(props);
    const prefixCls = getPrefixCls("list");
    const configCtx = inject(configProviderInjectionKey, undefined);
    const { componentRef } = useComponentRef("containerRef");
    const isVirtualList = computed(() =>
      Boolean(props.virtualListProps && !slots.default),
    );
    const { displayScrollbar, scrollbarProps } = useScrollbar(scrollbar);

    const handleScroll = (e: Event) => {
      emit("scroll", e);
    };

    const renderItems = () => {
      if (slots.default) {
        return slots.default();
      }

      if (props.data?.length) {
        return props.data.map((item, index) => slots.item?.({ item, index }));
      }

      return renderEmpty();
    };

    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-${props.size}`,
      {
        [`${prefixCls}-bordered`]: props.bordered,
        [`${prefixCls}-split`]: props.split,
      },
    ]);

    const contentStyle = computed(() => {
      if (props.maxHeight) {
        const maxHeight = isNumber(props.maxHeight)
          ? `${props.maxHeight}px`
          : props.maxHeight;
        return { maxHeight, overflowY: "auto" as const };
      }
      return undefined;
    });

    const contentCls = computed(() => [
      `${prefixCls}-content`,
      {
        [`${prefixCls}-virtual`]: isVirtualList.value,
      },
    ]);

    const virtualListRef = ref();
    const renderVirtualList = () => {
      const data = props.data ?? [];

      return data.length ? (
        <VirtualList
          ref={virtualListRef}
          v-slots={{
            item: ({ item, index }: { item: unknown; index: number }) =>
              slots.item?.({ item, index }),
          }}
          class={contentCls.value}
          {...(props.virtualListProps as Omit<
            VirtualListProps,
            "itemKey" | "data"
          > & {
            itemKey?: string;
          })}
          data={data as Record<string, any>[]}
          onScroll={handleScroll}
        />
      ) : (
        renderEmpty()
      );
    };

    const renderEmpty = () => {
      if (props.loading) {
        return null;
      }

      return (
        slots.empty?.() ??
        configCtx?.slots.empty?.({ component: "list" }) ?? <Empty />
      );
    };

    const render = () => {
      const Component = displayScrollbar.value ? Scrollbar : "div";

      return (
        <div class={`${prefixCls}-wrapper`}>
          <Spin class={`${prefixCls}-spin`} loading={props.loading}>
            <Component
              ref={componentRef}
              class={cls.value}
              style={contentStyle.value}
              {...scrollbarProps.value}
              onScroll={handleScroll}
            >
              <div class={`${prefixCls}-content-wrapper`}>
                {slots.header && (
                  <div class={`${prefixCls}-header`}>{slots.header()}</div>
                )}
                {isVirtualList.value ? (
                  renderVirtualList()
                ) : (
                  <div role="list" class={contentCls.value}>
                    {renderItems()}
                  </div>
                )}
                {slots.footer && (
                  <div class={`${prefixCls}-footer`}>{slots.footer()}</div>
                )}
              </div>
            </Component>
          </Spin>
        </div>
      );
    };

    return {
      virtualListRef,
      render,
    };
  },
  methods: {
    /**
     * @zh 虚拟滚动到某个元素
     * @en Virtual scroll to an element
     * @param {{ index?: number; key?: number | string; align: 'auto' | 'top' | 'bottom'}} options
     * @public
     */
    scrollIntoView(options: ScrollIntoViewOptions) {
      if (this.virtualListRef) {
        this.virtualListRef.scrollTo(options);
      }
    },
  },
  render() {
    return this.render();
  },
});
