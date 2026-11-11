import { withFieldPresentation } from '../_components/field-presentation/with-field-presentation'
import Base from './input-tag'

export default withFieldPresentation(Base, {
  inheritInputGroup: true,
  intent: 'input',
  changeArgs: (value, _props, event) => (event ? [value, event] : [value]),
})
