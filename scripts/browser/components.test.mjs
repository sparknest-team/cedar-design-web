import { fileURLToPath } from 'node:url'
import { defineProductionComponentTests } from '../../../design-ui/browser/runner.mjs'
import { defineProductionNavigationTests } from '../../../design-ui/browser/navigation-gate.mjs'

defineProductionNavigationTests({ root: fileURLToPath(new URL('../../', import.meta.url)), library: 'cedar' })
defineProductionComponentTests({ root: fileURLToPath(new URL('../../', import.meta.url)), library: 'cedar' })
