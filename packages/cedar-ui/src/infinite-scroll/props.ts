import type { ExtractPropTypes, PropType } from "vue";

export type InfiniteScrollStatus = "idle" | "loading" | "error" | "finished";

export const infiniteScrollProps = {
  status: {
    type: String as PropType<InfiniteScrollStatus>,
    default: "idle",
  },
  bottomOffset: {
    type: [String, Number] as PropType<string | number>,
    default: 0,
  },
  immediate: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  target: {
    type: [String, Object] as PropType<string | HTMLElement>,
  },
};

export type InfiniteScrollProps = Partial<
  ExtractPropTypes<typeof infiniteScrollProps>
>;
