import { withInstall } from '../_utils/global-config'
import _Badge from './Badge.vue'
import { badgeProps } from './props'

const Badge = withInstall(_Badge, Object.assign(_Badge, {
}), { components: [_Badge] })

export type BadgeInstance = InstanceType<typeof _Badge>
export { badgeProps }
export type {
  BadgeInlinePosition,
  BadgeMode,
  BadgePosition,
  BadgeProps,
  BadgeVariant,
} from './props'
export { Badge }
export const _BadgeComponent = Badge

export default Badge
