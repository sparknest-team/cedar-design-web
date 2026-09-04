import { defineComponent, computed, toRefs } from "vue";
import { createNamespace, formatElevation } from "../_utils/global-config";
import Loading from "../loading";
import { useSize } from "../_hooks/use-size";
import Divider from "../divider";
import { cardProps } from "./props";

const { name } = createNamespace("card");

export default defineComponent({
  name,
  components: {
    Loading,
  },
  props: cardProps,
  /**
   * @zh 卡片标题
   * @en Title of card
   * @slot title
   */
  /**
   * @zh 卡片封面
   * @en Cover of card
   * @slot cover
   */
  /**
   * @zh 卡片右上角的操作区域
   * @en The action which shows at the top-right corner of the card
   * @slot titleAction
   */
  /**
   * @zh 卡片底部
   * @en The action which shows at the bottom of the Card
   * @slot action
   */
  /**
   * @zh 卡片副标题
   * @en Subtitle of card
   * @slot subtitle
   */
  /**
   * @zh 卡片描述
   * @en Description of card
   * @slot description
   */
  /**
   * @zh 卡片内容
   * @en The content of card
   * @slot default
   */
  setup(props, { slots }) {
    const { n, classes } = createNamespace("card");
    const { size } = toRefs(props);
    const { mergedSize: _mergedSize } = useSize(size);
    const mergedSize = computed(() => {
      if (_mergedSize.value === "sm" || _mergedSize.value === "xs") {
        return "sm";
      }
      return "md";
    });

    return () => {
      const hasTitle = Boolean(slots.title ?? props.title);
      const hasSubtitle = Boolean(props.subtitle ?? slots.subtitle);
      const hasDescription = Boolean(props.description ?? slots.description);
      const hasContent = Boolean(slots.default?.());
      const hasTitleAction = Boolean(slots["title-action"]);
      return (
        <div
          class={classes(
            n(),
            n(`--size-${mergedSize.value}`),
            n(`--variant-${props.variant}`),
            [props.variant === "default", formatElevation(props.elevation, 0)],
            [props.loading, n("--loading")],
            [props.hoverable, n("--hoverable")],
            [
              props.direction === "row" || props.direction === "row-reverse",
              n("--direction-row"),
            ],
            [props.direction === "row-reverse", n("--direction-row-reverse")],
          )}
        >
          <div class={classes(n("floater"))}>
            {slots.cover && (
              <div class={classes(n("cover"))}>{slots.cover?.()}</div>
            )}
            <div class={classes(n("container"))}>
              {(hasTitle || hasTitleAction) && (
                <div class={classes(n("title"))} style={props.titleStyle}>
                  {slots.title?.() ?? props.title}
                  {hasTitleAction && (
                    <div class={classes(n("title-action"))}>
                      {slots["title-action"]?.()}
                    </div>
                  )}
                </div>
              )}
              {hasSubtitle && (
                <div class={classes(n("subtitle"))}>
                  {slots.subtitle?.() ?? props.subtitle}
                </div>
              )}
              {props.topDivider && <Divider class={classes(n("divider"))} />}
              {hasContent && (
                <div class={classes(n("content"))}>
                  {props.loading ? <Loading /> : slots.default?.()}
                </div>
              )}
              {hasDescription && (
                <div class={classes(n("description"))}>
                  {slots.description?.() ?? props.description}
                </div>
              )}
              {props.bottomDivider && <Divider class={classes(n("divider"))} />}
              {slots.action && (
                <div class={classes(n("action"))}> {slots.action?.()} </div>
              )}
            </div>
          </div>
          <div
            class={classes(n("holder"))}
            style={{
              width: "auto",
              height: "auto",
            }}
          />
          <span class={classes(n("underlay"))}></span>
        </div>
      );
    };
  },
});
