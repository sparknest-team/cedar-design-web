import { withInstall } from '../_utils/global-config'
import _Anchor from './Anchor.vue'
import _AnchorLink from './AnchorLink.vue'
import { anchorProps } from './props'

const Anchor: import('../_utils/global-config').ComponentWithInstall<typeof _Anchor & { Link: typeof _AnchorLink }> = withInstall(_Anchor, Object.assign(_Anchor, {
  Link: _AnchorLink,
}), { components: [_Anchor, _AnchorLink] })

export type AnchorInstance = InstanceType<typeof _Anchor>
export type AnchorLinkInstance = InstanceType<typeof _AnchorLink>

export { _AnchorLink as AnchorLink }

export const _AnchorComponent: typeof Anchor = Anchor
export const _AnchorLinkComponent: typeof _AnchorLink = _AnchorLink

export { Anchor }

export { anchorProps }

export default Anchor
export type AnchorProps = import('../_utils/public-props').CompatiblePublicProps<typeof import('./props').anchorProps>

export type { AnchorLinkProps } from './link-props'
export type { AnchorBoundaryPosition } from './props'
