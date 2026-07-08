import type { App } from 'vue'
import _FilterForm from './filter-form.vue'
import { getComponentPrefix } from '../_utils/global-config'

export const FilterForm = Object.assign(_FilterForm, {
  install: (app: App, options?: any) => {
    const componentPrefix = getComponentPrefix(options)
    app.component(componentPrefix + _FilterForm.name, _FilterForm)
  },
})

export type FilterFormInstance = InstanceType<typeof _FilterForm>
export * from './filter-form-util'
export default FilterForm
