import type { FilterFormEmits, FilterFormExpose, FilterFormInstance, FilterFormSlots } from '@cedar-design/ui'
import type { FilterFormEmits as SubEmits, FilterFormSlots as SubSlots } from '@cedar-design/ui/filter-form'

type IsAny<T> = 0 extends 1 & T ? true : false
export const typedForm: IsAny<NonNullable<FilterFormInstance['formRef']>> = false
export function methods(instance: FilterFormInstance, exposed: FilterFormExpose) {
  instance.formRef?.validate()
  instance.formRef?.resetFields('query')
  exposed.formRef?.clearValidate()
  // @ts-expect-error The exposed inner Form is not a new container-reset API.
  instance.formRef?.resetFilterContainer()
}
export const change: FilterFormEmits['change'] = [{ query: 'typed' }, 'query']
export const subChange: SubEmits['change'] = change
export const slots: FilterFormSlots = { actions: () => 'buttons' }
export const subSlots: SubSlots = slots
// @ts-expect-error actions does not provide scoped model/update helpers.
export const wrongScope: FilterFormSlots = { actions: (scope: { model: object }) => String(scope.model) }
