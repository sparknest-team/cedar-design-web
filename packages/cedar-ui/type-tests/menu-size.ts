import type { MenuSize } from '@cedar-design/ui'
import type { MenuSize as EntrySize } from '@cedar-design/ui/menu'

const size: MenuSize = 'md'
const entry: EntrySize = size
// @ts-expect-error Unknown sizes are not part of the menu contract.
const invalid: MenuSize = 'huge'
void [entry, invalid]
