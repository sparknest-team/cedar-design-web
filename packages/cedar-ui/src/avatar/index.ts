import { withInstall } from '../_utils/global-config'
import _Avatar from './avatar.vue'
import _AvatarGroup from './avatar-group'
import { avatarGroupProps, avatarProps } from './props'

const Avatar = withInstall(_Avatar, Object.assign(_Avatar, {
  Group: _AvatarGroup,
}), { components: [_Avatar, _AvatarGroup] })

export type AvatarInstance = InstanceType<typeof _Avatar>
export type AvatarGroupInstance = InstanceType<typeof _AvatarGroup>
export { avatarGroupProps, avatarProps }
export type { AvatarGroupProps, AvatarProps } from './props'
export type { AvatarShape, AvatarTriggerType, ObjectFit } from './types'
export { Avatar }
export { _AvatarGroup as AvatarGroup }

export const _AvatarComponent = Avatar
export const _AvatarGroupComponent = _AvatarGroup

export default Avatar
