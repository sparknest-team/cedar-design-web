import { withInstall } from '../_utils/global-config'
import _Color from './color.vue'
import { colorProps } from './props'

const Color = withInstall(_Color, Object.assign(_Color, {
}), { components: [_Color] })

export type ColorInstance = InstanceType<typeof _Color>
export type { ColorProps } from './props'
export { Color, colorProps }
export const _ColorComponent = Color

export default Color
