import type { FormEmits, FormSlots, FormItemSlots, ValidatedError, FormInstance, FormSubmitError, FormValidateErrors } from '@cedar-design/ui'
import type { FormEmits as SubEmits } from '@cedar-design/ui/form'
export const submit: SubEmits['submit'] = [{ values: {}, errors: undefined }, new Event('submit')]
export const main: FormEmits['submit'] = submit
export const slots: FormSlots = { default: () => 'fields' }
export const itemSlots: FormItemSlots = { default: () => 'input', label: () => 'Label', help: () => 'Help', extra: () => 'Extra' }
// @ts-expect-error Form default slot has no model scope.
export const invalidSlots: FormSlots = { default: (scope: { model: object }) => String(scope.model) }
export function rich(error: ValidatedError) { const label: string = error.label; const value: unknown = error.value; const type: string = error.type; const required: boolean = error.isRequiredError; return { label, value, type, required } }
export function blocked(error: FormSubmitError) { if ('type' in error) rich(error) }
export async function result(instance: FormInstance) { const errors = await instance.validate(); if (errors) rich(errors.name) }
import type { FieldRule } from '@cedar-design/ui'
export type ValidatorReturn = ReturnType<NonNullable<FieldRule<string>['validator']>>
export const awaited: ValidatorReturn = Promise.resolve()
export const asyncRule: FieldRule<string> = { validator: async (value, done, context) => { await Promise.resolve(); if (!value) done(context?.field) } }

export function aggregate(errors: FormValidateErrors) { if (errors) rich(errors.name) }
export function editing(error: FormSubmitError) {
  // @ts-expect-error A blocked editing notice does not promise a rich validation label.
  return error.label
}
