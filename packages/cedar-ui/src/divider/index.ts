import { withInstall } from '../_utils/global-config'
import _Divider from './divider.vue'
import { dividerProps } from './props'

const Divider = withInstall(_Divider, Object.assign(_Divider, {
}), { components: [_Divider] })

export type DividerInstance = InstanceType<typeof _Divider>
export type { DividerProps } from './props'

export { dividerProps }
export { Divider }

export const _DividerComponent = Divider

export default Divider
