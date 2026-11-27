import { withPropsDefaultsSetter } from '../_utils/maple/components'
import type { WithNativeAttributes } from '../_utils/native-listener-types'
import Button from './Button.vue'

const Component: WithNativeAttributes<
  typeof Button,
  'aria-label' | 'aria-haspopup' | 'aria-expanded' | 'aria-pressed' | 'title'
> & { setPropsDefaults: (defaults: Record<string, any>) => void } = withPropsDefaultsSetter(Button, Button.props)

export default Component
