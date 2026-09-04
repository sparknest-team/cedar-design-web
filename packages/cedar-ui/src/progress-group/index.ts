import { withInstall } from '../_utils/global-config'
import _ProgressGroup from './progress-group.vue'
import { progressGroupProps } from './props'

const ProgressGroup = withInstall(
  _ProgressGroup,
  Object.assign(_ProgressGroup, {}),
  { components: [_ProgressGroup] },
)

export type ProgressGroupInstance = InstanceType<typeof _ProgressGroup>
export type { ProgressGroupItem, ProgressGroupMode, ProgressGroupOrientation, ProgressGroupProps } from './props'
export { ProgressGroup, progressGroupProps }
export const _ProgressGroupComponent = ProgressGroup
export default ProgressGroup
