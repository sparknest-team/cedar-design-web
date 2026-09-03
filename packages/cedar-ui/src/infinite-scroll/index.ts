import { withInstall } from "../_utils/global-config";
import _InfiniteScroll from "./infinite-scroll";
import { infiniteScrollProps } from "./props";

const InfiniteScroll = withInstall(
  _InfiniteScroll,
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
export const _InfiniteScrollComponent = InfiniteScroll;

export default InfiniteScroll;
