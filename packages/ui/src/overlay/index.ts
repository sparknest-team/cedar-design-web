import { withInstall } from "../_utils/global-config";
import _Overlay from "./overlay.vue";
import { overlayProps } from "./props";

const Overlay: import('../_utils/global-config').ComponentWithInstall<typeof _Overlay> = withInstall(_Overlay);

export type OverlayInstance = InstanceType<typeof _Overlay>;
export type { OverlayProps } from "./props";
export { Overlay, overlayProps };
export const _OverlayComponent: typeof Overlay = Overlay;

export default Overlay;
