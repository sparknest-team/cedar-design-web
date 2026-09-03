import {
  Comment,
  Fragment,
  computed,
  defineComponent,
  toRefs,
  type VNode,
} from "vue";
import { isArray, isNumeric } from "@cedarjs/shared";
import { padStartFlex, toSizeUnit } from "../_utils/maple/elements";
import { unFragment } from "../_utils/vue-utils";
import { spaceProps as props, type SpaceSize } from "./props";
import { createNamespace } from "../_utils/global-config";

const isInternalSize = (size: any) =>
  ["xs", "sm", "md", "lg", "xl"].includes(size);

const { name, n, classes } = createNamespace("space");

function getSize(size: SpaceSize, isInternalSize: boolean): string[] {
  return isInternalSize
    ? [
        `var(--c-space-size-${size}-row-gap)`,
        `var(--c-space-size-${size}-column-gap)`,
      ]
    : isArray(size)
      ? (size.map(toSizeUnit) as string[])
      : isNumeric(size)
        ? [toSizeUnit(size) as string, toSizeUnit(size) as string]
        : [
            `var(--c-space-size-${size}-row-gap)`,
            `var(--c-space-size-${size}-column-gap)`,
          ];
}

export default defineComponent({
  name,
  props,
  setup(props, { slots }) {
    const { block, justify, align, wrap, direction, size } = toRefs(props);

    // 将 size 转为 CSS gap 值
    const gapStyle = computed(() => {
      const [rowGap, columnGap] = getSize(
        size.value,
        isInternalSize(size.value),
      );
      return `${rowGap} ${columnGap}`;
    });

    return () => {
      const rawChildren = (slots.default?.() ?? []) as VNode[];
      const children = (unFragment(rawChildren) as any[]).filter(
        (node) =>
          !(
            node &&
            typeof node === "object" &&
            (node as VNode).type === Comment
          ),
      );
      const hasSplit = !!slots.split;

      return (
        <div
          class={classes(n(), [block.value, n("--block")])}
          style={{
            gap: gapStyle.value,
            flexDirection: direction.value,
            justifyContent: padStartFlex(justify.value),
            alignItems: padStartFlex(
              direction.value === "row"
                ? !align.value
                  ? "center"
                  : align.value
                : !align.value
                  ? "stretch"
                  : align.value,
            ),
            flexWrap: wrap.value ? "wrap" : "nowrap",
          }}
        >
          {children.map((child, index) => {
            const key = (child as VNode)?.key ?? `c-space-item-${index}`;
            return (
              <Fragment key={key as string | number | symbol}>
                {hasSplit && index > 0 && (
                  <div class={n("item-split")}>{slots.split?.()}</div>
                )}
                <div class={n("item")}>{child}</div>
              </Fragment>
            );
          })}
        </div>
      );
    };
  },
});
