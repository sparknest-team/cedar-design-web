import { withInstall } from '../_utils/global-config'
import _FilterForm from './filter-form.vue'
import { filterFormProps } from './props'

const FilterForm = withInstall(_FilterForm, Object.assign(_FilterForm, {
}), { components: [_FilterForm] })

export type FilterFormInstance = InstanceType<typeof _FilterForm>
export type {
  FilterFormProps,
  FilterFormField,
  FilterFormFieldMap,
  FilterFormFieldRegistration,
} from './props'

export { filterFormProps }
export { FilterForm }
export const _FilterFormComponent = FilterForm

export default FilterForm
