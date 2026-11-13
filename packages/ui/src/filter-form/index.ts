import { withInstall } from '../_utils/global-config'
import _FilterForm from './FilterForm.vue'
import { filterFormProps } from './props'
import type { FilterFormExpose } from './types'

const FilterForm: import('../_utils/global-config').ComponentWithInstall<typeof _FilterForm> = withInstall(_FilterForm, Object.assign(_FilterForm, {}), { components: [_FilterForm] })

export type FilterFormInstance = InstanceType<typeof _FilterForm> & FilterFormExpose
export type { FilterFormProps, FilterFormField, FilterFormFieldMap, FilterFormFieldRegistration } from './props'

export type { FilterFormEmits, FilterFormSlots, FilterFormExpose } from './types'

export { filterFormProps }
export { FilterForm }
export const _FilterFormComponent: typeof FilterForm = FilterForm

export default FilterForm
