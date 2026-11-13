import { withInstall } from '../_utils/global-config'
import _Link from './Link.vue'
import { linkProps } from './props'

const Link: import('../_utils/global-config').ComponentWithInstall<typeof _Link> = withInstall(_Link)

export type LinkInstance = InstanceType<typeof _Link>
export { linkProps }
export type { LinkProps, LinkUnderline, LinkSize } from './props'
export { Link }
export const _LinkComponent: typeof Link = Link

export default Link
