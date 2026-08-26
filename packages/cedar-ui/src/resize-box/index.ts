import { withInstall } from '../_utils/global-config'
import _ResizeBox from './resize-box.vue'
import { resizeBoxProps } from './props'

const ResizeBox = withInstall(_ResizeBox, Object.assign(_ResizeBox, {
}), { components: [_ResizeBox] })

export type ResizeBoxInstance = InstanceType<typeof _ResizeBox>

export const _ResizeBoxComponent = ResizeBox

export { ResizeBox }

export { resizeBoxProps }

export default ResizeBox
