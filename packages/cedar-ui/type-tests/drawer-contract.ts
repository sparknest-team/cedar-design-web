import type { DrawerConfig, DrawerProps } from '../src'
import type { DrawerConfig as EntryConfig } from '../src/drawer'
const service: DrawerConfig = { content: 'Settings', dir: 'rtl', ariaLabel: 'Settings' }
const entry: EntryConfig = service
const component: DrawerProps = { dir: 'ltr', ariaLabel: 'Settings' }
// @ts-expect-error direction is a shared reading-direction enum
const invalid: DrawerConfig = { content: 'Settings', dir: 'sideways' }
void [service, entry, component, invalid]
