import { withFieldPresentation } from '../_components/field-presentation/with-field-presentation'
import type { WithNativeAttributes } from '../_utils/native-listener-types'
import { dateFieldAdapter } from '../date/field-adapter'
import Base from './Date.vue'

const Presented: typeof Base = withFieldPresentation(Base, dateFieldAdapter(false))

export default Presented as WithNativeAttributes<typeof Presented, 'aria-label'>
