import { withPropsDefaultsSetter } from '../_utils/maple/components'
import Button from './Button.vue'

const Component: typeof Button & { setPropsDefaults: (defaults: Record<string, any>) => void } = withPropsDefaultsSetter(Button, Button.props)

export default Component
