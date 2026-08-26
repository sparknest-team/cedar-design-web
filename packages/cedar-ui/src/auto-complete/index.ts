import { withInstall } from '../_utils/global-config'
import _AutoComplete from './auto-complete'
import { autoCompleteProps } from './props'

const AutoComplete = withInstall(_AutoComplete, Object.assign(_AutoComplete, {
}), { components: [_AutoComplete] })

export type AutoCompleteInstance = InstanceType<typeof _AutoComplete>
export type { AutoCompleteProps } from './props'
export { AutoComplete, autoCompleteProps }
export const _AutoCompleteComponent = AutoComplete

export default AutoComplete
