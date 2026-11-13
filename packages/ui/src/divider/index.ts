import { withInstall } from '../_utils/global-config'
import _Divider from './Divider.vue'
import { dividerProps } from './props'

const Divider: import('../_utils/global-config').ComponentWithInstall<typeof _Divider> = withInstall(_Divider, Object.assign(_Divider, {
}), { components: [_Divider] })

export type DividerInstance = InstanceType<typeof _Divider>
export type { DividerProps, DividerOrientation, DividerTextAlign, DividerType, DividerSize, DividerSizePreset } from './props'

export { dividerProps }
export { Divider }

export const _DividerComponent: typeof Divider = Divider

export default Divider
