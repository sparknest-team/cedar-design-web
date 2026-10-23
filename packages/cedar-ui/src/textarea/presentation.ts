import { withFieldPresentation } from '../_components/field-presentation/with-field-presentation'
import Base from './textarea.vue'

export default withFieldPresentation(Base, { intent: 'input' })
