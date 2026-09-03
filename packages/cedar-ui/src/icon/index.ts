import { withInstall } from '../_utils/global-config'
import _Icon from './icon.vue'
import { iconProps } from './props'

const Icon = withInstall(_Icon)

export type IconInstance = InstanceType<typeof _Icon>
export type IconProps = IconInstance['$props']

export const _IconComponent = Icon

export { Icon }

export { iconProps }

export default Icon
