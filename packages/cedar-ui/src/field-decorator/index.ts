import FieldDecorator from './FieldDecorator.vue'

export { FieldDecorator }
export { fieldDecoratorProps } from './props'
export type { FieldDecoratorProps, FieldDecoratorSize, FieldDecoratorVariant } from './props'
export type FieldDecoratorInstance = InstanceType<typeof FieldDecorator>
export const _FieldDecoratorComponent = FieldDecorator
export default FieldDecorator
