import { withFieldPresentation } from '../_components/field-presentation/with-field-presentation'
import Base from './Color.vue'
import { colorFieldAdapter } from './field-adapter'

const Presented: typeof Base = withFieldPresentation(Base, colorFieldAdapter)

export default Presented
