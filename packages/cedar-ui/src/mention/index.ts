import { withInstall } from '../_utils/global-config'
import _Mention from './mention'
import { mentionProps } from './props'

const Mention = withInstall(_Mention, Object.assign(_Mention, {
}), { components: [_Mention] })

export type MentionInstance = InstanceType<typeof _Mention>

export const _MentionComponent = Mention

export { Mention }

export { mentionProps }

export default Mention
export type MentionProps = import('vue').ExtractPublicPropTypes<typeof import('./props').mentionProps>
