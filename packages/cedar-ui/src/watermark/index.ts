import { withInstall } from '../_utils/global-config'
import _Watermark from './watermark'
import { watermarkProps } from './props'

const Watermark = withInstall(_Watermark, Object.assign(_Watermark, {
}), { components: [_Watermark] })

export type WatermarkInstance = InstanceType<typeof _Watermark>

export const _WatermarkComponent = Watermark

export { Watermark }

export { watermarkProps }

export default Watermark
