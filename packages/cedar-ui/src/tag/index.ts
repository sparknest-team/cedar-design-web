import { withInstall } from '../_utils/global-config'
import _Tag from './Tag.vue'
import { tagProps, tagVariants } from './props'

const Tag = withInstall(_Tag, Object.assign(_Tag, {
}), { components: [_Tag] })

export type TagInstance = InstanceType<typeof _Tag>
export type { TagProps } from './props'
export type { TagColor, TagVariant } from './types'
export { TAG_COLORS } from './types'

export { tagProps, tagVariants }
export { Tag }
export const _TagComponent = Tag

export default Tag
