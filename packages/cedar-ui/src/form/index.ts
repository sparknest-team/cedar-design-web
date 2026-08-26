import { withInstall } from '../_utils/global-config'
import _Form from './form.vue'
import _FormItem from './form-item.vue'
import { formProps } from './props'

const Form = withInstall(_Form, Object.assign(_Form, {
  Item: _FormItem,
}), { components: [_Form, _FormItem] })

export type FormInstance = InstanceType<typeof _Form>
export type FormItemInstance = InstanceType<typeof _FormItem>
export type { ValidateStatus, ValidateTrigger, ValidatedError, FieldRule, FormItemEventHandler } from './types'

export { _FormItem as FormItem }

export const _FormComponent = Form

export { Form }

export { formProps }

export default Form
