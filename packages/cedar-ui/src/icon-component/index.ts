import { withInstall } from '../_utils/global-config'
import _Icon from './icon.vue'
import { iconComponentProps } from './props'

const Icon = withInstall(_Icon)

export type IconInstance = InstanceType<typeof _Icon>
export type IconProps = IconInstance['$props']

export const _IconComponentComponent = Icon

export { Icon }

export { iconComponentProps }

export default Icon
