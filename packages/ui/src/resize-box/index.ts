import { withInstall } from '../_utils/global-config'
import _ResizeBox from './ResizeBox.vue'
import { resizeBoxProps } from './props'

const ResizeBox: import('../_utils/global-config').ComponentWithInstall<typeof _ResizeBox> = withInstall(_ResizeBox, Object.assign(_ResizeBox, {
}), { components: [_ResizeBox] })

export type ResizeBoxInstance = InstanceType<typeof _ResizeBox>

export const _ResizeBoxComponent: typeof ResizeBox = ResizeBox

export { ResizeBox }

export { resizeBoxProps }

export default ResizeBox
export type { ResizeBoxProps, ResizeBoxDirection } from './props'
