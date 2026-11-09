import { withFieldPresentation } from '../_components/field-presentation/with-field-presentation'
import Base from './mention'

export default withFieldPresentation(Base, {
  methods: ['focus', 'blur'], intent: 'input' })
