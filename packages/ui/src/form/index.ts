import { withInstall } from '../_utils/global-config'
import _Form from './Form.vue'
import _FormItem from './FormItem.vue'
import { formItemProps } from './item-props'
import { formProps } from './props'

const Form: import('../_utils/global-config').CedarComponentWithInstall<typeof _Form & { Item: typeof _FormItem }> = withInstall(
  _Form,
  Object.assign(_Form, {
    Item: _FormItem,
  }),
  { components: [_Form, _FormItem] },
)

export type FormInstance = InstanceType<typeof _Form>
export type FormItemInstance = InstanceType<typeof _FormItem>
export type { ValidateStatus, ValidateTrigger, ValidatedError, FieldRule, FormItemEventHandler } from './types'
export type { FormValidateErrors } from './types'

export { _FormItem as FormItem }

export const _FormComponent: typeof Form = Form
export const _FormItemComponent: typeof _FormItem = _FormItem

export { Form }

export { formProps, formItemProps }
export { useFormErrorDescription } from './error-description'

export default Form
export type FormProps = import('../_utils/public-props').CompatiblePublicProps<typeof import('./props').formProps>

export type { FormLayout, FormContentAlign, FormLabelAlign, FormColProps, FormLabelFlex } from './layout-props'
export type { FormItemProps } from './item-props'

export type { FormItemAsteriskPosition, FormItemValidateStatus } from './item-decoration'

export type { FieldEditMode, BeforeFieldCommit } from '../_components/field-presentation/context'

export type { FieldData, FormEmits, FormSlots, FormItemSlots, FormEditingError, FormSubmitError } from './types'
