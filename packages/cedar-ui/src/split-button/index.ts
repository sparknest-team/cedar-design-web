import { withInstall } from '../_utils/global-config'
import _SplitButton from './SplitButton.vue'
import { splitButtonProps } from './props'

const SplitButton = withInstall(_SplitButton)

export type SplitButtonInstance = InstanceType<typeof _SplitButton>
export type { SplitButtonProps } from './props'
export { splitButtonProps, SplitButton }
export const _SplitButtonComponent = SplitButton

export default SplitButton
