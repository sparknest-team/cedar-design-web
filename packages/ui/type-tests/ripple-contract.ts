import type { RippleDirectiveValue } from '@cedar-design/ui-vue'
import type { RippleDirectiveValue as EntryValue } from '@cedar-design/ui-vue/ripple'

const value: RippleDirectiveValue = { color: 'red', disabled: true }
const entry: EntryValue = value
// @ts-expect-error disabled is boolean.
const invalid: RippleDirectiveValue = { disabled: 'yes' }
void [entry, invalid]
