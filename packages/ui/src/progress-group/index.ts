import { withInstall } from '../_utils/global-config'
import _ProgressGroup from './ProgressGroup.vue'
import { progressGroupProps } from './props'

const ProgressGroup: import('../_utils/global-config').ComponentWithInstall<typeof _ProgressGroup> = withInstall(_ProgressGroup,
  Object.assign(_ProgressGroup, {}),
  { components: [_ProgressGroup] },
)

export type ProgressGroupInstance = InstanceType<typeof _ProgressGroup>
export type { ProgressGroupItem, ProgressGroupMode, ProgressGroupOrientation, ProgressGroupProps } from './props'
export { ProgressGroup, progressGroupProps }
export const _ProgressGroupComponent: typeof ProgressGroup = ProgressGroup
export default ProgressGroup
