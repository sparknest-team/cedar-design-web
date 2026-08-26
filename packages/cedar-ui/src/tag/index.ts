import { withInstall } from '../_utils/global-config'
import _Tag from './tag.vue'
import { tagProps } from './props'

const Tag = withInstall(_Tag, Object.assign(_Tag, {
}), { components: [_Tag] })

export type TagInstance = InstanceType<typeof _Tag>
export type { TagProps } from './props'
export type { TagColor, TagVariant } from './types'

export { tagProps }
export { Tag }
export const _TagComponent = Tag

export default Tag
