import { withInstall } from '../_utils/global-config'
import _AutoComplete from './presentation'
import { autoCompleteProps } from './props'

const AutoComplete: import('../_utils/global-config').ComponentWithInstall<typeof _AutoComplete> = withInstall(_AutoComplete, Object.assign(_AutoComplete, {}), {
  components: [_AutoComplete],
})

export * from './props'

export type AutoCompleteInstance = InstanceType<typeof _AutoComplete> & import('./types').AutoCompleteExpose

export { AutoComplete, autoCompleteProps }

export const _AutoCompleteComponent: typeof AutoComplete = AutoComplete

export default AutoComplete

export type { AutoCompleteEmits, AutoCompleteSlots, AutoCompleteExpose } from './types'

export type { AutoCompleteTriggerOptions } from './trigger-options'
