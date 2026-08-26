import { withInstall } from '../_utils/global-config'
import _Anchor from './anchor.vue'
import _AnchorLink from './anchor-link.vue'
import { anchorProps } from './props'

const Anchor = withInstall(_Anchor, Object.assign(_Anchor, {
  Link: _AnchorLink,
}), { components: [_Anchor, _AnchorLink] })

export type AnchorInstance = InstanceType<typeof _Anchor>
export type AnchorLinkInstance = InstanceType<typeof _AnchorLink>

export { _AnchorLink as AnchorLink }

export const _AnchorComponent = Anchor

export { Anchor }

export { anchorProps }

export default Anchor
