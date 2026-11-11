import { withFieldPresentation } from '../_components/field-presentation/with-field-presentation'
import Base from './Color.vue'
import { colorFieldAdapter } from './field-adapter'

export default withFieldPresentation(Base, colorFieldAdapter)
