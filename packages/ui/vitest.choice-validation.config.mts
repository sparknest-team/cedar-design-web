import { mergeConfig } from 'vite'
import base from './vitest.config.mts'

export default mergeConfig(base, {
  // Isolate SSR and DOM suites so Vue is initialized after each JSDOM setup.
  test: { pool: 'forks', maxWorkers: 1 },
})
