import { withInstall } from '../_utils/global-config'
import _Link from './Link.vue'
import { linkProps } from './props'

const Link = withInstall(_Link)

export type LinkInstance = InstanceType<typeof _Link>
export { linkProps }
export type { LinkProps, LinkUnderline } from './props'
export { Link }
export const _LinkComponent = Link

export default Link
