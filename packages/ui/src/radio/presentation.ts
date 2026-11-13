import { withFieldPresentation } from '../_components/field-presentation/with-field-presentation'
import Base from './radio.vue'

const Presented: typeof Base = withFieldPresentation(Base, { methods: ['select', 'focus', 'blur'], })

export default Presented
