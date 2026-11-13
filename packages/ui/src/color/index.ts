import { withInstall } from '../_utils/global-config'
import _Color from './presentation'
import { colorProps } from './props'

const Color: import('../_utils/global-config').ComponentWithInstall<typeof _Color> = withInstall(_Color, Object.assign(_Color, {}), { components: [_Color] })

export type ColorInstance = InstanceType<typeof _Color>
export type { ColorProps } from './props'
export { Color, colorProps }
export const _ColorComponent: typeof Color = Color

export default Color
