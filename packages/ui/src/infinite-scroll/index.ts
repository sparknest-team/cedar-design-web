import { withInstall } from "../_utils/global-config";
import _InfiniteScroll from "./infinite-scroll.vue";
import { infiniteScrollProps } from "./props";

const InfiniteScroll: import('../_utils/global-config').ComponentWithInstall<typeof _InfiniteScroll> = withInstall(_InfiniteScroll,
  Object.assign(_InfiniteScroll, {}),
  { components: [_InfiniteScroll] },
);

export interface InfiniteScrollMethods {
  check: () => void;
  retry: () => void;
}

export type InfiniteScrollInstance = InstanceType<typeof _InfiniteScroll> &
  InfiniteScrollMethods;
export type { InfiniteScrollProps, InfiniteScrollStatus } from "./props";
export { InfiniteScroll, infiniteScrollProps };
export const _InfiniteScrollComponent: typeof InfiniteScroll = InfiniteScroll;

export default InfiniteScroll;
