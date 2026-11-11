import { withInstall } from "../_utils/global-config";
import _Watermark from "./watermark";
import { watermarkProps } from "./props";

const Watermark = withInstall(_Watermark, Object.assign(_Watermark, {}), {
  components: [_Watermark],
});

export type WatermarkInstance = InstanceType<typeof _Watermark> &
  import("./types").WatermarkExposed;
export type WatermarkProps = import("vue").ExtractPublicPropTypes<
  typeof import("./props").watermarkProps
>;
export type { WatermarkError, WatermarkExposed, WatermarkFont } from "./types";
export { Watermark, watermarkProps };
export const _WatermarkComponent = Watermark;
export default Watermark;
