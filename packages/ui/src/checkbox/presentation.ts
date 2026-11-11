import { withFieldPresentation } from '../_components/field-presentation/with-field-presentation'
import Base from './checkbox.vue'

export default withFieldPresentation(Base, { methods: ['toggle', 'focus', 'blur'], })
