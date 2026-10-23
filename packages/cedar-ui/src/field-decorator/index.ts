import { withInstall } from '../_utils/global-config'
import _FieldDecorator from './FieldDecorator.vue'

const FieldDecorator = withInstall(_FieldDecorator)

export { FieldDecorator }
export { fieldDecoratorProps } from './props'
export type { FieldDecoratorProps, FieldDecoratorSize, FieldDecoratorVariant } from './props'
export type FieldDecoratorInstance = InstanceType<typeof FieldDecorator>
export const _FieldDecoratorComponent = FieldDecorator
export default FieldDecorator
