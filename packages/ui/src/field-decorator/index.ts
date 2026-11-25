import { withInstall } from '../_utils/global-config'
import { withPropsDefaultsSetter } from '../_utils/maple/components'
import _FieldDecorator from './FieldDecorator.vue'
import { fieldDecoratorProps } from './props'

const FieldDecorator: import('../_utils/global-config').ComponentWithInstall<typeof _FieldDecorator> =
  withInstall(_FieldDecorator)

// The SFC adds an internal prop, while embedded fields read the public descriptors.
const setComponentDefaults = FieldDecorator.setPropsDefaults
const publicDefaults = withPropsDefaultsSetter({}, fieldDecoratorProps)
FieldDecorator.setPropsDefaults = (defaults) => {
  setComponentDefaults(defaults)
  publicDefaults.setPropsDefaults(defaults)
}

export { FieldDecorator }
export { fieldDecoratorProps }
export type { FieldDecoratorProps, FieldDecoratorSize, FieldDecoratorVariant } from './props'
export type FieldDecoratorInstance = InstanceType<typeof FieldDecorator>
export const _FieldDecoratorComponent: typeof FieldDecorator = FieldDecorator
export default FieldDecorator

export type { OpenTriggerTarget } from '../_components/picker-field/open-trigger'

export { fieldLoadingProps, fieldLoadingModes } from './props'
export type { FieldLoadingMode, FieldLoadingProps } from './props'
