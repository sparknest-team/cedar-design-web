import { withPropsDefaultsSetter } from '../_utils/maple/components'
import Input from './input.vue'
import { inputProps } from './props'

const Component: typeof Input & { setPropsDefaults: (defaults: Record<string, any>) => void } =
  withPropsDefaultsSetter(Input, inputProps)

export default Component
