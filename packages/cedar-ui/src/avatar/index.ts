import { withInstall } from '../_utils/global-config'
import _Avatar from './Avatar.vue'
import _AvatarGroup from './AvatarGroup.vue'
import { avatarGroupProps, avatarProps } from './props'

const Avatar = withInstall(
  _Avatar,
  Object.assign(_Avatar, {
    Group: _AvatarGroup,
  }),
  { components: [_Avatar, _AvatarGroup] },
)

export type AvatarInstance = InstanceType<typeof _Avatar>
export type AvatarGroupInstance = InstanceType<typeof _AvatarGroup>
export { avatarGroupProps, avatarProps }
export type { AvatarGroupProps, AvatarObjectFit, AvatarProps, AvatarShape, AvatarTriggerType } from './props'
export { Avatar }
export { _AvatarGroup as AvatarGroup }

export const _AvatarComponent = Avatar
export const _AvatarGroupComponent = _AvatarGroup

export default Avatar
