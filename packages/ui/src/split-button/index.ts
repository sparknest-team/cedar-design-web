import { withInstall } from '../_utils/global-config'
import _SplitButton from './SplitButton.vue'
import { splitButtonProps } from './props'

const SplitButton: import('../_utils/global-config').ComponentWithInstall<typeof _SplitButton> = withInstall(_SplitButton)

export type SplitButtonInstance = InstanceType<typeof _SplitButton>
export type { SplitButtonButtonProps, SplitButtonProps } from './props'
export { splitButtonProps, SplitButton }
export const _SplitButtonComponent: typeof SplitButton = SplitButton

export default SplitButton
