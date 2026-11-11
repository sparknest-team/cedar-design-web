import { withInstall } from '../_utils/global-config'
import _Space from './space'
import { spaceProps } from './props'

const Space = withInstall(_Space, Object.assign(_Space, {
}), { components: [_Space] })

export type SpaceInstance = InstanceType<typeof _Space>
export type {
  SpaceProps,
  SpaceAlign,
  SpaceDirection,
  SpaceJustify,
  SpaceInternalSize,
  SpaceSize,
} from './props'

export { spaceProps }
export { Space }

export const _SpaceComponent = Space

export default Space
