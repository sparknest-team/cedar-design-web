import { withFieldPresentation } from '../_components/field-presentation/with-field-presentation'
import Base from './radio.vue'

export default withFieldPresentation(Base, { methods: ['select', 'focus', 'blur'], })
