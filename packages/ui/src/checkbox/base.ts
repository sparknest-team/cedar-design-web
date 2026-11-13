import { withPropsDefaultsSetter } from '../_utils/maple/components'
import Checkbox from './presentation'

const Component: typeof Checkbox & { setPropsDefaults: (defaults: Record<string, any>) => void } = withPropsDefaultsSetter(Checkbox, Checkbox.props)

export default Component
